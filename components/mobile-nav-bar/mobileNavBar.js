import Link from "next/link";
import style from "./style/mobileNavBar.module.scss"
import {useState} from "react";

export default function Navbar({children}) {
    const [isActive, setActive] = useState(false);
    const menu = [
        {
            path: "/product",
            name: "محصولات"
        },
        {
            path: "/aboutUs",
            name: "درباری ما"
        }
    ]

    const listItems = menu.map((item) =>
        <li key={item.path}>
            <Link href={item.path}>
                <a>{item.name}</a>
            </Link>
        </li>
    );

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className={style.mobileNavContainer}>
            <div className={style.section}>
                <div onClick={toggleClass} className={style.menuIconContainer}>
                    <div
                        className={isActive ? style.mobileMenuIcon : style.mobileMenuIcon + ' ' + style.selectedMenu}></div>
                </div>

            </div>
            <div className={style.section}>
                <i className="far fa-shopping-bag text-2xl"></i>
            </div>
            <div className={style.section}>
                <div className={style.logo}>LOGO</div>
                <button>ورود/ثبت‌نام</button>
                <ul className={style.menuContainer}>
                    {listItems}
                </ul>
            </div>
        </div>

    )
}