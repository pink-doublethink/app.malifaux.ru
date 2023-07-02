import Head from 'next/head'
import Сontainer from '@/components/layout/Сontainer'
import DashboardPage from '@/components/templates/DashboardPage/DashboardPage'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'

function Dashboard() {
  const { shouldLoadContent } = useRedirectByUserCheck()
  const getDefaultTextGenerator = () => ''
  const getTextGenerator = () => ''

  return (
    <>
      <Head>
        <title>Аква Тепмикс | {shouldLoadContent ? 'Главная' : ''}</title>
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

export default Dashboard
