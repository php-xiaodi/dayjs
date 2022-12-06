const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const isBetween = require('dayjs/plugin/isBetween')

dayjs.extend(utc)

dayjs.extend(isBetween)

module.exports = (dt) => dayjs(dt).utc().add(8, 'h')
