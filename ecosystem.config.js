/**
 * @file: ecosystem.config.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-03-30
 * @description: this is a <js> file
 */
/* eslint-disable */
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
        name: "ldap-dev",
        script: "./index.js",
        cwd: '/home/www/noderoot/ldap/server',
        watch: true,
        env: {
            "NODE_ENV": "development",
        },
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        error_file: './logs/error/error.log',
        out_file: './logs/out/out.log',
        pid_file: './pm.pid',
        listen_timeout: '100000'
    },
    // Second application
    {
        name: "ldap",
        script: "./index.js",
        cwd: '/home/www/noderoot/ldap/server',
        watch: false,
        env_production: {
            "NODE_ENV": "production"
        },
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        error_file: './logs/error/error.log',
        out_file: './logs/out/out.log',
        pid_file: './pm.pid',
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "node",
      host : "212.83.163.1",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/var/www/production",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production"
    },
    dev : {
      user : "node",
      host : "212.83.163.1",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/var/www/development",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
/* eslint-enable */
