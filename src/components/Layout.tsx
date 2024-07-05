import { FC, ReactNode } from 'react';
import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import Header from '@/components/header/header';
import HeaderMySpace from '@/components/header/header__myspace';
import NavBarMySpace from '@/components/navbar/navbar_myspace';
import SideBar from '@/components/side-bar/side-bar';
import SideBarMySpace from '@/components/side-bar/side-bar__my-space';
import Footer from '@/components/footer/footer';
import { useRouter } from 'next/router';
import SideBarGroupSpace from '@/components/side-bar/side-bar__group';
import NavBarGroupSpace from '@/components/navbar/navbar_groupspace';
import HeaderGroupSpace from '@/components/header/header__groupspace';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  const router = useRouter();
  const haveMySpace = router.pathname !== '/myspace/control'
    && router.pathname !== '/user/profile'
    && router.pathname !== '/user/update'
    && router.pathname !== '/overview'
    && router.pathname !== '/systems/register'
    && router.pathname !== '/groupspace/list_member'
    && router.pathname !== '/groupspace/project'
    && router.pathname !== '/groupspace/feeds';
  const noMySpace = router.pathname === '/myspace/control';
  const profile = router.pathname === '/user/profile';
  const update = router.pathname === '/user/update';
  const register = router.pathname === '/systems/register';
  const overview = router.pathname === '/overview';
  const haveGroupSpace = router.pathname === '/groupspace/feeds'
    || router.pathname === '/groupspace/list_member'
    || router.pathname === '/groupspace/project';
  const listview = router.pathname !== '/groupspace/list_member';
  const project = router.pathname !== '/groupspace/project';

  const Havelistview = router.pathname === '/groupspace/list_member';
  const Haveproject = router.pathname === '/groupspace/project';

  return (
    <div>

      <Header />
      <main>
        {register && children}
        {haveGroupSpace &&
          <div className={styles["session"]}>
            <div className={grid["grid"]}>
              <div className={grid["grid__row"]}>
                <div className={grid["grid__column-2__sidebar"]}>
                  <SideBar />
                </div>
                <div className={grid["grid__column-10"]}>
                  <div className={grid["grid__column-12"]}>
                    {haveGroupSpace && <HeaderGroupSpace />}
                  </div>
                  <div className={styles["container__my-space"]}>
                    <div className={grid["grid"]}>
                      <div className={grid["grid__row"]}>
                        {haveGroupSpace && listview && project &&
                          <div className={grid["grid__column-3"]}>
                            < SideBarGroupSpace />
                          </div>
                        }
                        {haveGroupSpace && listview && project &&
                          <div className={grid["grid__column-9"]}>
                            <div className={styles["content__myspace"]}>
                              <NavBarGroupSpace />
                              {children}
                            </div>
                          </div>
                        }

                        {haveGroupSpace && Havelistview &&
                          <div className={grid["grid__column-12"]}>
                            <div className={styles["content__myspace"]}>
                              {children}
                            </div>
                          </div>
                        }

                        {haveGroupSpace && Haveproject &&
                          <div className={grid["grid__column-12"]}>
                            <div className={styles["content__myspace"]}>
                              {children}
                            </div>
                          </div>
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        }

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
                          {haveMySpace && < SideBarMySpace />}
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

        {profile && <div className={styles["session"]}>
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

        {update && <div className={styles["session"]}>
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


