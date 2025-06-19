import { useTranslation } from "react-i18next";
import s from './footer.module.scss';
import { Mail, MapPinned, PhoneCall } from "lucide-react";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={s.footer}>
            <div className={s.footer_container}>
                <div className={s.footer_logo}>
                    <div className={s.footer_logo_circle}>
                        <span className={s.footer_logo_letter}>S</span>
                    </div>
                    <div className={s.footer_logo_text}>
                        <ul className={s.footer_logo_menu}>
                            {["S", "M", "R", "T"].map((item, index) => (
                                <a href="#" key={index} className={s.footer_logo_link}>{item}</a>
                            ))}
                        </ul>
                        <h1 className={s.footer_logo_title}>
                            {t("CONSULTING_AGENCY")}
                        </h1>
                    </div>
                </div>
                <nav className={s.footer_nav}>
                    <li className={s.footer_links_links}>
                        <Mail />
                        <a href="mailto:WlF0o@example.com" className={s.footer_links_link}>WlF0o@example.com</a>
                    </li>
                    <li className={s.footer_links_links}>
                        <PhoneCall />
                        <a href="tel:+1111111111" className={s.footer_links_link}>+38 (099) 123-45-67</a>
                    </li>
                    <li className={s.footer_links_links}>
                        <MapPinned />
                        <a href="#" className={s.footer_links_link}>New Tashkent</a>
                    </li>
                </nav>
            </div>
        </footer>
    )
}
export default Footer
