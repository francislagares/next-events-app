import MainHeader from './MainHeader';

const Layout: React.FC = ({ children }) => (
  <>
    <MainHeader />
    <main>{children}</main>
  </>
);

export default Layout;
