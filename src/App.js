import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as emailJs from 'emailjs-com';

import Swal from 'sweetalert2';

const SERVICE_ID = 'service_l2r9jrq';

const USER_ID = 'k7-pWCyv2bteXpGha';

const TEMPLATE_ID = 'template_oqaueae';

function App() {
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    let template = {
      email,
      message,
      country: 'India',
    };

    emailJs
      .send(SERVICE_ID, TEMPLATE_ID, template, USER_ID)
      .then((res) => {
        Swal.fire('Email Send SuccessFully', 'Message Send', 'success');

        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        Swal.fire('Email Send Failed', 'Message Failed', 'error');
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      }}
    >
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default App;
