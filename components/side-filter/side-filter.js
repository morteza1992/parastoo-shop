import style from '../side-filter/style/side-filter.module.scss'
export default function slider() {
    return (
        <div className={style.filterContainer}>
            <div className={style.title}>فیلتر</div>
            <div className={style.filterRowContainer}>
                    <input type="checkbox"/>
                    <span>رنگ</span>
            </div>
        </div>
    )
}