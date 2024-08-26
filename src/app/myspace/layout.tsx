"use client";

import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import SideBar from "@/components/side-bar/side-bar";
import HeaderMySpace from "@/components/header/header__myspace";
import Header from "@/components/header/header"
import { usePathname } from "next/navigation";
import classNames from "classnames";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import NavBarMySpace from "@/components/navbar/navbar_myspace";

export default function RootLayoutMySpace({ children }: {
    children: React.ReactNode
}) {
    const pathname: any = usePathname();
    const handlePath = (pathname: string) => {
        const url = ["/myspace/control", "/myspace/calendar__work"];
        return url.includes(pathname);
    }
    return (
        <section>
            <Header />
            <div className={styles["session"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-2__sidebar"]}>
                            <SideBar />
                        </div>
                        <div className={grid["grid__column-10"]}>
                            {<HeaderMySpace />}
                            {!handlePath(pathname) && (<div className={classNames()}>
                                <div className={styles["container__my-space"]}>
                                    <div className={grid["grid"]}>
                                        <div className={grid["grid__row"]}>
                                            <div className={grid["grid__column-3"]}>
                                                {<SideBarMySpace />}
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
                            </div>)}

                            {handlePath(pathname) && (<div className={classNames()}>
                                {children}
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}