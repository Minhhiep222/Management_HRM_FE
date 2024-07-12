import { MouseEventHandler, useEffect, useState } from "react";
import styles from "@/styles/profile.module.scss";
import grid from "@/styles/globals.module.scss";
import myspace from "@/styles/myspace.module.scss";
import "@/app/globals.css";
import { TiPencil } from "react-icons/ti";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
// import * as React from "react"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"
function CreateProfile() {
    const [address, setAddress] = useState<string>('');
    // const [date, setDate] = React.useState<Date>();

    useEffect(() => {
        handleSelect();
        handleChange();
        handleSelectImg();
    }, []);


    const handleClose = () => {
        let address = ""
        window.location.href = localStorage.getItem('address') || address;
    }

    const handleSelect = (): void => {
        const content__infor = document.querySelectorAll(`.${styles.content__infor}`);
        content__infor.forEach(element => {
            element.addEventListener('click', () => {
                const list__members = element.nextElementSibling;
                const list = list__members as HTMLElement
                list.style.display = 'block';
                if (list__members && list__members.classList.contains(myspace["list__member"])) {
                    const member__items = list__members.querySelectorAll(`.${myspace["member__item"]}`);
                    member__items.forEach(item => {
                        item.addEventListener('click', () => {
                            var option = item as HTMLElement
                            option.textContent;
                            const valueInput = element as HTMLInputElement;
                            valueInput.value = option.textContent || "";
                            list.style.display = 'none';
                        });
                    })
                }
            });
        });
    }

    const handleChange = (): void => {
        const content__infor = document.querySelectorAll(`.${styles.content__infor}`);
        const pencils = document.querySelectorAll(`.${styles["change__content-infor"]}`)
        pencils.forEach((element, index) => {
            element.addEventListener('click', () => {
                const inputItem = content__infor[index] as HTMLInputElement
                inputItem.readOnly = false;
                //thiết lập vị trí bắt đầu và kết thúc của chuỗi nhập liệu
                inputItem.setSelectionRange(inputItem.value.length, inputItem.value.length);
                inputItem.focus();
            })
        });
    }

    const handleSelectImg = (): void => {
        const chooseImg = document.querySelector(`.${styles["input__infor-img"]}`);
        const inputFile = document.querySelector('input[type="file"]');
        chooseImg?.addEventListener('click', () => {
            const file = inputFile as HTMLInputElement;
            file.click();
        })
    }

    return (
        <div className={styles["session"]}>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div style={{ fontSize: '1.8rem' }} className={styles["role__user"]}>Thêm nhân viên</div>
                    </div>
                </div>
            </div>
            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <div className={styles["content_user"]}>
                                <div className={styles["title__information"]}>
                                    {/* IMAGES */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Hình ảnh</h3>
                                        <div className={styles["infor__project"]}>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["input__infor-img"]} style={{
                                                    backgroundImage: 'url("/images/space.jpg")'
                                                }}>
                                                </div>
                                                <input style={{ display: 'none' }} type="file" className={styles["input__infor"]} required placeholder="Chọn hình ảnh" />
                                            </div>
                                        </div>
                                    </div>


                                    {/* Personal Details */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Cá Nhân</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Họ và tên</div>
                                                <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="Thêm họ tên" />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Ngày sinh</div>
                                                <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="dd/mm/yyyy" />
                                                {/* <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[280px] justify-start text-left font-normal",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover> */}
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Giới tính</div>
                                                <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                    <div className={styles["groups__choose"]}>
                                                        <input style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn giới tính" />
                                                        <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                            <div className={myspace["member__item"]} >
                                                                Nam
                                                            </div>
                                                            <div className={myspace["member__item"]} >
                                                                Nữ
                                                            </div>
                                                            <div className={myspace["member__item"]} >
                                                                Khác
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Tình trạng hôn nhân</div>
                                                <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                    <div className={styles["groups__choose"]}>
                                                        <input style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn tình trạng hôn nhân" />
                                                        <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                            <div className={myspace["member__item"]} >
                                                                Chưa kết hôn
                                                            </div>
                                                            <div className={myspace["member__item"]} >
                                                                Đã kết hôn
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Tự giới thiệu</div>
                                                <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Thông tin khác</div>
                                                <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Description */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Thông Tin Công Việc</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={grid["grid"]}>
                                                <div className={grid["grid__row"]}>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Phòng</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn phòng" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div className={myspace["member__item"]} >
                                                                            <div className={myspace["img__member"]} style={{
                                                                                backgroundImage: `url('/images/space.jpg')`
                                                                            }}>
                                                                            </div>
                                                                            <div className={myspace["member__infor"]}>
                                                                                <div className={myspace["main__infor"]}>
                                                                                    <div className={myspace["name__member"]}>
                                                                                        Management
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={myspace["member__item"]} >
                                                                            <div className={myspace["img__member"]} style={{
                                                                                backgroundImage: `url('/images/space.jpg')`
                                                                            }}>
                                                                            </div>
                                                                            <div className={myspace["member__infor"]}>
                                                                                <div className={myspace["main__infor"]}>
                                                                                    <div className={myspace["name__member"]}>
                                                                                        CEO
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Địa điểm</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn địa điểm" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div className={myspace["member__item"]} >
                                                                            Thủ Đức
                                                                        </div>
                                                                        <div className={myspace["member__item"]} >
                                                                            Quận 1
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Chức vụ</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn chức vụ" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div className={myspace["member__item"]} >
                                                                            Trưởng phòng
                                                                        </div>
                                                                        <div className={myspace["member__item"]} >
                                                                            CEO
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Loại công việc</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn loại công việc" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div className={myspace["member__item"]} >
                                                                            Management
                                                                        </div>
                                                                        <div className={myspace["member__item"]} >
                                                                            CEO
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Trạng thái nhân viên</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn trạng thái nhân viên" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div className={myspace["member__item"]} >
                                                                            Management
                                                                        </div>
                                                                        <div className={myspace["member__item"]} >
                                                                            CEO
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Kinh nghiệm</div>
                                                            <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Contacts Detail */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Liên Hệ</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={grid["grid"]}>
                                                <div className={grid["grid__row"]}>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Số điện thoại công việc</div>
                                                            <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Địa chỉ email công việc</div>
                                                            <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Vị trí chỗ ngồi</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn chỗ ngồi" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div className={myspace["member__item"]} >
                                                                            Management
                                                                        </div>
                                                                        <div className={myspace["member__item"]} >
                                                                            CEO
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Tag</div>
                                                            <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div></div>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Số điện thoại cá nhân</div>
                                                            <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Địa chỉ email cá nhân</div>
                                                            <input required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    {/* Work Experience */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Kinh Nghiệm Làm Việc</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên công ty</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Chức Danh</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Từ Ngày</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Đến Ngày</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Mô Tả Công Việc</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Phù hợp</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                        <td className={styles["td__experience"]}>01-Jan-2004</td>
                                                        <td className={styles["td__experience"]}>-</td>
                                                        <td className={styles["td__experience"]}>Yes</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Trình Độ</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên học viện</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Bằng cấp/Bằng tốt nghiệp</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Chuyên môn</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Ngày hoàn thành</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                        <td className={styles["td__experience"]}>01-Jan-2004</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Phụ Thuộc</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Quan hệ</span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Ngày sinh</span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                <button className={classNames(styles["btn__save"])}>Lưu</button>
            </div>
        </div >
    );
}

export default CreateProfile;
