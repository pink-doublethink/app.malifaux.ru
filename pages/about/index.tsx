import Head from 'next/head'
import { useCallback } from 'react'
import Сontainer from '@/components/molecules/Сontainer'
import AboutPage from '@/components/organisms/AboutPage/AboutPage'
import Breadcrumbs from '@/components/molecules/Breadcrumbs/Breadcrumbs'

function About() {
  const getDefaultTextGenerator = useCallback(() => 'О компании', [])
  const getTextGenerator = useCallback((param: string) => ({}[param]), [])

  return (
    <>
      <Head>
        <title>Аква Тепмикс | О компании</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.svg" />
      </Head>
      <Сontainer>
        <main>
          <Breadcrumbs
            getDefaultTextGenerator={getDefaultTextGenerator}
            getTextGenerator={getTextGenerator}
          />
          <AboutPage />
          <div className="overlay" />
        </main>
      </Сontainer>
    </>
  )
}

export default About
