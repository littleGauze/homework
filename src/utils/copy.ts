import fs from 'fs'
import path from 'path'

// get params from command line
const args = process.argv.slice(2)

function main() {
  let dest: string = ''

  if (!args[0]) {
    console.error('Please provide a source file path!')
    return
  }

  const src = args[0]

  if (args[1]) {
    dest = args[1]
  }
  copy(src, dest)
}

main()

function copy(src: string, dest?: string) {
  const stat = fs.statSync(src)

  if (!stat.isFile()) {
    console.error('Source is not a file!')
    return
  }

  let transferred = 0
  const total = stat.size
  const name = `${path.basename(src).split('.')[0]}_Copy${path.extname(src)}`

  if (path.extname(dest || '')) {
    dest = path.resolve(dest!)
  } else {
    dest = path.resolve(path.dirname(src), name)
  }

  const source = fs.createReadStream(src)
  source.on('data', (chunk: Buffer) => {
    transferred += chunk.length
    const progress = (transferred / total) * 100
    log(`Progress: ${progress.toFixed(2)}%`);
  })

  source.on('end', () => {
    log(`Progress: 100%`, true);
    console.log(`Copied ${src} to ${dest}.`)
  })

  const destination = fs.createWriteStream(dest)

  source.pipe(destination)
}

const interval = 100
let now = Date.now()
function log(msg: string, force = false) {
  if (Date.now() - now > interval || force) {
    console.log(msg)
    now = Date.now()
  }
}