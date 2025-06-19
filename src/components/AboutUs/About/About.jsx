import s from './about.module.scss'
import { images } from "../../../data/imageImport"
import { useTranslation } from "react-i18next"
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const About = () => {
    const [sectionRef, sectionVisible] = useScrollAnimation(0.6);
    const { t } = useTranslation()
    return (
        <section className={s.about} ref={sectionRef}>
            <div className={s.container}>
                <div className={s.about_wrapper}>
                    <h3 className={`${s.about_title} ${sectionVisible ? s.visible : ''}`}>{t("ABOUT_US")}</h3>
                    <div className={s.about_content}>
                        <div className={s.about_text}>
                            <p className={s.about_intro}>
                                {t("SMRT Agency provides")}{' '}
                                <span className={s.about_text_blue}>CRM</span>{' '}
                                {t("solutions for trucking companies. Our team will help set up your")}{' '}
                                <span className={s.about_text_blue}>{t("recruiting")}</span>{' '}
                                {t("and")}{' '}
                                <span className={s.about_text_blue}>{t("safety departments")}</span>{' '}
                                {t("with automation. We connect CRM system with email and RingCentral so")}{' '}
                                {t("you can track every lead and see each step of the hiring process.")}{' '}
                                {t("This makes it easier to")}{' '}
                                <span className={s.about_text_blue}>{t("manage your work")}</span>,{' '}
                                <span className={s.about_text_blue}>{t("respond faster")}</span>,{t("and")}{' '}
                                <span className={s.about_text_blue}>{t("grow your team")}</span>.
                            </p>
                        </div>
                        <div className={`${s.about_image_container} ${sectionVisible ? s.slide_right : ''}`}>
                            <img
                                src={images.truck}
                                className={s.about_img}
                                alt="Truck on highway"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About