import s from './benefits.module.scss'
import { images } from '../../data/imageImport'
import { benefitsData } from '../../data/benefits'
import { useScrollAnimation } from "../../hooks/useScrollAnimation";


const Benefits = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.4);

  return (
    <section className={s.benefits} ref={sectionRef}>
      <div className={s.container}>
        <h1 className={`${s.benefits_title} ${sectionVisible ? s.visible : ''}`}>
          How We Work
        </h1>

        <div className={s.benefits_wrapper}>
          <div className={s.benefits_grid}>
            {benefitsData.map((item) => (
              <div
                key={item.id}
                className={`${s.benefits_card} ${sectionVisible ? s.visible : ''}`}
                style={{ borderColor: item.borderColor }}
              >
                <div className={s.benefits_number}>
                  <span className={s.benefits_number_line}></span>
                  <span>{item.number}</span>
                </div>
                <h2 className={s.benefits_card_title}>{item.title}</h2>
                <p className={s.benefits_card_text}>{item.text}</p>
              </div>
            ))}
          </div>
          <img
            src={images.work}
            alt="Our work process"
            className={`${s.benefits_img} ${sectionVisible ? s.slide_right : ''}`}
            width={320}
            height={410}
          />
        </div>
      </div>
    </section>
  )
}

export default Benefits