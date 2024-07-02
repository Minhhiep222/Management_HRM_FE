import { FC, ReactNode } from 'react';
import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import Header from './header/header';
import HeaderMySpace from './header/header__myspace';
import NavBarMySpace from './navbar/navbar_myspace';
import SideBar from './side-bar/side-bar';
import SideBarMySpace from './side-bar/side-bar__my-space';
import Footer from './footer/footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  const router = useRouter();
  const haveMySpace = router.pathname !== '/myspace/control';
  const noMySpace = router.pathname === '/myspace/control';
  const profile = router.pathname === '/user/profile';

  return (
    <div>
      <Header />
      <HeaderMySpace />
      <main>
        {haveMySpace &&
          <div className={styles["session"]}>
            <div className={grid["grid"]}>
              <div className={grid["grid__row"]}>
                <div className={grid["grid__column-2"]}>
                  <SideBar />
                </div>
                <div className={grid["grid__column-10"]}>
                  <div className={styles["container__my-space"]}>
                    <div className={grid["grid"]}>
                      <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-3"]}>
                          < SideBarMySpace />
                        </div>

                        <div className={grid["grid__column-9"]}>
                          <div className={styles["content__myspace"]}>
                            <NavBarMySpace />
                            {children}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div >
        }

        {noMySpace &&
          <div className={styles["session"]}>
            <div className={grid["grid"]}>
              <div className={grid["grid__row"]}>
                <div className={grid["grid__column-12"]}>
                  {children}
                </div>
              </div>
            </div>
            <Footer />
          </div >
        }

        {

        }
      </main>
    </div>
  );
};

export default Layout;
