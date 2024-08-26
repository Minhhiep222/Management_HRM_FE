"use client";

import Header from "@/components/header/header"
import HeaderGroupSpace from "@/components/header/header__groupspace"
import SideBar from "@/components/side-bar/side-bar"
import styles from "@/styles/control.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export default function RootLayoutGroupSpace({ children }: {
    children: React.ReactNode

}) {
    const pathname = usePathname();
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
                            {<HeaderGroupSpace />}
                            <div className={classNames(pathname == "/groupspace/feeds")}  >
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}