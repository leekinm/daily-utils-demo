import moment from 'moment'

// daily utilities

// default format
const FORMAT = 'YYYY-MM-DD HH:mm:ss'

module.exports = exports = (function() {
  return {
    displayTime(value, format = FORMAT) {
      if (!value) return value
  
      // it's has been converted, just return it.
      if (typeof value === 'string') return value
  
      return moment(value).format(format)
    }
  }
})()
