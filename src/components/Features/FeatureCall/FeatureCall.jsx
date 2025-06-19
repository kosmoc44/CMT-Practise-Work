import s from './featureCall.module.scss'

const FeatureCall = ({ t }) => {

    return (
        <div className={s.call}>
            <div className={s.container}>
                <div className={s.call_box}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className={s.call_text}>
                        {t("CALL")}
                        <br />
                        {t("SOLVE")}
                    </p>
                    <button className={s.call_btn}>
                        {t("Contact us")}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeatureCall