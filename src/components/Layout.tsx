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
  const haveMySpace = router.pathname !== '/myspace/control'
    && router.pathname !== '/user/profile'
    && router.pathname !== '/user/update'
    && router.pathname !== '/overview'
    && router.pathname !== '/systems/register';
  const noMySpace = router.pathname === '/myspace/control';
  const profile = router.pathname === '/user/profile';
  const update = router.pathname === '/user/update';
  const register = router.pathname === '/systems/register';
  const overview = router.pathname === '/overview';

  return (
    <div>

      <Header />

      <main>
        {register && children}
        {haveMySpace &&
          <div className={styles["session"]}>
            <div className={grid["grid"]}>
              <div className={grid["grid__row"]}>
                <div className={grid["grid__column-2__sidebar"]}>
                  <SideBar />
                </div>
                <div className={grid["grid__column-10"]}>
                  <div className={grid["grid__column-12"]}>
                    {haveMySpace && <HeaderMySpace />}
                  </div>
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
          </div >
        }

        {overview &&
          <div className={styles["session"]}>
            <div className={grid["grid"]}>
              <div className={grid["grid__row"]}>
                <div className={grid["grid__column-2__sidebar"]}>
                  <SideBar />
                </div>
                <div className={grid["grid__column-10"]}>
                  <div className={styles["container__my-space"]}>
                    <div className={styles["content__myspace"]}>
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          </div >
        }

        {
          profile && <div className={styles["session"]}>
            <div className={grid["grid"]}>
              <div className={grid["grid__row"]}>
                <div className={grid["grid__column-2__sidebar"]}>
                  <SideBar />
                </div>
                <div className={grid["grid__column-10"]}>
                  {children}
                </div>
              </div>
            </div>
          </div >
        }

        {
          update && <div className={styles["session"]}>
            <div className={grid["grid"]}>
              <div className={grid["grid__row"]}>
                <div className={grid["grid__column-12"]}>
                  {children}
                </div>
              </div>
            </div>
          </div >
        }


      </main >
    </div >
  );
};

export default Layout;
