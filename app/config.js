const env = process.env.NODE_ENV || 'dev'

const globalConfig = {
  development: {
    api: 'http://localhost:8091',
  },
  stage: {
    api: 'http://covidimaging.nordwhale.com',
  },
  production: {
    api: 'http://covidimaging.nordwhale.com',
  },
}
export default globalConfig[env]