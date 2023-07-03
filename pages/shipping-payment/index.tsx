import Head from 'next/head'
import Сontainer from '@/components/molecules/Сontainer'
import ShippingPayment from '@/components/organisms/ShippingPayment/ShippingPayment'
import Breadcrumbs from '@/components/molecules/Breadcrumbs/Breadcrumbs'
import { useCallback } from 'react'

function ShippingPaymentPage() {
  const getDefaultTextGenerator = useCallback(() => 'Доставка и оплата', [])
  const getTextGenerator = useCallback((param: string) => ({}[param]), [])

  return (
    <>
      <Head>
        <title>Аква Тепмикс | Доставка и оплата</title>
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
          <ShippingPayment />
          <div className="overlay" />
        </main>
      </Сontainer>
    </>
  )
}

export default ShippingPaymentPage
