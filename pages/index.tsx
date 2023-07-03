import Head from 'next/head'
import Сontainer from '@/components/molecules/Сontainer'
import DashboardPage from '@/components/organisms/DashboardPage/DashboardPage'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import Breadcrumbs from '@/components/molecules/Breadcrumbs/Breadcrumbs'

function Auth() {
  const { shouldLoadContent } = useRedirectByUserCheck()
  const getDefaultTextGenerator = () => ''
  const getTextGenerator = () => ''

  return (
    <>
      <Head>
        <title>Malifaux Collect | {shouldLoadContent ? 'Главная' : ''}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.svg" />
      </Head>
      {shouldLoadContent && (
        <Сontainer>
          <main>
            <Breadcrumbs
              getDefaultTextGenerator={getDefaultTextGenerator}
              getTextGenerator={getTextGenerator}
            />
            <DashboardPage />
            <div className="overlay" />
          </main>
        </Сontainer>
      )}
    </>
  )
}

export default Auth