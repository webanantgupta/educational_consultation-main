import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  FormFeedback,
} from "reactstrap";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } else {
      e.target.classList.add('was-validated')
    }

  };

  return (
    <>
      <section className="contact-form-section">
        <Container className="auto-container">
          <div className="sec-title centered">
            <div className="icon education_icon">
              <img src="/images/icon/education.png" alt="" />
            </div>
            <h2>
              <span>Contact</span> us now
            </h2>
            <div className="text">
              Beyond more stoic this along goodness this this wow ipsum sed mante
              far impressive <br /> manifest farcrud opened inside.
            </div>
          </div>

          <div className="inner-container">
            <div className="contact-form">
              <Form onSubmit={handleSubmit} noValidate>
                <Row className="clearfix">
                  <Col lg="6" md="6" sm="12" className="form-group">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      required
                    />
                    <FormFeedback>Name is required</FormFeedback>
                  </Col>
                  <Col lg="6" md="6" sm="12" className="form-group">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email *"
                      required
                    />
                    <FormFeedback>Email is required</FormFeedback>
                  </Col>
                  <Col lg="6" md="6" sm="12" className="form-group">
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject *"
                      required
                    />
                    <FormFeedback>Subject is required</FormFeedback>
                  </Col>
                  <Col lg="6" md="6" sm="12" className="form-group">
                    <Input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Mobile No. *"
                      required
                    />
                    <FormFeedback>Mobile No. is required</FormFeedback>
                  </Col>
                  <Col lg="12" md="12" sm="12" className="form-group">
                    <Input
                      type="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message *"
                      required
                    />
                    <FormFeedback>Message is required</FormFeedback>
                  </Col>
                  <Col
                    lg="12"
                    md="12"
                    sm="12"
                    className="form-group text-center"
                  >
                    <Button type="submit" className="theme-btn btn-style-two">
                      <span className="txt">Contact us</span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ContactForm
