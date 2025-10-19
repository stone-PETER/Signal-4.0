import "./ContactUs.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby6RK3_8ZcvhuE08bJlGZYFlGUc4iRtMiT-J-qzfI7zPAASEJAFY9RCnyibp5efHP6Y/exec";

    document.getElementById("load").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "none";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        form.style.display = "none";
        document.getElementById("success").style.display = "block";
        document.getElementById("load").style.display = "none";
      })
      .catch((error) => {
        console.error("Error!", error.message);
        document.getElementById("load").style.display = "none";
        document.getElementById("error").style.display = "block";
      });
  };

  return (
    <section id="contact" className="contact">
  <div className="contact-container">
    <div className="row">
      <div className="col-md-7" style={{ width: "100%" }}>
        <h1 className="section-heading" >Contact Us</h1>
        <form id="contact-form" className="main_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <input className="contactus" placeholder="Name" type="text" name="name" />
            </div>
            <div className="col-md-12">
              <input className="contactus" placeholder="Phone Number" type="text" name="phoneNumber" />
            </div>
            <div className="col-md-12">
              <input className="contactus" placeholder="Email" type="email" name="email" />
            </div>
            <div className="col-md-12">
              <textarea className="textarea" placeholder="Message" name="message"></textarea>
            </div>
            <div className="col-md-12">
              <button className="send_btn" type="submit">Send Now</button>
            </div>
          </div>
        </form>
        <div id="load" style={{ display: "none" }}>Loading...</div>
        <div id="success" style={{ display: "none" }}>Success! Your message has been sent.</div>
        <div id="error" style={{ display: "none" }}>Error! Something went wrong.</div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
