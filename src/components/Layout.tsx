import { FC, memo, ReactNode, useEffect } from "react";
import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import Header from "@/components/header/header";
import HeaderMySpace from "@/components/header/header__myspace";
import NavBarMySpace from "@/components/navbar/navbar_myspace";
import SideBar from "@/components/side-bar/side-bar";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import Footer from "@/components/footer/footer";
import { useRouter } from "next/router";

import SideBarGroupSpace from "@/components/side-bar/side-bar__group";
import NavBarGroupSpace from "@/components/navbar/navbar_groupspace";
import HeaderGroupSpace from "@/components/header/header__groupspace";
import HeaderManager from "@/components/header/header__manager";
import axios from "axios";

interface LayoutProps {
  children: ReactNode;
}



const Layout: FC<LayoutProps> = ({ children }) => {


  const router = useRouter();
  const pathsMySpace = [
    "/myspace/control",
    "/myspace/calendar__work",
    "/user/profile",
    "/user/update",
    "/overview",
    "/systems/register",
    "/groupspace/list_member",
    "/groupspace/project",
    "/groupspace/feeds"
  ]
  const haveMySpace = !pathsMySpace.includes(router.pathname);
  const control = router.pathname === "/myspace/control";
  const noMySpace = router.pathname === "/myspace/control" || router.pathname === "/myspace/calendar__work";
  const profile = router.pathname === "/user/profile";
  const register = router.pathname === "/systems/register";
  const overview = router.pathname === "/overview";
  const event = router.pathname === "/hadle/birthday";

  const haveGroupSpace = router.pathname === "/groupspace/feeds" ||
    router.pathname === "/groupspace/list_member" ||
    router.pathname === "/groupspace/project";

  const listview = router.pathname !== "/groupspace/list_member";
  const project = router.pathname !== "/groupspace/project";

  const Havelistview = router.pathname === "/groupspace/list_member";
  const Haveproject = router.pathname === "/groupspace/project";

  const manager =
    router.pathname === "/manager/listemployees"
    || router.pathname === "/manager/listgroups"
    || router.pathname === "/manager/listprojects"
    || router.pathname === "/manager/listcontracts"
    || router.pathname === "/manager/listrooms"
    || router.pathname === "/manager/listbrands";

  const handle = router.pathname === "/projects/create"
    || router.pathname === "/projects/update/[id]"
    || router.pathname === "/projects/detail"
    || router.pathname === "/teams/create"
    || router.pathname === "/teams/detail"
    || router.pathname === "/teams/update/[id]"
    || router.pathname === "/user/update/[id]"
    || router.pathname === "/user/create"
    || router.pathname === "/brands/create"
    || router.pathname === "/brands/update/[id]"
    || router.pathname === "/brands/detail"
    || router.pathname === "/rooms/create"
    || router.pathname === "/rooms/update/[id]"
    || router.pathname === "/rooms/detail"
    || router.pathname === "/contracts/create"
    || router.pathname === "/contracts/update/[id]"
    || router.pathname === "/contracts/detail"
    ;


  if (register) {
    return <div className="">{register && children}</div>;
  }

  else if (handle) {
    return <div className="">{handle && children}</div>;
  }
  else if (event) {
    return <div className="">
      <Header />
      {event && (
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
        </div>
      )}
    </div>;
  }
  else if (manager) {
    return (
      <div>
        <Header />
        <main>
          <div className={styles["session"]}>
            <div className={grid["grid"]}>
              <div className={grid["grid__row"]}>
                <div className={grid["grid__column-2__sidebar"]}>
                  <SideBar />
                </div>
                <div className={grid["grid__column-10"]}>
                  <div className={grid["grid__column-12"]}>
                    {manager && <HeaderManager />}
                  </div>
                  <div className={styles["container__my-space"]}>
                    <div className={grid["grid"]}>
                      <div className={grid["grid__row"]}>

                        {manager && (
                          <div className={grid["grid__column-12"]}>
                            <div className={styles["content__myspace"]}>
                              {children}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        <main>
          {haveGroupSpace && (
            <div className={styles["session"]}>
              <div className={grid["grid"]}>
                <div className={grid["grid__row"]}>
                  <div className={grid["grid__column-2__sidebar"]}>
                    <SideBar />
                  </div>
                  <div className={grid["grid__column-10"]}>
                    {haveGroupSpace && <HeaderGroupSpace />}
                    <div className={styles["container__my-space"]}>
                      <div className={grid["grid"]}>
                        <div className={grid["grid__row"]}>
                          {haveGroupSpace && listview && project && (
                            <div className={grid["grid__column-3"]}>
                              <SideBarGroupSpace />
                            </div>
                          )}
                          {haveGroupSpace && listview && project && (
                            <div className={grid["grid__column-9"]}>
                              <div className={styles["content__myspace"]}>
                                <NavBarGroupSpace />
                                {children}
                              </div>
                            </div>
                          )}

                          {haveGroupSpace && Havelistview && (
                            <div className={grid["grid__column-12"]}>
                              <div className={styles["content__myspace"]}>
                                {children}
                              </div>
                            </div>
                          )}

                          {haveGroupSpace && Haveproject && (
                            <div className={grid["grid__column-12"]}>
                              <div className={styles["content__myspace"]}>
                                {children}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {haveMySpace && (
            <div className={styles["session"]}>
              <div className={grid["grid"]}>
                <div className={grid["grid__row"]}>
                  <div className={grid["grid__column-2__sidebar"]}>
                    <SideBar />
                  </div>
                  <div className={grid["grid__column-10"]}>
                    {haveMySpace && <HeaderMySpace />}
                    <div className={styles["container__my-space"]}>
                      <div className={grid["grid"]}>
                        <div className={grid["grid__row"]}>
                          <div className={grid["grid__column-3"]}>
                            {haveMySpace && <SideBarMySpace />}
                          </div>

                          {!control &&
                            <div className={grid["grid__column-9"]}>
                              <div className={styles["content__myspace"]}>
                                <NavBarMySpace />
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
            </div>
          )}

          {overview && (
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
            </div>
          )}

          {noMySpace && (
            <div className={styles["session"]}>
              <div className={grid["grid"]}>
                <div className={grid["grid__row"]}>
                  <div className={grid["grid__column-2__sidebar"]}>
                    <SideBar />
                  </div>
                  <div className={grid["grid__column-10"]}>
                    <HeaderMySpace />
                    <div className={styles["container__my-space"]}>
                      <div className={grid["grid"]}>
                        <div className={grid["grid__row"]}>
                          <div className={grid["grid__column-12"]}>
                            <div className={styles["content__myspace"]}>
                              {children}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {profile && (
            <div className={styles["session"]}>
              <div className={grid["grid"]}>
                <div className={grid["grid__row"]}>
                  <div className={grid["grid__column-2__sidebar"]}>
                    <SideBar />
                  </div>
                  <div className={grid["grid__column-10"]}>{children}</div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
};

export default Layout;


