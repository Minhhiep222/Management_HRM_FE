import classNames from "classnames";
import * as React from "react"
import { useEffect, useState } from "react";
import styles from "@/styles/profile.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
function CreateContract() {
    const [isModalOpenItem, setIsModalOpenItem] = useState(false);
    const [address, setAddress] = useState<string>('');
    const [dateStart, setDateStart] = React.useState<Date>();
    const [dateFinish, setDateFinish] = React.useState<Date>();
    const [date, setDate] = React.useState<Date>();
    useEffect(() => {
        handleSelect();
        handleSelectImg();
    }, []);

    const handleOpenModalItem = () => {
        setIsModalOpenItem(true);
    };

    const saveAddress = (address: string) => {
        setAddress(address);
        localStorage.setItem('address', address);
    }

    const handleUpdate = () => {
        saveAddress(window.location.href);
        window.location.href = "/user/update";
    };

    const handleClose = () => {
        let address = ""
        window.location.href = localStorage.getItem('address') || address;
    }

    const handleSelect = (): void => {
        const content__infor = document.querySelectorAll(`.${styles.input__infor}`);
        content__infor.forEach(element => {
            element.addEventListener('click', () => {
                console.log(element);
                const list__members = element.nextElementSibling;
                const list = list__members as HTMLElement
                if (list !== null) {
                    list.style.display = 'block';
                }
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

    const handleSelectImg = (): void => {
        const chooseImg = document.querySelector(`.${styles["input__infor-img"]}`);
        const inputFile = document.querySelector('input[type="file"]');
        chooseImg?.addEventListener('click', () => {
            const file = inputFile as HTMLInputElement;
            file.click();
        })
    }

    return (
        <div>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div className={styles["role__user"]} style={{ fontSize: '1.8rem' }}>Sửa Hợp Đồng Làm Việc</div>
                    </div>
                </div>
            </div>

            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <div className={styles["content_user"]}>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Hợp Đồng</h3>
                                    <div className={styles["infor__project"]}>
                                        <div className={grid["grid"]}>
                                            <div className={grid["grid__row"]}>
                                                <div className={grid["grid__column-12"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Mã nhân viên</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn mã nhân viên" />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                <div className={myspace["member__item"]} >
                                                                    <div className={myspace["img__member"]} style={{
                                                                        backgroundImage: `url('/images/space.jpg')`
                                                                    }}>
                                                                    </div>
                                                                    <div className={myspace["member__infor"]}>
                                                                        <div className={myspace["main__infor"]}>
                                                                            <div className={myspace["name__member"]}>
                                                                                Nguyễn Minh Hiệp
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
                                                                                Trần Đức Toản
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
                                                                                Nguyễn Văn Huy
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-12"]}>
                                                    <div className={styles["infor__item"]}>
                                                        <div className={styles["title__infor"]}>*Tên đầy đủ</div>
                                                        <input className={styles["input__infor"]} required placeholder="Nhập tên đầy đủ" />
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Bộ phận</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn bộ phận" />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                <div className={myspace["member__item"]} >
                                                                    <div className={myspace["img__member"]} style={{
                                                                        backgroundImage: `url('/images/space.jpg')`
                                                                    }}>
                                                                    </div>
                                                                    <div className={myspace["member__infor"]}>
                                                                        <div className={myspace["main__infor"]}>
                                                                            <div className={myspace["name__member"]}>
                                                                                Bảo trì
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
                                                                                Kỷ thuật
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Chức vụ</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn chức vụ" />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
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
                                                                <div className={myspace["member__item"]} >
                                                                    <div className={myspace["img__member"]} style={{
                                                                        backgroundImage: `url('/images/space.jpg')`
                                                                    }}>
                                                                    </div>
                                                                    <div className={myspace["member__infor"]}>
                                                                        <div className={myspace["main__infor"]}>
                                                                            <div className={myspace["name__member"]}>
                                                                                Nhân viên
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Hợp đồng số</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn hợp đồng số" />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                <div className={myspace["member__item"]} >
                                                                    HĐLĐ-1
                                                                </div>
                                                                <div className={myspace["member__item"]} >
                                                                    HĐLĐ-2
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Loại hợp đồng</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                <div className={myspace["member__item"]} >
                                                                    HĐLĐ-1
                                                                </div>
                                                                <div className={myspace["member__item"]} >
                                                                    HĐLĐ-2
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Từ ngày</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input style={{ display: 'none' }} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={classNames(cn(
                                                                            "w-[280px] justify-start text-left font-normal flex-1",
                                                                            !dateStart && "text-muted-foreground"
                                                                        ), styles["calendar__filed"])}
                                                                    >
                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                        {dateStart ? format(dateStart, "PPP") : <span></span>}
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={dateStart}
                                                                        onSelect={setDateStart}
                                                                        initialFocus
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Đến ngày</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input style={{ display: 'none' }} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={classNames(cn(
                                                                            "w-[280px] justify-start text-left font-normal flex-1",
                                                                            !dateFinish && "text-muted-foreground"
                                                                        ), styles["calendar__filed"])}
                                                                    >
                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                        {dateFinish ? format(dateFinish, "PPP") : <span></span>}
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={dateFinish}
                                                                        onSelect={setDateFinish}
                                                                        initialFocus
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Ngày duyệt</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input style={{ display: 'none' }} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={classNames(cn(
                                                                            "w-[280px] justify-start text-left font-normal flex-1",
                                                                            !date && "text-muted-foreground"
                                                                        ), styles["calendar__filed"])}
                                                                    >
                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                        {date ? format(date, "PPP") : <span></span>}
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0 ">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={date}
                                                                        onSelect={setDate}
                                                                        initialFocus
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={styles["infor__item"]}>
                                                        <div className={styles["title__infor"]}>*Mẫu hợp đồng</div>
                                                        <input className={styles["input__infor"]} required placeholder="Nhập mẫu hợp đồng" />
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-12"]}>
                                                    <div className={styles["infor__item"]}>
                                                        <div className={styles["title__infor"]}>*Bảo hiểm XH</div>
                                                        <textarea className={styles["input__infor"]} required placeholder="" />
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

            <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                <button className={classNames(styles["btn__save"])}>Lưu</button>
            </div>
        </div>

    );
}

export default CreateContract;