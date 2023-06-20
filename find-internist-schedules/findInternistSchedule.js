const { findInternistSchedule } = require('./internistSchedules')

const day = 'Monday'
const schedule = findInternistSchedule(day)
console.log(schedule)