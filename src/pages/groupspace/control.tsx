import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SideBar from "@/components/side-bar/side-bar";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import styles from "@/styles/control.module.scss";
import profiles from "@/styles/profile.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import NavBarMySpace from "@/components/navbar/navbar_myspace";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faHospital,
    faCirclePlus,
    faArrowUp,
    faArrowDown,
    faChair,
    faComputer,
    faClock,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function Control() {
    return (
        <div className={styles["session"]}>
            <Header />
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
                                                <div className={styles["content__box"]}>Không có sinh nhật hôm nay</div>
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
                                                <div className={styles["header__box"]}>Sinh Nhật</div>
                                                <div className={styles["content__box"]}>Không có sinh nhật hôm nay</div>
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
            <Footer />
        </div >
    );
}

export default Control;
