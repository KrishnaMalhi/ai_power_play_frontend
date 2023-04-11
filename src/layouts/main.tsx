import { FC, ReactNode } from 'react';

// import Header from '@app/atoms/header';
// import Footer from '@app/atoms/footer';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * React component for the app layout
 *
 * @returns JSX
 */
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  /**
   * Return JSX
   */
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
