import s from './certificates.module.scss';
import { certificates } from "../../data/imageImport";
import { partners } from "../../data/imageImport";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const CertificatesInfo = () => {
    const [sectionRef, sectionVisible] = useScrollAnimation(0.6);
    return (
        <section className={s.certificates} ref={sectionRef}>
            <div className={s.certificates_container}>
                <h1 className={`${s.certificates_title} ${sectionVisible ? s.visible : ''}`}>OUR CERTIFICATES</h1>
                <div className={s.certificates_content}>
                    <img src={certificates.C1} alt="certificate" className={`${s.certificates_img} ${sectionVisible ? s.slide_left : ''}`} width={425} height={300} />
                    <img src={certificates.C2} alt="certificate" className={`${s.certificates_img} ${sectionVisible ? s.slide_right : ''}`} width={425} height={300} />
                    <img src={certificates.C3} alt="certificate" className={`${s.certificates_img} ${sectionVisible ? s.slide_bottom : ''}`} width={425} height={300} />
                </div>
                <h2 className={`${s.certificates_title} ${sectionVisible ? s.visible : ''}`}>
                    PARTNERSHIP WITH
                </h2>
                <div className={s.certificates_partnership}>
                    <img src={partners.P1} alt="partnership" width={90} height={90} />
                    <img src={partners.P2} alt="partnership" width={216} height={38} />
                    <img src={partners.P3} alt="partnership" width={90} height={90} />
                    <img src={partners.P4} alt="partnership" width={64} height={30} />
                </div>
            </div>
        </section>
    )
}

export default CertificatesInfo