import s from './FeaturesSection.module.scss';
import { features } from "../../../data/features.jsx";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const FeaturesSection = ({ t }) => {
    const [sectionRef, sectionVisible] = useScrollAnimation(0.4);

    return (
        <section className={s.featuresSection}>
            <div className={s.container} ref={sectionRef}>
                <h1 className={`${s.mainTitle} ${sectionVisible ? s.visible : ''}`}>
                    {t("CRM_BENEFITS_TITLE")}
                </h1>

                <div className={s.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index} className={s.featureCard}>
                            <div className={s.cardHeader}>
                                <div className={s.cardTitle}>
                                    {feature.icon}
                                    <span>{t(`features.${index}.title`)}</span>
                                </div>
                            </div>
                            <ul className={s.featureList}>
                                {feature.items.map((_, itemIndex) => (
                                    <li key={itemIndex} className={s.featureItem}>
                                        <span>{t(`features.${index}.items.${itemIndex}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;