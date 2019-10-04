const formatDate = function(datetime: string) {
  let date = new Date(datetime)
  let currentYear = new Date().getFullYear()

  let monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  let day = date.getDate()
  let month = monthNames[date.getMonth()]
  let year = date.getFullYear()

  return year === currentYear ? `${month} ${day}` : `${month} ${day}, ${year}`
}

export default formatDate
