/** @jsx jsx */
import { jsx } from '@emotion/core'

import Head from 'next/head'

import { css, Global } from '@emotion/core'
import theme from '../config/theme';
import Header from './Header';

const Page = ({children, ...restProps}) => {
  return (
    <div>
      <Global
        styles={css(theme.global)}
      />
      <Head>
        <title>Restaurant Sekery</title>
        <link href="https://fonts.googleapis.com/css?family=Magra:700|Merriweather:400,700&amp;display=swap&amp;subset=latin-ext" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Page;