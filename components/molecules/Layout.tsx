import { ILayoutProps } from '@/types/common'
import Header from '../organisms/Header/Header'
import Footer from '../organisms/Footer/Footer'

const Layout = ({ children }: ILayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
