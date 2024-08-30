### 部署正式环境

- Step1: 构建之前添加alias配置到`packages.json`文件中
```json
{
  "name": "dhgate_statistics",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  ...,

  // 添加下面配置到pacakges.json中, 开发环境中请把以下语句去掉，会和ts-node的配置冲突
  "_moduleAliases": {
    "@": "dist"
  }
}

```
> 开发环境中请把以下语句去掉，会和ts-node的配置冲突

- Step2: 构建
```shell
yarn build
```
或者
```shell
npm run build
```

- Step3: 部署
使用pm2等工具部署 dist/index.js即可

- docker 运行

``` shell
sudo docker build -t dhgate_statistics:latest .

sudo docker run -d --name  dhgate_statistics -p 9317:8098 -v /home/ubuntu/work/docker-data/dhgate_statistics/stats:/home/work/app/stats -v /home/ubuntu/work/docker-data/dhgate_statistics/reports:/home/work/app/reports --restart=always dhgate_statistics
```