import { X } from "lucide-react"
import s from './headerAdaptive.module.scss'
import { menuItems } from "../../../data/headerData"
import { useTranslation } from "react-i18next"

const HeaderAdaptive = ({ isOpen, setIsOpen, toggleLanguage }) => {
    const { t, i18n } = useTranslation()

    return (
        <div className={`${s.sidebar} ${isOpen ? s.open : ""}`}>
            <button className={s.close} onClick={() => setIsOpen(false)}>
                <X size={28} />
            </button>
            <ul className={s.mobile_menu}>
                {menuItems.map(
                    (item, index) => (
                        <a className={s.menu_link} key={index} href="#">
                            {t(item)}
                        </a>
                    )
                )}
            </ul>
            <button className={s.lang_btn} onClick={toggleLanguage}>{i18n.language}</button>
        </div>
    )
}

export default HeaderAdaptive