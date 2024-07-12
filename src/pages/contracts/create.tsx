"use client"

import { useEffect, useState } from "react";
import styles from "@/styles/profile.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import classNames from "classnames";
import Image from "next/image";
import { Input } from "postcss";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import ModalItem from "@/components/modal/Modal_Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdSearch } from "react-icons/io";

import * as React from "react"
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
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
function CreateRoom() {
    const [isModalOpenItem, setIsModalOpenItem] = useState(false);
    const [address, setAddress] = useState<string>('');
    const [date, setDate] = React.useState<Date>()

    useEffect(() => {
        handleSelect();
        handleSelectImg();
        const choose = document.querySelector(".choose__member");
        console.log(choose)
        choose?.addEventListener('click', () => {
            handleOpenModalItem();
        })
    }, []);

    const handleOpenModalItem = () => {
        setIsModalOpenItem(true);
    };

    const handleCloseModalItem = () => {
        setIsModalOpenItem(false);
    };

    const handleCreateRoom = () => {

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

    };

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
        <Popover>
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
        </Popover>

    );
}

export default CreateRoom;