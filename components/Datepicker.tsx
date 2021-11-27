import { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import generatePicker from 'antd/lib/date-picker/generatePicker'

// overide object ของ rc-picker ให้เป็น พศ
const customGenerateConfig = Object.assign(dayjsGenerateConfig, {
  getYear: function getYear(date: any) {
    return parseInt(date.format('BBBB'))
  },
  setYear: function setYear(date: any, year: any) {
    return date.year(year - 543)
  },
})

export const DatePicker = generatePicker<Dayjs>(customGenerateConfig)

export default DatePicker
