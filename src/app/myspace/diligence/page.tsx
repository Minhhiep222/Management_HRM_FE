"use client";

import actionlist from "@/styles/myspace.module.scss";
import styles from "@/styles/diligence.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import NavBarMySpace from "@/components/navbar/navbar_myspace";

function Diligence() {
    return (
        <div className={styles["diligence__week"]}>
            <div className={styles["diligence__day"]}>
                <div className={styles["day__in-week"]}>
                    <div>Chủ Nhật</div>
                    <div>23</div>
                </div>

                <div className={classNames(actionlist["time__calendar-work"], styles["time__calendar-work"])}>
                    <div className={actionlist["hook__calendar"]}>
                        <div className={actionlist["name__work"]}>General</div>
                        <div className={actionlist["day__calendar-work"]}>
                            <em>9:00 SÁNG</em>
                            <span>-</span>
                            <em>18:00 TỐI</em>
                        </div>
                    </div>
                </div>

                <div className={styles["state__work"]}>
                    {/* Vắng */}
                </div>

                <div className={styles["btn__change-of-shift"]}>
                    <button className={classNames(grid["btn"], styles["change__calendar-work"])}>Thay đổi lịch làm việc</button>
                </div>
            </div>
            <div className={styles["diligence__day"]}>
                <div className={styles["day__in-week"]}>
                    <div>Thứ 2</div>
                    <div>24</div>
                </div>

                <div className={classNames(actionlist["time__calendar-work"], styles["time__calendar-work"])}>
                    <div className={actionlist["hook__calendar"]}>
                        <div className={actionlist["name__work"]}>General</div>
                        <div className={actionlist["day__calendar-work"]}>
                            <em>9:00 SÁNG</em>
                            <span>-</span>
                            <em>18:00 TỐI</em>
                        </div>
                    </div>
                </div>

                <div className={styles["state__work"]}>
                    Vắng
                </div>

                <div className={styles["btn__change-of-shift"]}>
                    <button className={classNames(grid["btn"], styles["change__calendar-work"])}>Thay đổi lịch làm việc</button>
                </div>
            </div>
            <div className={styles["diligence__day"]}>
                <div className={styles["day__in-week"]}>
                    <div>Thứ 3</div>
                    <div>25</div>
                </div>

                <div className={classNames(actionlist["time__calendar-work"], styles["time__calendar-work"])}>
                    <div className={actionlist["hook__calendar"]}>
                        <div className={actionlist["name__work"]}>General</div>
                        <div className={actionlist["day__calendar-work"]}>
                            <em>9:00 SÁNG</em>
                            <span>-</span>
                            <em>18:00 TỐI</em>
                        </div>
                    </div>
                </div>

                <div className={styles["state__work"]}>
                    Vắng
                </div>

                <div className={styles["btn__change-of-shift"]}>
                    <button className={classNames(grid["btn"], styles["change__calendar-work"])}>Thay đổi lịch làm việc</button>
                </div>
            </div>
            <div className={styles["diligence__day"]}>
                <div className={styles["day__in-week"]}>
                    <div>Tứ 4</div>
                    <div>26</div>
                </div>

                <div className={classNames(actionlist["time__calendar-work"], styles["time__calendar-work"])}>
                    <div className={actionlist["hook__calendar"]}>
                        <div className={actionlist["name__work"]}>General</div>
                        <div className={actionlist["day__calendar-work"]}>
                            <em>9:00 SÁNG</em>
                            <span>-</span>
                            <em>18:00 TỐI</em>
                        </div>
                    </div>
                </div>

                <div className={styles["state__work"]}>
                    Vắng
                </div>

                <div className={styles["btn__change-of-shift"]}>
                    <button className={classNames(grid["btn"], styles["change__calendar-work"])}>Thay đổi lịch làm việc</button>
                </div>
            </div>
            <div className={styles["diligence__day"]}>
                <div className={styles["day__in-week"]}>
                    <div>Thứ 5</div>
                    <div>27</div>
                </div>

                <div className={classNames(actionlist["time__calendar-work"], styles["time__calendar-work"])}>
                    <div className={actionlist["hook__calendar"]}>
                        <div className={actionlist["name__work"]}>General</div>
                        <div className={actionlist["day__calendar-work"]}>
                            <em>9:00 SÁNG</em>
                            <span>-</span>
                            <em>18:00 TỐI</em>
                        </div>
                    </div>
                </div>

                <div className={styles["state__work"]}>
                    Vắng
                </div>

                <div className={styles["btn__change-of-shift"]}>
                    <button className={classNames(grid["btn"], styles["change__calendar-work"])}>Thay đổi lịch làm việc</button>
                </div>
            </div>
            <div className={styles["diligence__day"]}>
                <div className={styles["day__in-week"]}>
                    <div>Thứ 6</div>
                    <div>28</div>
                </div>

                <div className={classNames(actionlist["time__calendar-work"], styles["time__calendar-work"])}>
                    <div className={actionlist["hook__calendar"]}>
                        <div className={actionlist["name__work"]}>General</div>
                        <div className={actionlist["day__calendar-work"]}>
                            <em>9:00 SÁNG</em>
                            <span>-</span>
                            <em>18:00 TỐI</em>
                        </div>
                    </div>
                </div>

                <div className={styles["state__work"]}>
                    Vắng
                </div>

                <div className={styles["btn__change-of-shift"]}>
                    <button className={classNames(grid["btn"], styles["change__calendar-work"])}>Thay đổi lịch làm việc</button>
                </div>
            </div>
            <div className={styles["diligence__day"]}>
                <div className={styles["day__in-week"]}>
                    <div>Thứ 7</div>
                    <div>29</div>
                </div>

                <div className={classNames(actionlist["time__calendar-work"], styles["time__calendar-work"])}>
                    <div className={actionlist["hook__calendar"]}>
                        <div className={actionlist["name__work"]}>General</div>
                        <div className={classNames(actionlist["day__calendar-work"], styles["day__calendar-work"])}>
                            <em>9:00 SÁNG</em>
                            <span>-</span>
                            <em>18:00 TỐI</em>
                        </div>
                    </div>
                </div>

                <div className={styles["state__work"]}>
                    Vắng
                </div>

                <div className={styles["btn__change-of-shift"]}>
                    <button className={classNames(grid["btn"], styles["change__calendar-work"])}>Thay đổi lịch làm việc</button>
                </div>
            </div>
        </div>
    );
}

export default Diligence;
