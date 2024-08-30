import { Config } from './type'

const config: Config = {
  port: 3000,
  schedule: '0 3 * * *', // 每天凌晨3点执行
}

export default config
