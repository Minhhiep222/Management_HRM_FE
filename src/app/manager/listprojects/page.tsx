"use client";

import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function ListProject() {
    const [selectProject, setSelectProject] = useState<any[]>([]);
    const [projects, setProjects] = useState<any[]>([]);
    const idAllUserRef = useRef<HTMLInputElement | null>(null);

    const handleUpdate = (id: any) => {
        window.location.href = `/projects/update/${id}`;
    };

    const handleCreateProject = () => {
        window.location.href = "/projects/create";
    }

    const handleGetProjects = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/projects/list");
            setProjects(result.data.projects);
            console.log(result.data.projects);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleCheckedAll = () => {
        const checkeds = document.querySelectorAll("input[name='idProject']") as NodeListOf<HTMLInputElement>;
        checkeds.forEach((element, index) => {
            if (idAllUserRef.current?.checked === false) {
                element.checked = false
                setSelectProject([]);
            }
            else {
                element.checked = true;
                setSelectProject(projects)
            }
        });
    }

    const handleSelectProject = (e: any): void => {
        setSelectProject(prevProjects => {
            const isProjectSelected = prevProjects.some(Project => Project.id === e.id);
            if (isProjectSelected) {
                return prevProjects.filter(Project => Project.id !== e.id);
            } else {
                return [...prevProjects, e];
            }
        });
    }

    const handleDeleteProjects = async () => {
        const confim = window.confirm("Bạn có muốn xóa nhóm này không");
        if (confim)
            try {
                var arrayId: any = [];
                if (selectProject) {
                    selectProject.map((Project, index) =>
                        arrayId[index] = Project.id
                    )
                }

                const result = await axios.patch("http://127.0.0.1:8000/api/projects/deleteAll", arrayId);
                if (result.status == 200) {
                    console.log("xóa thành công");
                    handleGetProjects();
                    const checkeds = document.querySelectorAll("input[name='idProject']") as NodeListOf<HTMLInputElement>;
                    checkeds.forEach(checked => checked.checked = false);
                }

            } catch (e) {
                console.log("something wrong")
            }
    }

    const handleDeleteProjectById = async (id: any) => {
        const confim = window.confirm("Bạn có muốn xóa nhóm này không");
        if (confim)
            try {
                const result = await axios.delete("http://127.0.0.1:8000/api/Projects/" + id);
                if (result.status == 200) {
                    console.log("xóa thành công");
                    handleGetProjects();
                }
            } catch (e) {
                console.log("something wrong")
            }
    }

    useEffect(() => {
        handleGetProjects();
    }, [])


    return (
        <div className={styles["container__my-space"]}>
            <div className={grid["grid"]}>
                <div className={grid["grid__row"]}>
                    <div className={grid["grid__column-12"]}>
                        <div className={styles["content__myspace"]}>
                            <div>
                                <div className={styles["control__project"]}>
                                    <div className={styles["list__select"]}>
                                        <select name="name__project" id="" className={styles["select__name-project"]}>
                                            Dự án
                                            <option value="Quản lý nhân sự" className={styles["item__project"]}>Quản lý nhân sự</option>
                                            <option value="Thương mại điện tử" className={styles["item__project"]}>Thương mại điện tử</option>
                                        </select>
                                    </div>

                                    <div className={styles["control"]}>
                                        <button className={classNames(grid["btn"], styles["btn__control-project"])}>Nhân viên</button>
                                        <button className={classNames(grid["btn"], styles["btn__control-project"])}>Phòng</button>
                                        <button onClick={handleDeleteProjects} className={classNames(grid["btn"], styles["btn__control-project"])}>Xóa dự án</button>
                                        <button onClick={handleCreateProject} className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm sự án</button>
                                    </div>
                                </div>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Danh sách dự án</h3>
                                    <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                        <table className={styles["table__experience"]}>
                                            <thead className={styles["head__experience"]}>
                                                <tr className={styles["tr__experience"]}>
                                                    <th style={{ backgroundColor: 'white', borderRadius: 0 }} className={classNames(styles["th__experience-checkbox"], styles["sticky-col-0"])}>
                                                    </th>
                                                    <th className={classNames(styles["th__experience-checkbox"], styles["sticky-col-1"])}>
                                                        <div>
                                                            <input type="checkbox" name="" id="" ref={idAllUserRef} onClick={handleCheckedAll} />
                                                        </div>
                                                    </th>
                                                    <th className={classNames(styles["th__experience"], styles["sticky-col-2"])} style={{
                                                        minWidth: '400px'
                                                    }} >
                                                        <div>
                                                            <span>Tên dự án</span>
                                                            <span>
                                                                <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Khách hàng</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Người quản lý</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Người tham gia</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Chi phí</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Số giờ dự tính</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Ngày bắt đầu</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Ngày kết thúc</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Trạng thái</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Mô tả</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id={styles["body__experience"]}>
                                                {projects.map(project =>
                                                    <tr key={project.id} className={styles["employee__item"]}>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                                                            <div className={styles["control__project"]}>
                                                                <HiOutlineDotsHorizontal />
                                                                <ul className={styles["list__contacts"]}>
                                                                    <Link href="/projects/detail" className={styles["contacts__item"]}>
                                                                        <IoEyeOutline />
                                                                        <span>Xem</span>
                                                                    </Link>
                                                                    <button onClick={() => handleDeleteProjectById(project.id)} className={styles["contacts__item"]}>
                                                                        <TiUserDelete />
                                                                        <span>Xóa</span>
                                                                    </button>
                                                                    <button onClick={() => handleUpdate(project.id)} className={styles["contacts__item"]}>
                                                                        <MdOutlineTipsAndUpdates />
                                                                        <span>Sửa</span>
                                                                    </button>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                                            <div className="">
                                                                <input onClick={() => handleSelectProject(project)} type="checkbox" name="idProject" id="" />
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>{project.name}</td>
                                                        <td className={styles["td__experience"]}>{project.customer.name}</td>
                                                        <td className={styles["td__experience"]}>{project.manager.fullname}</td>
                                                        <td className={styles["td__experience"]}>
                                                            {project.members.map((mem: any) =>
                                                                <div key={mem.id}>{mem.fullname}</div>
                                                            )}
                                                        </td>
                                                        <td className={styles["td__experience"]}>{project.expense}</td>
                                                        <td className={styles["td__experience"]}>{project.time}</td>
                                                        <td className={styles["td__experience"]}>{project.start_date}</td>
                                                        <td className={styles["td__experience"]}>{project.finish_date}</td>
                                                        <td className={styles["td__experience"]}>{project.state}</td>
                                                        <td className={styles["td__experience"]}>{project.description}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default ListProject;
