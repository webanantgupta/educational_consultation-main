import { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
    Container,
    Row,
    Col
} from 'reactstrap';
const ConsultingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            console.log('Submitted Data:', formData);
            // You can perform API call or reset here
        } else {
            e.target.classList.add('was-validated');
        }

    };
    return (
        <>
            <div className="inner-column">
                <h3>Book an Consultation</h3>
                <div className="appointment-form">
                    <Form onSubmit={handleSubmit} noValidate>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <FormGroup>
                                    <Input type="text" name="name" placeholder="Name*" value={formData.name}
                                        onChange={handleChange} required />
                                    <FormFeedback>Name is required</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg="12" md="12" sm="12">
                                <FormGroup>
                                    <Input type="text" name="mobile" placeholder="Mobile No.*" value={formData.mobile}
                                        onChange={handleChange} required />
                                    <FormFeedback>Mobile No. is required</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg="12" md="12" sm="12">
                                <FormGroup>
                                    <Input type="email" name="email" placeholder="Email Id*" value={formData.email}
                                        onChange={handleChange} required />
                                    <FormFeedback>Email is required</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg="12" md="12" sm="12">
                                <FormGroup>
                                    <Input type="textarea" name="message" placeholder="Message" value={formData.message}
                                        onChange={handleChange} required />
                                    <FormFeedback>Message is required</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg="12" md="12" sm="12" className="text-center mt-4">
                                <div className="btns-box wow fadeInUp">
                                    <Button type="submit" className="theme-btn btn-style-one">
                                        <span className="txt">Submit</span>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ConsultingForm
