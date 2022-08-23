const {DateTime} = require("luxon");

export default function smallDate(date) {

    const dt = DateTime.fromISO(date)
    return dt.setLocale('fr').toLocaleString(DateTime.DATE_SHORT)

}