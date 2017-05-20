import Moment from 'moment'

export default {
  dateFromNow (date) {
    return Moment(date).fromNow()
  }

}
