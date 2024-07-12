import globals from "@/styles/globals.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
function HeaderMySpace() {
    const router = useRouter();

    const handlePath = (pathname: string): boolean => {
        const url = ["/myspace/actionlist", "/myspace/feeds", "/myspace/profile", "/myspace/diligence"];
        return url.includes(pathname);
    }
    return (
        <div className={globals["grid"]}>
            <div className={globals["grid__row"]}>
                <div className={globals["grid__column-12"]}>
                    <div className={globals["header__myspace"]}>
                        <div className={globals["navbar__myspace"]}>
                            <ul className={globals["list__navbar-myspace"]}>
                                <li className={classNames(globals["myspace__item"], handlePath(router.pathname) ? globals["active"] : "")}>
                                    <Link className="link__item" href="/myspace/actionlist" > Khái quát </Link>
                                </li>
                                <li className={classNames(globals["myspace__item"], router.pathname == "/myspace/control" ? globals["active"] : "")}>
                                    <Link className="link__item" href="/myspace/control" > Bảng điều khiển </Link>
                                </li>
                                <li className={classNames(globals["myspace__item"], router.pathname == "/myspace/control" ? globals["active"] : "")}>
                                    <Link className="link__item" href="/myspace/control" > Lịch </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HeaderMySpace;