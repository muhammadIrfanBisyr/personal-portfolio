import moment from "moment";

export const formatFirebaseDate = (date, newFormat = 'DD MMMM YYYY') => {
    return date ? moment(date.toDate().toDateString(), 'ddd MMM DD YYYY').format(newFormat) : '-';
}