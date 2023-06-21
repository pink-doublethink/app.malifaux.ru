import { IContainer} from '@/types/common'
import Header from '../organisms/Header/Header'
import Footer from '../organisms/Footer/Footer'

const Container = ({ children }: IContainer) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Container
