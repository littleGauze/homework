import dev from './dev'
import prod from './prod'
import { Config } from './type'

const isProd = process.env.NODE_ENV === 'production'

let config: Config = dev

if (isProd) {
  config = prod
}

console.log(`======== isProd: ${isProd} =======`)

export default config
