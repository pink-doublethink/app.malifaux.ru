import Head from 'next/head'
import { useCallback } from 'react'
import Layout from '@/components/molecules/Layout'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import OrderPage from '@/components/templates/OrderPage/OrderPage'
import Breadcrumbs from '@/components/organisms/Breadcrumbs/Breadcrumbs'

function Order() {
  const { shouldLoadContent } = useRedirectByUserCheck()
  const getDefaultTextGenerator = useCallback(() => 'Оформление заказа', [])
  const getTextGenerator = useCallback((param: string) => ({}[param]), [])

  return (
    <>
      <Head>
        <title>
          Аква Тепмикс | {shouldLoadContent ? 'Оформление заказа' : ''}
        </title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.svg" />
      </Head>
      {shouldLoadContent && (
        <Layout>
          <main>
            <Breadcrumbs
              getDefaultTextGenerator={getDefaultTextGenerator}
              getTextGenerator={getTextGenerator}
            />
            <OrderPage />
            <div className="overlay" />
          </main>
        </Layout>
      )}
    </>
  )
}

export default Order
