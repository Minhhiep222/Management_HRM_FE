import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SideBar from "@/components/side-bar/side-bar";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import NavBarMySpace from "@/components/navbar/navbar_myspace";
import classNames from "classnames";



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

                                        <div className={styles["content__myspace"]}>

                                            <div className={styles["box__feeds"]}>
                                                <div className={styles["chat__feeds"]}>
                                                    <input type="text" className={styles["input__feed"]} placeholder="Cập nhật trạng thái" />
                                                    <button className={classNames(styles["btn__up-feeds"], grid["btn"])}>Đăng</button>
                                                </div>

                                                <div className={styles["feeds__list"]}>
                                                    <div className={styles["feed__item"]}>
                                                        <div className={styles["infor__user-feed"]}>
                                                            <div className={styles["img__user"]} style={{
                                                                backgroundImage: `url('/images/space.jpg')`,
                                                            }}>
                                                            </div>
                                                            <div className={styles["main__infor"]}>
                                                                <div className={styles["name__user"]}>Nguyễn Minh Hiệp</div>
                                                                <div className={styles["times__feed"]}>
                                                                    <div className={styles["day__feed"]}>Hôm nay</div>
                                                                    <div className={styles["time__feed"]}>
                                                                        <span className={styles["hour__feed"]}>09</span>
                                                                        <span>:</span>
                                                                        <span className={styles["minute__feed"]}>00</span>
                                                                        <span className={styles["duration__feed"]}>AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles["contents__feed"]}>
                                                            <div className={styles["document__cmt"]} defaultValue={'Tui làm biến quá'} > Làm biến quá fen ơi </div>
                                                            <div className={styles["feedback"]}>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><AiOutlineLike /></span>
                                                                    <button className={classNames(styles["btn__like"])}>Thích</button>
                                                                </div>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><TfiCommentAlt /></span>
                                                                    <button className={classNames(styles["btn__cmt"])}> Đánh giá</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={styles["feed__item"]}>
                                                        <div className={styles["infor__user-feed"]}>
                                                            <div className={styles["img__user"]} style={{
                                                                backgroundImage: `url('/images/space.jpg')`,
                                                            }}>
                                                            </div>
                                                            <div className={styles["main__infor"]}>
                                                                <div className={styles["name__user"]}>Nguyễn Minh Hiệp</div>
                                                                <div className={styles["times__feed"]}>
                                                                    <div className={styles["day__feed"]}>Hôm nay</div>
                                                                    <div className={styles["time__feed"]}>
                                                                        <span className={styles["hour__feed"]}>09</span>
                                                                        <span>:</span>
                                                                        <span className={styles["minute__feed"]}>00</span>
                                                                        <span className={styles["duration__feed"]}>AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles["contents__feed"]}>
                                                            <div className={styles["document__cmt"]} defaultValue={'Tui làm biến quá'} > Làm biến quá fen ơi </div>
                                                            <div className={styles["feedback"]}>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><AiOutlineLike /></span>
                                                                    <button className={classNames(styles["btn__like"])}>Thích</button>
                                                                </div>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><TfiCommentAlt /></span>
                                                                    <button className={classNames(styles["btn__cmt"])}> Đánh giá</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={styles["feed__item"]}>
                                                        <div className={styles["infor__user-feed"]}>
                                                            <div className={styles["img__user"]} style={{
                                                                backgroundImage: `url('/images/space.jpg')`,
                                                            }}>
                                                            </div>
                                                            <div className={styles["main__infor"]}>
                                                                <div className={styles["name__user"]}>Nguyễn Minh Hiệp</div>
                                                                <div className={styles["times__feed"]}>
                                                                    <div className={styles["day__feed"]}>Hôm nay</div>
                                                                    <div className={styles["time__feed"]}>
                                                                        <span className={styles["hour__feed"]}>09</span>
                                                                        <span>:</span>
                                                                        <span className={styles["minute__feed"]}>00</span>
                                                                        <span className={styles["duration__feed"]}>AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles["contents__feed"]}>
                                                            <div className={styles["document__cmt"]} defaultValue={'Tui làm biến quá'} > Làm biến quá fen ơi </div>
                                                            <div className={styles["feedback"]}>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><AiOutlineLike /></span>
                                                                    <button className={classNames(styles["btn__like"])}>Thích</button>
                                                                </div>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><TfiCommentAlt /></span>
                                                                    <button className={classNames(styles["btn__cmt"])}> Đánh giá</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={styles["feed__item"]}>
                                                        <div className={styles["infor__user-feed"]}>
                                                            <div className={styles["img__user"]} style={{
                                                                backgroundImage: `url('/images/space.jpg')`,
                                                            }}>
                                                            </div>
                                                            <div className={styles["main__infor"]}>
                                                                <div className={styles["name__user"]}>Nguyễn Minh Hiệp</div>
                                                                <div className={styles["times__feed"]}>
                                                                    <div className={styles["day__feed"]}>Hôm nay</div>
                                                                    <div className={styles["time__feed"]}>
                                                                        <span className={styles["hour__feed"]}>09</span>
                                                                        <span>:</span>
                                                                        <span className={styles["minute__feed"]}>00</span>
                                                                        <span className={styles["duration__feed"]}>AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles["contents__feed"]}>
                                                            <div className={styles["document__cmt"]} defaultValue={'Tui làm biến quá'} > Làm biến quá fen ơi </div>
                                                            <div className={styles["feedback"]}>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><AiOutlineLike /></span>
                                                                    <button className={classNames(styles["btn__like"])}>Thích</button>
                                                                </div>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><TfiCommentAlt /></span>
                                                                    <button className={classNames(styles["btn__cmt"])}> Đánh giá</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={styles["feed__item"]}>
                                                        <div className={styles["infor__user-feed"]}>
                                                            <div className={styles["img__user"]} style={{
                                                                backgroundImage: `url('/images/space.jpg')`,
                                                            }}>
                                                            </div>
                                                            <div className={styles["main__infor"]}>
                                                                <div className={styles["name__user"]}>Nguyễn Minh Hiệp</div>
                                                                <div className={styles["times__feed"]}>
                                                                    <div className={styles["day__feed"]}>Hôm nay</div>
                                                                    <div className={styles["time__feed"]}>
                                                                        <span className={styles["hour__feed"]}>09</span>
                                                                        <span>:</span>
                                                                        <span className={styles["minute__feed"]}>00</span>
                                                                        <span className={styles["duration__feed"]}>AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles["contents__feed"]}>
                                                            <div className={styles["document__cmt"]} defaultValue={'Tui làm biến quá'} > Làm biến quá fen ơi </div>
                                                            <div className={styles["feedback"]}>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><AiOutlineLike /></span>
                                                                    <button className={classNames(styles["btn__like"])}>Thích</button>
                                                                </div>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><TfiCommentAlt /></span>
                                                                    <button className={classNames(styles["btn__cmt"])}> Đánh giá</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={styles["feed__item"]}>
                                                        <div className={styles["infor__user-feed"]}>
                                                            <div className={styles["img__user"]} style={{
                                                                backgroundImage: `url('/images/space.jpg')`,
                                                            }}>
                                                            </div>
                                                            <div className={styles["main__infor"]}>
                                                                <div className={styles["name__user"]}>Nguyễn Minh Hiệp</div>
                                                                <div className={styles["times__feed"]}>
                                                                    <div className={styles["day__feed"]}>Hôm nay</div>
                                                                    <div className={styles["time__feed"]}>
                                                                        <span className={styles["hour__feed"]}>09</span>
                                                                        <span>:</span>
                                                                        <span className={styles["minute__feed"]}>00</span>
                                                                        <span className={styles["duration__feed"]}>AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles["contents__feed"]}>
                                                            <div className={styles["document__cmt"]} defaultValue={'Tui làm biến quá'} > Làm biến quá fen ơi </div>
                                                            <div className={styles["feedback"]}>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><AiOutlineLike /></span>
                                                                    <button className={classNames(styles["btn__like"])}>Thích</button>
                                                                </div>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><TfiCommentAlt /></span>
                                                                    <button className={classNames(styles["btn__cmt"])}> Đánh giá</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className={styles["feed__item"]}>
                                                        <div className={styles["infor__user-feed"]}>
                                                            <div className={styles["img__user"]} style={{
                                                                backgroundImage: `url('/images/space.jpg')`,
                                                            }}>
                                                            </div>
                                                            <div className={styles["main__infor"]}>
                                                                <div className={styles["name__user"]}>Nguyễn Minh Hiệp</div>
                                                                <div className={styles["times__feed"]}>
                                                                    <div className={styles["day__feed"]}>Hôm nay</div>
                                                                    <div className={styles["time__feed"]}>
                                                                        <span className={styles["hour__feed"]}>09</span>
                                                                        <span>:</span>
                                                                        <span className={styles["minute__feed"]}>00</span>
                                                                        <span className={styles["duration__feed"]}>AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles["contents__feed"]}>
                                                            <div className={styles["document__cmt"]} defaultValue={'Tui làm biến quá'} > Làm biến quá fen ơi </div>
                                                            <div className={styles["feedback"]}>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><AiOutlineLike /></span>
                                                                    <button className={classNames(styles["btn__like"])}>Thích</button>
                                                                </div>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><TfiCommentAlt /></span>
                                                                    <button className={classNames(styles["btn__cmt"])}> Đánh giá</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className={styles["feed__item"]}>
                                                        <div className={styles["infor__user-feed"]}>
                                                            <div className={styles["img__user"]} style={{
                                                                backgroundImage: `url('/images/space.jpg')`,
                                                            }}>
                                                            </div>
                                                            <div className={styles["main__infor"]}>
                                                                <div className={styles["name__user"]}>Nguyễn Minh Hiệp</div>
                                                                <div className={styles["times__feed"]}>
                                                                    <div className={styles["day__feed"]}>Hôm nay</div>
                                                                    <div className={styles["time__feed"]}>
                                                                        <span className={styles["hour__feed"]}>09</span>
                                                                        <span>:</span>
                                                                        <span className={styles["minute__feed"]}>00</span>
                                                                        <span className={styles["duration__feed"]}>AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles["contents__feed"]}>
                                                            <div className={styles["document__cmt"]} defaultValue={'Tui làm biến quá'} > Làm biến quá fen ơi </div>
                                                            <div className={styles["feedback"]}>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><AiOutlineLike /></span>
                                                                    <button className={classNames(styles["btn__like"])}>Thích</button>
                                                                </div>
                                                                <div className={styles["gr__btn"]}>
                                                                    <span><TfiCommentAlt /></span>
                                                                    <button className={classNames(styles["btn__cmt"])}> Đánh giá</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


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
