import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://designartproject.ru/send.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert('Отзыв отправлен!');
        } else {
            alert('Ошибка при отправке отзыва.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Row className="mb-3">

                <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter email" />
                </Form.Group>

            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Order</Form.Label>
                <Form.Control type="textarea" name="comment" value={formData.comment} onChange={handleChange} required placeholder="Order" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
        
    );
};

export default OrderForm;
