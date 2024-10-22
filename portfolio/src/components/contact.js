import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const formInitialDetails = { firstName: "", lastName: "", email: "", phone: "", message: "" };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");

    try {
      // Send the form data without a CAPTCHA token
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails), // No token needed
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);
      } else {
        setStatus({ success: false, message: "Something went wrong, try again." });
      }
    } catch (error) {
      setStatus({ success: false, message: "An error occurred, try again later." });
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={6}>
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                </Col>
                <Col xs={12} sm={6}>
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                </Col>
                <Col xs={12} sm={6}>
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                </Col>
                <Col xs={12} sm={6}>
                  <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)} />
                </Col>
                <Col xs={12}>
                  <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                </Col>
                <Col xs={12}>
                  <button type="submit" disabled={buttonText === "Sending..."}>
                    {buttonText}
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success ? "success" : "danger"}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
