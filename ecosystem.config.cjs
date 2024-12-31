module.exports = {
  apps: [
    {
      name: 'UXLINK-Bridge',
      instances: 'max',
      script: 'yarn',
      args: 'start',
      watch: true,
      exec_mode: 'fork', 
      instances: 1,
      env: {
        PORT: 10081, // 指定的端口
        NODE_ENV: 'production' // 环境设置
      }
    }
  ]
}
