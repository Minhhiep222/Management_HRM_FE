import Header from "@/components/header/header";
import HeaderMySpace from "@/components/header/header__myspace";
import NavBarMySpace from "@/components/navbar/navbar_myspace";
import SideBar from "@/components/side-bar/side-bar";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import styles from "@/styles/control.module.scss";
import grid from "@/styles/globals.module.scss";

function Control() {
    return (

        <main>
            <Header />
            <div className={styles["session"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-2__sidebar"]}>
                            <SideBar />
                        </div>
                        <div className={grid["grid__column-10"]}>
                            {<HeaderMySpace />}
                            <div style={{ padding: '0 20px 0 20px' }} className={styles["container__my-space"]}>

                                <div className={styles["content__myspace"]}>
                                    <div className={styles["session"]}>
                                        <div className={grid["grid"]}>
                                            <div className={grid["grid__row"]}>
                                                <div className={grid["grid__column-12"]}>
                                                    <div className={styles["content__control"]}>
                                                        <div className={styles["box__list"]}>
                                                            <div className={grid["grid"]}>
                                                                <div className={grid["grid__row"]}>
                                                                    <div className={grid["grid__column-4"]}>
                                                                        <div className={styles["box__item"]}>
                                                                            <div className={styles["header__box"]}>Sinh Nhật</div>
                                                                            <div className={styles["content__box"]}>
                                                                                <div className={styles["notification__list"]}>

                                                                                    <div className={styles["notification__item-employee"]}>
                                                                                        <div className={styles["notification__img"]} style={{
                                                                                            backgroundImage: 'url("/images/space.jpg")'
                                                                                        }}>
                                                                                        </div>

                                                                                        <div className={styles["notification__content"]}>
                                                                                            <div className={styles["notification__document"]}>Nguyễn Minh Hiệp</div>
                                                                                            <div className={styles["notification__time"]}>
                                                                                                <div className={styles["day"]}>
                                                                                                    Nhân viên
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={grid["grid__column-4"]}>
                                                                        <div className={styles["box__item"]}>
                                                                            <div className={styles["header__box"]}>Thông Báo</div>
                                                                            <div className={styles["content__box"]}>
                                                                                <div className={styles["notification__list"]}>

                                                                                    <div className={styles["notification__item"]}>
                                                                                        <div className={styles["notification__content"]}>
                                                                                            <div className={styles["notification__document"]}>Chào mừng bạn đến với HRM</div>
                                                                                            <div className={styles["notification__time"]}>
                                                                                                <div className={styles["day"]}>
                                                                                                    <span>20</span>
                                                                                                    <span>Tháng 6</span>
                                                                                                </div>
                                                                                                <div className={styles["time"]}>
                                                                                                    <span>6</span>
                                                                                                    <span>:</span>
                                                                                                    <span>00</span>
                                                                                                    <span>AM</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={styles["notification__img"]} style={{
                                                                                            backgroundImage: 'url("/images/space.jpg")'
                                                                                        }}>

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className={styles["notification__item"]}>
                                                                                        <div className={styles["notification__content"]}>
                                                                                            <div className={styles["notification__document"]}>Chào mừng bạn đến với HRM</div>
                                                                                            <div className={styles["notification__time"]}>
                                                                                                <div className={styles["day"]}>
                                                                                                    <span>20</span>
                                                                                                    <span>Tháng 6</span>
                                                                                                </div>
                                                                                                <div className={styles["time"]}>
                                                                                                    <span>6</span>
                                                                                                    <span>:</span>
                                                                                                    <span>00</span>
                                                                                                    <span>AM</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={styles["notification__img"]} style={{
                                                                                            backgroundImage: 'url("/images/space.jpg")'
                                                                                        }}>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={grid["grid__column-4"]}>
                                                                        <div className={styles["box__item"]}>
                                                                            <div className={styles["header__box"]}>Nhân viên mới</div>
                                                                            <div className={styles["content__box"]}>
                                                                                <div className={styles["notification__list"]}>

                                                                                    <div className={styles["notification__item-employee"]}>
                                                                                        <div className={styles["notification__img"]} style={{
                                                                                            backgroundImage: 'url("/images/space.jpg")'
                                                                                        }}>
                                                                                        </div>

                                                                                        <div className={styles["notification__content"]}>
                                                                                            <div className={styles["notification__document"]}>Nguyễn Minh Hiệp</div>
                                                                                            <div className={styles["notification__time"]}>
                                                                                                <div className={styles["day"]}>
                                                                                                    Nhân viên
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                    <div className={styles["notification__item-employee"]}>
                                                                                        <div className={styles["notification__img"]} style={{
                                                                                            backgroundImage: 'url("/images/space.jpg")'
                                                                                        }}>
                                                                                        </div>

                                                                                        <div className={styles["notification__content"]}>
                                                                                            <div className={styles["notification__document"]}>Nguyễn Minh Hiệp</div>
                                                                                            <div className={styles["notification__time"]}>
                                                                                                <div className={styles["day"]}>
                                                                                                    Nhân viên
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                    <div className={styles["notification__item-employee"]}>
                                                                                        <div className={styles["notification__img"]} style={{
                                                                                            backgroundImage: 'url("/images/space.jpg")'
                                                                                        }}>
                                                                                        </div>

                                                                                        <div className={styles["notification__content"]}>
                                                                                            <div className={styles["notification__document"]}>Nguyễn Minh Hiệp</div>
                                                                                            <div className={styles["notification__time"]}>
                                                                                                <div className={styles["day"]}>
                                                                                                    Nhân viên
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                    <div className={styles["notification__item-employee"]}>
                                                                                        <div className={styles["notification__img"]} style={{
                                                                                            backgroundImage: 'url("/images/space.jpg")'
                                                                                        }}>
                                                                                        </div>

                                                                                        <div className={styles["notification__content"]}>
                                                                                            <div className={styles["notification__document"]}>Nguyễn Minh Hiệp</div>
                                                                                            <div className={styles["notification__time"]}>
                                                                                                <div className={styles["day"]}>
                                                                                                    Nhân viên
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={grid["grid__column-4"]}>
                                                                        <div className={styles["box__item"]}>
                                                                            <div className={styles["header__box"]}>Sinh Nhật</div>
                                                                            <div className={styles["content__box"]}>Không có sinh nhật hôm nay</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={grid["grid__column-4"]}></div>
                                                                    <div className={grid["grid__column-4"]}></div>
                                                                    <div className={grid["grid__column-4"]}>
                                                                        <div className={styles["box__item"]}>
                                                                            <div className={styles["header__box"]}>Sinh Nhật</div>
                                                                            <div className={styles["content__box"]}>Không có sinh nhật hôm nay</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={grid["grid__column-4"]}></div>
                                                                    <div className={grid["grid__column-4"]}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    );
}

export default Control;
