import React from 'react';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { csv } from 'd3';
import { Col, Row, Form } from "react-bootstrap";
const data = require('../public/workOrders.csv');

export default function AddWorkOrder() {

    const [workOrders , setWorkOrders ] = useState();

   
    useEffect(() => {
        if (!workOrders) {
            csv(data).then(setWorkOrders)
        }
    }, [])

    return (
<>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridWorkOrderNumber">
        <Form.Label>Work Order Number</Form.Label>
        <Form.Control  placeholder="WO-1001" disabled/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridProperty">
        <Form.Label>Property Name</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>StoneBrook</option>
            <option>Pine Haven</option>
            <option>Skyview Downtown</option>
            <option>Clock Tower</option>
        </Form.Select>
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridUnit">
            <Form.Label>Unit Number</Form.Label>
            <Form.Control placeholder="Unit Number" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>Broken light fixture</option>
            <option>Hole in wall</option>
            <option>Leaky sink</option>
            <option>Carpet Cleaning</option>
            <option>Stain Removal In carpet</option>
            <option>HVAC Service</option>
        </Form.Select>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
        </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
        </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>

</>
)}