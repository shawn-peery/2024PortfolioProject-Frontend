import Footer from "./Footer";
import MainNav from "./MainNav"

interface LayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainNav />
      {children}
      <Footer />

    </>)

}

export default Layout;
