import HelpersService from './helpers.service'

process.env = process.env || {}
const apiUrl = process.env.VUE_APP_API_URL

const helpersService = new HelpersService({ apiUrl })

export {
  helpersService
}
