const internistSchedules = [
  { day: 'Monday', startTime: '09:00', endTime: '14:00' },
  { day: 'Tuesday', startTime: '10:00', endTime: '16:00' },
  { day: 'Wednesday', startTime: '13:00', endTime: '18:00' },
]

function findInternistSchedule(day) {
  const schedule = internistSchedules.find(schedule => schedule.day.toLowerCase() === day.toLowerCase())
  return schedule ? `Internist schedule on ${schedule.day}: ${schedule.startTime} - ${schedule.endTime}` : 'No schedule found for that day'
}

module.exports = {
  findInternistSchedule: findInternistSchedule
}