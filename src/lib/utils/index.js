import moment from "moment";

export const formatFirebaseDate = (date, newFormat = 'DD MMMM YYYY') => {
    return date ? moment(date.toDate().toDateString(), 'ddd MMM DD YYYY').format(newFormat) : '-';
}

export const getImageUrl = (name) =>{
    return new URL(`./assets/logo/${name}.png`, import.meta.url).href
}