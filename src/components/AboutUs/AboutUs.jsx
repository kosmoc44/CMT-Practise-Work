import s from './aboutUs.module.scss';
import { images } from '../../data/imageImport';
import { useTranslation } from "react-i18next";
import About from "./About/About";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const AboutUs = () => {
    const [sectionRef, sectionVisible] = useScrollAnimation(0.6);
    const { t } = useTranslation()
    return (
        <>
            <section className={s.contact} ref={sectionRef}>
                <div className={s.container}>
                    <div className={s.contact_wrapper}>
                        <div className={s.contact_info}>
                            <h1 className={s.contact_title}>
                                {t("BOOST EFFICIENCY AND STREAMLINE YOUR BUSINESS")}
                            </h1>
                            <h2 className={s.contact_subtitle}>
                                {t("RECRUITING WITH CRM SYSTEM")}
                            </h2>
                            <button className={s.contact_btn}>
                                {t("Contact us")}
                            </button>
                        </div>

                        <div className={`${s.contact_phone_group} ${sectionVisible ? s.slide_left : ''}`}>
                            <img
                                src={images.phone1}
                                className={s.contact_img}
                                alt="Phone"
                            />
                            <img
                                src={images.arrow}
                                className={s.contact_arrow}
                                alt="Arrow pointing to text"
                            />
                        </div>

                        <img
                            src={images.phone2}
                            className={`${s.contact_touch} ${sectionVisible ? s.slide_right : ''}`}
                            alt="Contact"
                        />
                    </div>
                </div>
            </section>
            <About />
        </>
    );
}

export default AboutUs;