module.exports = {
  apps: [
    {
      name: 'structa-painel',
      script: 'npx',
      args: 'wrangler pages dev dist --d1=structa-painel-production --local --ip 0.0.0.0 --port 3000',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
