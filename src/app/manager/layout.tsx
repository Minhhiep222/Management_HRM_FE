import Header from "@/components/header/header";
import HeaderManager from "@/components/header/header__manager";
import SideBar from "@/components/side-bar/side-bar";

import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";

export default function RootLayoutManager({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <main>
                <Header />
                <div className={styles["session"]}>
                    <div className={grid["grid"]}>
                        <div className={grid["grid__row"]}>
                            <div className={grid["grid__column-2__sidebar"]}>
                                <SideBar />
                            </div>
                            <div className={grid["grid__column-10"]}>
                                <div className={grid["grid__column-12"]}>
                                    {<HeaderManager />}
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section >
    );
}
