
import styles from "@/styles/control.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { IoMdSearch } from "react-icons/io";
import useModals from '@/components/hook/useModal';
import useAddress from '@/components/hook/useAddress';
import Header from "@/components/header/header";
import SideBar from "@/components/side-bar/side-bar";
import HeaderManager from "@/components/header/header__manager";


function ListProject() {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModals();
    const { address, saveAddress } = useAddress();

    const handleUpdate = () => {
        saveAddress(window.location.href);
        window.location.href = "/contracts/update";
    };

    const handleCreateContract = () => {
        saveAddress(window.location.href);
        window.location.href = "/contracts/create";
    };
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
                            <div className={grid["grid__column-12"]}>
                                {<HeaderManager />}
                            </div>
                            <div className={styles["container__my-space"]}>
                                <div className={grid["grid"]}>
                                    <div className={grid["grid__row"]}>
                                        <div className={grid["grid__column-12"]}>
                                            <div className={styles["content__myspace"]}>
                                                <div >
                                                    <div className={myspace["control__project"]}>
                                                        <div className={myspace["search__member"]}>
                                                            <input type="text" placeholder="Tìm kiếm" />
                                                            <IoMdSearch />
                                                        </div>

                                                        <div className={myspace["control"]}>
                                                            <button onClick={handleCreateContract} className={classNames(grid["btn"], myspace["btn__create-project"])}>Thêm</button>
                                                        </div>
                                                    </div>
                                                    <div className={styles["content__control"]}>
                                                        <div className={styles["box__list"]}>
                                                            <div className={grid["grid"]}>
                                                                <div className={grid["grid__row"]}>
                                                                    <div className={grid["grid__column-4"]}>
                                                                        <div className={styles["box__item"]}>
                                                                            <div className={styles["header__box"]}>Nguyễn Minh Hiệp</div>
                                                                            <div style={{
                                                                                backgroundPosition: 'center',
                                                                                backgroundSize: 'cover',
                                                                                borderRadius: '3px',
                                                                                backgroundImage: 'url("/images/space.jpg")',
                                                                            }} className={styles["content__box"]}>Nội dung hộp đồng</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={grid["grid__column-4"]}>
                                                                        <div className={styles["box__item"]}>
                                                                            <div className={styles["header__box"]}>Nguyễn Minh Hiệp</div>
                                                                            <div style={{
                                                                                backgroundPosition: 'center',
                                                                                backgroundSize: 'cover',
                                                                                borderRadius: '3px',
                                                                                backgroundImage: 'url("/images/space.jpg")',
                                                                            }} className={styles["content__box"]}>Nội dung hộp đồng</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={grid["grid__column-4"]}>
                                                                        <div className={styles["box__item"]}>
                                                                            <div className={styles["header__box"]}>Nguyễn Minh Hiệp</div>
                                                                            <div style={{
                                                                                backgroundPosition: 'center',
                                                                                backgroundSize: 'cover',
                                                                                borderRadius: '3px',
                                                                                backgroundImage: 'url("/images/space.jpg")',
                                                                            }} className={styles["content__box"]}>Nội dung hộp đồng</div>
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
                </div>
            </div>
        </main>

    );
}

export default ListProject;


