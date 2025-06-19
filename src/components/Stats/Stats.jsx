import s from './stats.module.scss'
import { useTranslation } from "react-i18next";

const Stats = () => {
    const { t } = useTranslation();

    const stats = [
        t('stats.years', { returnObjects: true }),
        t('stats.drivers', { returnObjects: true }),
        t('stats.employees', { returnObjects: true }),
        t('stats.days', { returnObjects: true })
    ];
    return (
        <section className={s.stats}>
            <div className={s.stats_grid}>
                {stats.map((stat) => (
                    <div key={`${stat.value}-${stat.unit}`} className={s.stats_card}>
                        <div className={s.stats_value_wrapper}>
                            <div className={s.stats_value}>{stat.value}</div>
                            <div className={s.stats_unit}>{stat.unit}</div>
                        </div>
                        <div className={s.stats_lines}>
                            <div>{stat.line1}</div>
                            <div>{stat.line2}</div>
                            <div>{stat.line3}</div>
                            <div>{stat.line4}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats