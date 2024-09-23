import React, {useState, useEffect} from 'react';
import { Layout } from '../layout/Layout';
import { ServiceSection } from '../components/Services/ServicesStyles';
import { SectionTitle, SectionText } from '../styles/GlobalComponents';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button, ErrorMessage, FormContainer, Label } from "../components/Contact/ContactStyles"
import { useSnackbar } from 'notistack';
const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        business: '',
        phone: '',
        message: ''
      });

    
      const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Handle input changes
     const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate all fields are filled
      if (!formState.name || !formState.email || !formState.business || !formState.phone || !formState.message) {
        enqueueSnackbar('Te rugăm să completezi toate câmpurile.', { variant: 'error' });
        return;
      }
  
      // Call sendEmail to handle the email sending
      sendEmail(e);
    };
  
    

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ajsoeh9',    // Replace with your EmailJS service ID
        'template_xn149rw',   // Replace with your EmailJS template ID
        e.target,
        '1BE8hRYJ0xOcjtExs'        // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          
          // setIsSubmitted(true);
          console.log('Email sent successfully:', result.text);
          console.log('Triggering success snackbar');
        enqueueSnackbar('Mesajul a fost trimis cu succes!', { variant: 'success' });
          setFormState({
            name: '',
            email: '',
            business: '',
            phone: '',
            message: ''
          });
        },
        (error) => {
          console.log('Email sending error:', error.text);
          enqueueSnackbar('A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.', { variant: 'error' });
        }
      );
  };


    return (
        <Layout>
        <ServiceSection>
        <br />
        <SectionTitle style={{marginTop: "30px"}}>
                    Contact
                </SectionTitle>
                <SectionText>
                Echipa noastră de experți este aici pentru a vă ajuta să transformați ideile și proiectele dvs. în realitate.
                </SectionText>
             {/* Contact Form */}
   
             <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChange}
          />

          <Label htmlFor="email">Email</Label>
          <Input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
          />

          <Label htmlFor="business">Business Name</Label>
          <Input 
            type="text"
            name="business"
            placeholder="Your Business Name"
            value={formState.business}
            onChange={handleChange}
          />

          <Label htmlFor="phone">Phone</Label>
          <Input 
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formState.phone}
            onChange={handleChange}
          />

          <Label htmlFor="message">Message</Label>
          <TextArea 
            name="message"
            placeholder="Your Message"
            value={formState.message}
            onChange={handleChange}
          />

          <Button type="submit">Send Message</Button>
        </Form>
      </FormContainer>
        </ServiceSection>
    </Layout>
    )
}

export default Contact;