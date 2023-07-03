import { IContainer } from '@/types/common'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Сontainer = ({ children }: IContainer) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Сontainer
