"use client";
import NavBar from './navbar';
import Sidebar from './sidebar';
import '../styles/globals.css';
import styles from '../styles/listEmployee.module.scss';
import { RiPrinterLine } from "react-icons/ri";
import { FaFileExcel } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";

const Family = () => {
    return (
        <>
            <NavBar />
            <Sidebar />
            <div className={styles['function-parent']}>
                <div className={styles['box-display']}>

                    {/* parenbox1 */}
                    <div className={styles['parent-box1']}>
                        <div className={styles['room-parent']}>
                            <p className={styles['room-p']}>Bộ phận</p>
                            <div className={styles['custom-select']}>
                                <select className={styles['select']}>
                                    <option value="1">Tất cả</option>
                                    <option value="2">Bảo trì điện</option>
                                    <option value="3">Bảo trì máy</option>
                                    <option value="4">Chuyền may 1</option>
                                    <option value="5">Chuyền may 2</option>
                                    <option value="6">Chuyền may 3</option>
                                    <option value="7">IT</option>
                                    <option value="8">Nhân Sự</option>
                                    <option value="9">Kế toán</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles['view-parent']}>
                            <p className={styles['room-p']}>Chế độ xem</p>
                            <div className={styles['custom-select']}>
                                <select className={styles['select']}>
                                    <option value="1">Tất cả</option>
                                    <option value="2">Đang làm việc</option>
                                    <option value="3">Đã nghỉ việc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* parentbox1 */}

                    {/* parentbox2 */}
                    <div className={styles['parent-box2']}>
                        <div className={styles['parent-radioIn']}>
                            <input id='radio-in' className={styles['radio-in']} type="checkbox" />
                            <label className={styles['lable-radioin']} htmlFor="radio-in">Ngày vào</label>
                            <label className={styles['lable2-radioin']} htmlFor="radio-in">Đến ngày</label>
                            <input className={styles['datePick-in']} type="date" id="birthday" name="birthday" />
                        </div>
                        <div className={styles['parent-radioOut']}>
                            <input id='radio-in' className={styles['radio-out']} type="checkbox" />
                            <label className={styles['lable-radioOut']} htmlFor="radio-in">Ngày nghỉ</label>
                            <label className={styles['lable2-radioOut']} htmlFor="radio-in">Từ ngày</label>
                            <input className={styles['datePick-out']} type="date" id="birthday" name="birthday" />
                        </div>
                    </div>
                    {/* parentbox2 */}

                    {/* parentbox3 */}
                    <button className={styles['parent-box3']}>
                        <div className={styles['list-hd']}>
                            <i className={styles['icon-listIn']}><FaFileExcel /></i>
                            <p className={styles['btn-listIn']}>Danh sách nhân viên, HĐ</p>
                        </div>
                        <br />
                        <div className={styles['list-out']}>
                            <i className={styles['icon-listOut']}><FaFileExcel /></i>
                            <p className={styles['btn-listOut']}>Danh sách nghỉ mỗi tháng</p>
                        </div>
                    </button>
                    {/* parentbox3 */}

                    {/* parentbox4 */}
                    <button className={styles['parent-box4']}>
                        <div className={styles['list-hd']}>
                            <i className={styles['icon-listIn']}><FaFileExcel /></i>
                            <p className={styles['btn-listIn']}>Xuất theo danh sách</p>
                        </div>
                        <br />
                        <div className={styles['list-out']}>
                            <i className={styles['icon-listOut']}><RiPrinterLine /></i>
                            <p className={styles['btn-listOut']}>In thẻ nhân viên</p>
                        </div>
                    </button>
                    {/* parentbox4 */}
                </div>
            </div>

            <div className={styles['search-parent']}>
                <button className={styles['search-reload']}>
                    <i className={styles['icon-listOut']}><TfiReload /></i>
                    <p className={styles['p-listOut']}>Làm mới</p>
                </button>

                <div className={styles['parent-Inputsearch']}>
                    <label className={styles['text-Inputsearch']} htmlFor="">Tìm Kiếm</label>
                    <input className={styles['Inputsearch']} type="text" />
                </div>

                <button className={styles['btn-iconSearch']}>
                    <i className={styles['icon-listIn']}><FaSearch /></i>
                </button>
            </div>

            <div className={styles['table-parent']}>
                <table className={styles['table']}>
                    <thead>
                        <tr className={styles['tr']}>
                            <th>STT</th>
                            <th>Mã nhân viên</th>
                            <th>Tên nhân viên</th>
                            <th>Tên gọi</th>
                            <th>Bộ phận</th>
                            <th>Chức vụ</th>
                            <th>Chuyên môn</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày sinh</th>
                            <th>Nơi sinh</th>
                            <th>Số CMND</th>
                            <th>Ngày cập</th>
                            <th>Địa chỉ <br /> thường trú</th>
                            <th>Địa chỉ <br /> tạm trú</th>
                            <th>Nơi cấp</th>
                            <th>Giới tính</th>
                            <th>Loại nhân viên</th>
                            <th>Ngày nghỉ làm</th>
                            <th>Loại học vấn</th>
                            <th>Lý do thôi việc</th>
                            <th>Số thẻ</th>
                            <th>Mã số thuế</th>
                            <th>Ngày đăng ký thuế</th>
                            <th>Tên chủ tài khoản</th>
                            <th>Số tài khoản</th>
                            <th>Tài ngân hàng</th>
                            <th>Mã ngân hàng</th>
                            <th>Email</th>
                            <th>Điện thoại</th>
                            <th>Dân tộc</th>
                            <th>Quốc tịch</th>
                            <th>Ghi chú</th>
                            <th>Công đoàn</th>
                            <th>Trạng thái làm việc</th>
                            <th>Số thâm niên</th>
                            <th>Công đoàn</th>
                            <th>Nguyên đoàn</th>
                            <th>Số người phụ thuộc</th>
                            <th>Ngày hiệu lực</th>
                            <th>Số BHXH</th>
                            <th>Tỉnh đăng ký BH</th>
                            <th>Tên bệnh viện</th>
                            <th>Mã bệnh viện</th>
                            <th>Size đồng phục</th>
                            <th>Tôn giáo</th>
                            <th>Tình trạng hôn nhân</th>
                            <th>Số HĐ hiện tại</th>
                            <th>Số HĐ đến nay</th>
                            <th>Mã bệnh viện</th>
                            <th>Thu nhập cấp</th>
                            <th>Chọn để in thẻ</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td>001</td>
                            <td>MNV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>A</td>
                            <td>Kế toán</td>
                            <td>Nhân viên kế toán</td>
                            <td>Kế toán tổng hợp</td>
                            <td>01/01/2020</td>
                            <td>01/01/1990</td>
                            <td>Hà Nội</td>
                            <td>123456789</td>
                            <td>01/01/2022</td>
                            <td>Địa chỉ thường trú A</td>
                            <td>Địa chỉ tạm trú A</td>
                            <td>Hà Nội</td>
                            <td>Nam</td>
                            <td>Nhân viên chính thức</td>
                            <td>02/01/2024</td>
                            <td>Cử nhân</td>
                            <td>Bệnh</td>
                            <td>1234567890</td>
                            <td>ABC123</td>
                            <td>01/01/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>12345678901234</td>
                            <td>Ngân hàng A</td>
                            <td>001</td>
                            <td>nguyenvana@example.com</td>
                            <td>0987654321</td>
                            <td>Kinh</td>
                            <td>Việt Nam</td>
                            <td>Ghi chú A</td>
                            <td>Đã đóng phí</td>
                            <td>3 năm</td>
                            <td>Đã đóng phí</td>
                            <td>Đã từng tham gia</td>
                            <td>0</td>
                            <td>0</td>
                            <td>01/01/2020</td>
                            <td>9876543210</td>
                            <td>Hà Nội</td>
                            <td>Bệnh viện A</td>
                            <td>BVA</td>
                            <td>M</td>
                            <td>Công giáo</td>
                            <td>Đã kết hôn</td>
                            <td>001</td>
                            <td>001</td>
                            <td>BVA</td>
                            <td>10,000,000 VND</td>
                            <td>
                                <input className={styles['td-checkbox']} type='checkbox'></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>



    );
}

export default Family