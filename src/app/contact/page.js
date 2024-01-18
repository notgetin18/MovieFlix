import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Contact Us Page</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            we'd love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.073676007384!2d77.27591422608137!3d28.627553884305744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35319b6a7ff%3A0x127dca80423ad527!2sLaxmi%20Nagar%2C%20Block%20S1%2C%20Nanakpura%2C%20Shakarpur%2C%20New%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1684927577193!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </div>
  );
};

export default Contact;
