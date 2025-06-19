import s from './features.module.scss'
import { images } from "../../data/imageImport"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import FeatureCall from "./FeatureCall/FeatureCall";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import { useTranslation } from "react-i18next";

const Features = () => {
    const [sectionRef, sectionVisible] = useScrollAnimation(0.4);
    const { t } = useTranslation()
    return (
        <>
            <section className={s.features} ref={sectionRef}>
                <div className={`${s.container} ${s.features_wrapper}`}>
                    <div className={s.features_content}>
                        <div className={s.features_text}>
                            <h1 className={s.features_title}>
                                {t("CONNECT_ADS")}
                            </h1>
                            <p className={s.features_description} style={{ marginBottom: '20px' }}>
                                {t("LEADS")} (<span className={s.features_text_blue_1}>Facebook</span>{' '}
                                {t("and")} <span className={s.features_text_blue_1}>Instagram</span>) {t("STRAIGHT")} <span className={s.features_text_blue_1}>CRM</span>.
                                {t("NO_MORE")}
                            </p>
                            <p className={s.features_description} >
                                {t("ANALYTICS_BENEFITS")}
                            </p>
                        </div>
                        <img src={images.feature1} className={`${s.features_img} ${sectionVisible ? s.slide_right : ''}`} alt={t("FEATURE_SECTION")} width={371} height={475} />
                    </div>
                    <div className={s.features_content}>
                        <img src={images.feature2} className={`${s.features_img} ${sectionVisible ? s.slide_left : ''}`} alt={t("FEATURE_SECTION")} width={371} height={475} />
                        <div className={s.features_text}>
                            <h1 className={`${s.features_title} ${s.features_title_2}`}>
                                {t("TASK_MANAGEMENT")}
                            </h1>
                            <p className={s.features_description} >
                                {t("WITH")} <span className={s.features_text_blue_2}>CRM</span>, {t("MANAGERS_VIEW")}
                            </p>
                            <p className={s.features_description} >
                                {t("RECRUITERS_VIEW")}
                            </p>
                            <p className={s.features_description} >
                                {t("SET")}
                                <span className={s.features_text_blue_2}>{' '}{t("REMINDERS")}</span> {t("and")}
                                <span className={s.features_text_blue_2}>{' '}{t("TRACK")}</span>{' '}
                                {t("SETTINGS_BENEFITS")}
                            </p>
                        </div>
                    </div>
                </div>
                <FeatureCall t={t} />
            </section>
            <FeaturesSection t={t} />
        </>
    )
}

export default Features