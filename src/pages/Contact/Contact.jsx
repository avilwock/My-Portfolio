
import styles from "./Contact.module.css";

export default function ContactPage() {
    return (
        <div>
            <h2 className={styles.contactTitle}>Contact Me</h2>

            <form
                name="contact"
                method="POST"
                action="/contact/?success=true"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className={styles.myForm}
            >
                <input
                    type="hidden"
                    name="form-name"
                    value="contact"
                />

                <p hidden>
                    <label>
                        Don't fill this out:
                        <input name="bot-field" />
                    </label>
                </p>

                <input
                    className={styles.name}
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />

                <input
                    className={styles.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />

                <textarea
                    className={styles.message}
                    name="message"
                    placeholder="Please type your message"
                    required
                />

                <button className={styles.button} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
