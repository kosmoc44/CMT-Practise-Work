import s from "./testimonials.module.scss";
import { testimonialsData } from "../../data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useSlider from "../../hooks/useSlider";

const Testimonials = () => {
    const {
        currentItem,
        currentIndex,
        nextSlide,
        prevSlide,
        goToSlide,
        pause,
        resume
    } = useSlider(testimonialsData, 4000);

    return (
        <section
            className={s.slider}
            onMouseEnter={pause}
            onMouseLeave={resume}
        >
            <div className={`${s.container} ${s.slider_wrapper}`}>
                <div className={s.slider_block}>
                    <div className={s.slider_cardImg}>
                        <img
                            src={currentItem.images}
                            alt={`${currentItem.company} review`}
                            width={100}
                            height={100}
                            loading="lazy"
                        />
                        <h1 className={s.slider_title}>
                            {currentItem.company}
                        </h1>
                        <h2 className={s.slider_subtitle}>
                            {currentItem.position}
                        </h2>
                    </div>
                    <div className={s.slider_dotsContainer}>
                        {testimonialsData.map((_, index) => (
                            <span
                                key={index}
                                className={`${s.slider_dots} ${index === currentIndex ? s.slider_dots_active : ''
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <div className={s.slider_card}>
                    <button
                        className={s.slider_arrowLeft}
                        onClick={prevSlide}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={25} />
                    </button>
                    <button
                        className={s.slider_arrowRight}
                        onClick={nextSlide}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={25} />
                    </button>

                    <h3 className={s.slider_card_title}>
                        our clients love us
                    </h3>
                    <div className={s.slider_card_text}>
                        <p className={s.slider_card_review}>
                            {currentItem.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonials;