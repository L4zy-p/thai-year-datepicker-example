import type { AppProps } from 'next/app'
import dayjs from 'dayjs'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import locale from 'antd/lib/date-picker/locale/th_TH'

import 'antd/dist/antd.css'
import '../styles/globals.css'


import 'dayjs/locale/th'

// dayjs จะมี format BBBB ให้เราใช้
dayjs.extend(buddhistEra)

// local lang th_TH ของ ให้ปี เป็น format BBBB ซึ่งก็คือ พ.ศ.
const yearFormat = 'BBBB'
locale.lang.yearFormat = yearFormat;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />

}

export default MyApp
