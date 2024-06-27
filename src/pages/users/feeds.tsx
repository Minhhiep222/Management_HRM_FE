import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SideBar from "@/components/side-bar/side-bar";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import Image from 'next/image';
import classNames from "classnames";
import { url } from "inspector";
import { MdMoreTime } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import NavBarMySpace from "@/components/navbar/navbar_myspace";
function MySpace() {
    return (
        <div className={styles["session"]}>
            <Header />

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
                                        <SideBarMySpace />
                                    </div>

                                    <div className={grid["grid__column-9"]}>
                                        <div className={styles["content__myspace"]}>
                                            <NavBarMySpace />
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
    );
}

export default MySpace;
