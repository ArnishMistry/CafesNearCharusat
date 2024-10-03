import bgImage from "../../images/2.jpg"; // Adjust the path according to your project structure

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        id="contact-box"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h2
          className="h-primary center"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Contact Us
        </h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter Your Phone Number"
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message: </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter your message"
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></textarea>
          </div>
          <button
            className="btn"
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff6b6b",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
