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
                                            <div className={styles["greating__my-space"]}>
                                                <FaPeopleLine fontSize={'8rem'} />
                                                <div className={styles["wish__myspace"]}>
                                                    <p>Chào Buổi Chiều Nguyễn Minh Hiệp</p>
                                                    <p className={styles["hello__myspace"]}>Chúc bạn một ngày làm việc hiệu quả!</p>
                                                </div>
                                            </div>

                                            <div className={styles["calendar-work__my-space"]}>
                                                <div className={styles["icon__time"]}>
                                                    <MdMoreTime fontSize={'4rem'} style={{
                                                        backgroundColor: `#e0f7ff`,
                                                        color: `#46b3de`,
                                                        fontWeight: '10',
                                                        borderRadius: '4px',
                                                        padding: `5px`
                                                    }} />
                                                </div>
                                                <div className={styles["content__calendar"]}>
                                                    <div className={styles["title__calendar-work"]}>
                                                        <div className={styles["title__calendar"]}>Lịch làm việc</div>
                                                        <div className={styles["week__calendar-work"]}>
                                                            <em>23-Jun-2024</em>
                                                            <span>-</span>
                                                            <em>29-Jun-2024</em>
                                                        </div>
                                                    </div>
                                                    <div className={styles["time__calendar-work"]}>
                                                        <div className={styles["hook__calendar"]}>
                                                            <div className={styles["name__work"]}>General</div>
                                                            <div className={styles["day__calendar-work"]}>
                                                                <em>9:00 SÁNG</em>
                                                                <span>-</span>
                                                                <em>18:00 TỐI</em>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles["hook-week__calendar-work"]}>
                                                        <div className={styles["doc__day-list"]}>
                                                            <div className={styles["doc__day-item"]}>
                                                                <span className={styles["date__in-week"]}>Chủ nhật</span>
                                                                <span>24</span>
                                                                <div className={classNames(styles["state__user"], styles["state__user-weekend"])}>Cuối tuần</div>
                                                            </div>
                                                            <div className={styles["doc__day-item"]}>
                                                                <span className={styles["date__in-week"]}>Thứ 2</span>
                                                                <span>25</span>
                                                                <div className={classNames(styles["state__user"], styles["state__user-absent"])}>Vắng mặt</div>
                                                            </div>
                                                            <div className={styles["doc__day-item"]}>
                                                                <span className={styles["date__in-week"]}>Thứ 3</span>  <span>26</span>
                                                                <div className={classNames(styles["state__user"], styles["state__user-present"])}>Có mặt</div>                                                            </div>
                                                            <div className={styles["doc__day-item"]}>
                                                                <span className={styles["date__in-week"]}>Thứ 4 </span>
                                                                <span>27</span>
                                                                <div className={classNames(styles["state__user"])}></div>
                                                            </div>
                                                            <div className={styles["doc__day-item"]}>
                                                                <span className={styles["date__in-week"]}>Thứ 5</span>
                                                                <span>28</span>
                                                                <div className={classNames(styles["state__user"])}></div>
                                                            </div>
                                                            <div className={styles["doc__day-item"]}>
                                                                <span className={styles["date__in-week"]}>Thứ 6</span>
                                                                <span>29</span>
                                                                <div className={classNames(styles["state__user"])}></div>
                                                            </div>
                                                            <div className={styles["doc__day-item"]}>
                                                                <span className={styles["date__in-week"]}>Thứ 7</span>
                                                                <span>30</span>
                                                                <div className={classNames(styles["state__user"])}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles["calendar-work__my-space"]}>

                                                <div className={styles["note__authencation"]}>
                                                    <div className={styles["icon__time"]}>
                                                        <MdMoreTime fontSize={'4rem'} style={{
                                                            backgroundColor: `#fdeece`,
                                                            color: `#f6ac0b`,
                                                            fontWeight: '10',
                                                            borderRadius: '4px',
                                                            padding: `5px`
                                                        }} />
                                                    </div>
                                                    <div className={styles["content__calendar"]}>
                                                        Hôm nay bạn chưa thêm nhật ký
                                                    </div>
                                                </div>
                                                <button className={classNames(grid["btn"], styles["btn__note"])}>
                                                    Thêm nhật ký
                                                </button>

                                            </div>

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
