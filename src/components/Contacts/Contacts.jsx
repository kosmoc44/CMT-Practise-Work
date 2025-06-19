import s from './contacts.module.scss';

const Contacts = () => {
    return (
        <section className={s.contacts}>
            <div className={`${s.container} ${s.contacts_wrapper}`}>
                <div className={s.contacts_text}>
                    <div className={s.contacts_text_info}>
                        <h1 className={s.contacts_text_title}>
                            Would you like to discuss the project?
                        </h1>
                        <p className={s.contacts_text_description}>
                            Leave a request or contact us in a convenient way. We will answer all your questions.
                        </p>
                    </div>
                    <div className={s.contacts_text_info}>
                        <a href="tel:+1111111111">+38 (099) 123-45-67</a>
                        <a href="mailto:WlF0o@example.com">WlF0o@example.com</a>
                    </div>
                </div>
                <form className={s.contacts_form}>
                    <h2 className={s.contacts_form_title}>
                        Leave a request
                    </h2>
                    <div className={s.contacts_form_name}>
                        <label className={s.contacts_form_label}>
                            <span className={s.contacts_form_label_text}>NAME*</span>
                            <input type="text" className={s.contacts_form_input} placeholder="Name" required />
                        </label>
                    </div>
                    <div className={s.contacts_form_details}>
                        <label className={s.contacts_form_label}>
                            <span className={s.contacts_form_label_text}>PHONE*</span>
                            <input type="number" className={s.contacts_form_input} placeholder="Phone" required />
                        </label>
                        <label className={s.contacts_form_label}>
                            <span className={s.contacts_form_label_text}>EMAIL</span>
                            <input type="email" className={s.contacts_form_input} placeholder="Email" />
                        </label>

                    </div>
                    <div className={s.contacts_form_message}>
                        <label>
                            <span className={s.contacts_form_label_text}>COMPANY NAME*</span>
                            <input type="number" className={s.contacts_form_input} placeholder="Company name" />
                        </label>
                    </div>
                    <div className={s.contacts_form_confirmation}>
                        <div className={s.contacts_form_confirmation_container}>
                            <div>
                                <input type="checkbox" className={s.contacts_form_checkbox} />
                                <p>
                                    I accept the terms of the <span>PRIVACY POLICY</span> and consent to the processing of personal data
                                </p>
                            </div>
                            <div>
                                <input type="checkbox" className={s.contacts_form_checkbox} />
                                <p>
                                    You agree to receive automated Trasactional messages. Terms and Privacy Policy can be found below or at smrtagency.net/privacypolicy. You may receive up to 5 messages/mo. Text and data rates may apply. Reply STOP/Opt-out to end or HELP for help.
                                </p>
                            </div>
                        </div>
                        <button className={s.contacts_form_confirmation_btn} type="submit">
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contacts