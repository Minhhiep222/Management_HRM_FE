import NavBar from './navbar';
import Sidebar from './sidebar';
import styles from '../styles/birthday.module.scss';
import { FaChevronDown } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import '../styles/globals.css';
import { FaSearch } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


const Birthday = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className={styles['birthday-parent']}>
        <div className={styles['birthday-function']}>
          <div className={styles['birthday-select']}>
            <h5 className={styles['month']}>Tháng</h5>
            <div className={styles['custom-select']} style={{ width: '102px' }}>
              <select className={styles['custom']}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>

          <button className={styles['parent-btn']} >
            <i className={styles['btn-icon']}><TfiReload /></i>
            <p className={styles['btn-text']}>Làm Mới</p>
          </button>

          <div className={styles['search-parent']} >
            <div className={styles['parent-textSearch']} >
              <p className={styles['text-search']}>Tìm Kiếm</p>
            </div>
            <input className={styles['input-search']} type="text" />

            <button>
              <i className={styles['iconSearch']}><FaSearch /></i>
            </button>
          </div>

          <button className={styles['parent-btn2']} >
            <i className={styles['btn-icon']}><FaDownload /></i>
            <p className={styles['btn-text']}>Xuất Excel</p>
          </button>
        </div>

        <table className={styles['table']}>
          <thead>
            <tr className={styles['tr']}>
              <th>Mã nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Phòng ban</th>
              <th>Bộ phận</th>
              <th>Số ĐT liên lạc</th>
              <th>Ngày Sinh</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles['tr']}>
              <td>001</td>
              <td>Nguyễn Thành Đạt</td>
              <td>IT</td>
              <td>Web</td>
              <td>0329169799</td>
              <td>7/2/2004</td>
              <td>nnguyendat72@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>002</td>
              <td>Trần Văn Bình</td>
              <td>Marketing</td>
              <td>Quảng cáo</td>
              <td>0908123456</td>
              <td>15/10/1995</td>
              <td>binhtran@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>003</td>
              <td>Lê Thị Hà</td>
              <td>Nhân sự</td>
              <td>Tuyển dụng</td>
              <td>0987654321</td>
              <td>3/8/1990</td>
              <td>hale@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>004</td>
              <td>Phạm Văn Dũng</td>
              <td>Kế toán</td>
              <td>Thanh toán</td>
              <td>0978123456</td>
              <td>20/5/1988</td>
              <td>dungpv@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>005</td>
              <td>Nguyễn Thị Mai</td>
              <td>Điều hành</td>
              <td>Giám đốc</td>
              <td>0934567890</td>
              <td>10/12/1985</td>
              <td>maint@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>006</td>
              <td>Hoàng Văn Hùng</td>
              <td>Kỹ thuật</td>
              <td>Phần mềm</td>
              <td>0956781234</td>
              <td>25/9/1992</td>
              <td>hung.hv@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>007</td>
              <td>Nguyễn Thị Hương</td>
              <td>Marketing</td>
              <td>Content</td>
              <td>0987654321</td>
              <td>15/6/1993</td>
              <td>huongnt@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>008</td>
              <td>Trần Đức Anh</td>
              <td>Kinh doanh</td>
              <td>Bán hàng</td>
              <td>0909123456</td>
              <td>5/4/1997</td>
              <td>anhtd@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>009</td>
              <td>Lê Thị Hoa</td>
              <td>Tài chính</td>
              <td>Thanh toán</td>
              <td>0978123456</td>
              <td>10/11/1990</td>
              <td>hoalt@gmail.com</td>
            </tr>
            <tr className={styles['tr']}>
              <td>010</td>
              <td>Nguyễn Văn Long</td>
              <td>Kỹ thuật</td>
              <td>Phần cứng</td>
              <td>0987654321</td>
              <td>20/8/1995</td>
              <td>longnv@gmail.com</td>
            </tr>
          </tbody>
        </table>



      </div>

    </>
  );
}
export default Birthday;