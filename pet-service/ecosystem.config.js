module.exports = {
  apps: [
    {
      name: "Auth Service",
      script: "index.js",
      instances: 1,
      watch: false,
      exec_mode: "cluster",
      autorestart: true,
      ignore_watch: ["node_modules"],
      max_memory_restart: "350M",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
