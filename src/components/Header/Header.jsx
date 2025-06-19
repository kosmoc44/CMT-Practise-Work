import { useState } from "react"
import s from "./header.module.scss"
import { Menu, Phone } from "lucide-react"
import HeaderAdaptive from "./HeaderAdaptive/HeaderAdaptive"
import { useTranslation } from "react-i18next"
import { menuItems } from "../../data/headerData"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
    }
    return (
        <>
            <header className={s.header}>
                <div className={s.header_wrapper}>
                    <div className={s.logo}>
                        <div className={s.logo_circle}>
                            <span className={s.logo_letter}>S</span>
                        </div>
                        <div className={s.logo_text}>
                            <ul className={s.logo_menu}>
                                {["S", "M", "R", "T"].map((item, index) => (
                                    <a href="#" key={index} className={s.logo_link}>{item}</a>
                                ))}
                            </ul>
                            <h1 className={s.logo_title}>
                                {t("CONSULTING_AGENCY")}
                            </h1>
                        </div>
                    </div>
                    <nav className={s.menu}>
                        <ul className={s.menu_list}>
                            {menuItems.map((item, index) => (
                                <a className={s.menu_link} key={index} href="#">{t(item)}</a>
                            ))}
                        </ul>
                    </nav>
                    <div className={s.lang} onClick={toggleLanguage}>
                        <button className={s.lang_btn}>
                            {i18n.language.toUpperCase()}
                        </button>
                    </div>
                    <div className={s.burger_container}>
                        <a href="tel:+1111111111" className={s.phone}>
                            <Phone />
                            +111 1111 1111
                        </a>
                        <button
                            className={s.burger}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Open menu"
                        >
                            <Menu size={32} />
                        </button>
                    </div>
                </div>
                <HeaderAdaptive isOpen={isOpen} setIsOpen={setIsOpen} toggleLanguage={toggleLanguage} />
            </header>
        </>
    )
}

export default Header