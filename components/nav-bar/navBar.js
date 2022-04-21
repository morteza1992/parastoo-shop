import Link from "next/link";
import style from "./style/navBar.module.scss"

export default function Navbar({children}) {
    const menu = [
        {
            path: "/",
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
    return (
        <div className={style.menuContainer}>

            <div className={style.sections}>
                <div className={style.logo}>LOGO</div>
            </div>
            <div className={`${style.sections} ${style.midSection}`}>
                <i className="far fa-shopping-bag"></i>

            </div>
            <div className={style.sections}>
                <ul className={style.menuContainer}>
                    {listItems}
                </ul>
                <button>ورود/ثبت‌نام</button>
            </div>

        </div>

    )
}