"use client";

import globals from "@/styles/globals.module.scss";
import classNames from "classnames";
// import styles from "@/styles/myspace.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect } from "react";
function HeaderGroupSpace() {
    const pathname: any = usePathname();
    return (
        <div className={globals["header__myspace"]}>
            <div className={globals["navbar__myspace"]}>
                <ul className={globals["list__navbar-myspace"]}>
                    <li className={classNames(globals["myspace__item"], pathname === '/groupspace/feeds' ? globals["active"] : '')}>
                        <Link className="link__item" href="/groupspace/feeds" > Không gian nhóm </Link>
                    </li>
                    <li className={classNames(globals["myspace__item"], pathname === '/groupspace/project' ? globals["active"] : '')}>
                        <Link className="link__item" href="/groupspace/project" > Dự án  </Link>
                    </li>
                    <li className={classNames(globals["myspace__item"], pathname === '/groupspace/list_member' ? globals["active"] : '')}>
                        <Link className="link__item" href="/groupspace/list_member" > Danh sách nhóm  </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderGroupSpace;