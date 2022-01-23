import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import updateLocale from 'dayjs/plugin/updateLocale'
import relativeTime from 'dayjs/plugin/relativeTime'
import calendar from "dayjs/plugin/calendar";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import "dayjs/locale/fr";

// Add dayjs plugins
dayjs.extend(localizedFormat)
dayjs.extend(weekday)
dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
dayjs.extend(calendar)

export const dayJS = dayjs

