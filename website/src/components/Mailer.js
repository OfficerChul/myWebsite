import "./Mailer.css";

const Mailer = () => {
  return (
    <div>
      <h1 className="contact-form">Contact Form</h1>
      <div className="mail-wrapper">
        <form className="form-wrapper">
          <div className="name-email-wrapper">
            <label className="name-label">Name:</label>
            <input classname="name-text" type="text" name="name" />

            <label className="email-label">Email:</label>
            <input
              classname="email-text"
              type="email"
              name="user_email"
              size=""
            />
          </div>

          <label className="form-label">Message</label>
          <textarea classname="mail-body" name="message" rows="10" />
          <input classname="message-text" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Mailer;
