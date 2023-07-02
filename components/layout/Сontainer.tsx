import { IContainer } from '@/types/common'
import Header from '../modules/Header/Header'
import Footer from '../modules/Footer/Footer'

const Сontainer = ({ children }: IContainer) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Сontainer
