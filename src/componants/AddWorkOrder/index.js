import './Form.css'
import React from 'react';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function AddWorkOrder() {
    let defaultDescription = "Broken light fixture"
    let defaultProperty = "StoneBrook"
    const [errors , setErrors ] = useState();
    const [property, setProperty] = useState(defaultProperty);
    const[unit, setUnit] = useState();
    const [description , setDescription] = useState(defaultDescription);
    const [laborHours, setLaborHours] = useState();
    const [laborRate, setLaborRate] = useState();
    const [laborCost, setLaborCost] = useState();
    const [ materialCost, setMaterialCost] = useState();
    const [total, setTotal] = useState(0.00);
    const navigate = useNavigate();
    
    const loadWorkOrders = (() => {
        let value;
        try {
          value = JSON.parse(localStorage.getItem("workOrderStorage:"));
        } catch {
          value = undefined;
        }
        return value;
      });

      const [workOrders , setWorkOrders ] = useState(loadWorkOrders)


      //Increment work order number
      let lastWONum = workOrders[workOrders.length -1]?.Work_Order_Number
      lastWONum = lastWONum?.split('-')
      let increment = +lastWONum[1]
      increment = increment += 1;
      increment = `${lastWONum[0]}-${increment}`
      
      //   update all of the values before submitting
      const updateProperty = (e) => {
          setProperty(e.target.value)
      }

      const updateUnit = (e) => {
          setUnit(e.target.value)
      }

      const updateDescription = (e) => {
        setDescription(e.target.value)
      }

      const upDateMaterialCost = (e) => {
            setMaterialCost(e.target.value)
      }

      const upDateLaborHours = (e) => {
        setLaborHours(e.target.value)
      }

      const upDateLaborRate = (e) => {
        setLaborRate(e.target.value)
      }

      useEffect(()=> {
        if (laborHours && laborRate && materialCost) {
            let costOfLabor = +laborHours * +laborRate;
            setLaborCost(costOfLabor)
            let newTotal = costOfLabor + +materialCost;
            newTotal = newTotal.toFixed(2)
            setTotal(newTotal)
        }
      },[laborHours, laborRate, materialCost])


     

      let data = {
        Work_Order_Number: increment,
        Property: property,
        Unit: unit,
        Description: description,
        Labor_Hours: laborHours,
        Labor_cost: laborCost,
        Material_cost: materialCost,
        Total: total,
      }

      useEffect(() => {
        localStorage.setItem(`workOrderStorage:`, JSON.stringify(workOrders))
    }, [workOrders])
      
      const handleSubmit = (e) => {
          e.preventDefault()
          let newArray = [...workOrders]
          newArray.push(data)
          setWorkOrders(newArray)
          setTimeout(() => navigate('/'), 500)
      }
      

    return (
<>
    <Form className="form form-add xx" onSubmit={handleSubmit}>
        {errors?.map((error, ind) => (
                <div key={ind} style={{color: "red"}}><b>{error}</b></div>
                ))}
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridWorkOrderNumber">
        <Form.Label>Work Order Number</Form.Label>
        <Form.Control  placeholder="WO-1001" disabled
            name="Work_Order_Number"
            value={increment}
        />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridProperty">
        <Form.Label>Property Name</Form.Label>
        <Form.Control
        as="select"
        name="property"
        onChange={updateProperty}
        >
            <option>StoneBrook</option>
            <option>Pine Haven</option>
            <option>Skyview Downtown</option>
            <option>Clock Tower</option>
        </Form.Control>
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridUnit">
            <Form.Label>Unit Number</Form.Label>
            <Form.Control placeholder="Unit Number"
            name="unit"
            onChange={updateUnit}
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
            as="select"
            name="description"
            onChange={updateDescription}
         >
            <option>Broken light fixture</option>
            <option>Hole in wall</option>
            <option>Leaky sink</option>
            <option>Carpet Cleaning</option>
            <option>Stain Removal In carpet</option>
            <option>HVAC Service</option>
        </Form.Control>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridMaterialCost">
            <Form.Label>Material Cost</Form.Label>
            <Form.Control 
                name="materialCost"
                onChange={upDateMaterialCost}
             />
            <Form.Text>
                Must be in 25.99 format, no dollar sign
            </Form.Text>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridHours">
            <Form.Label>Labor Hours</Form.Label>
            <Form.Control placeholder="Hours" 
                name="laborHours"
                onChange={upDateLaborHours}
            />
            <Form.Text>
                Must be to the 1st decimal eg. 1.5 is an hour and a half
            </Form.Text>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridHourlyRate">
            <Form.Label>Hourly Rate</Form.Label>
            <Form.Control placeholder="Hourly Rate"
                name="laborRate"
                onChange={upDateLaborRate}
            />
            <Form.Text>
                Must be in 25.99 format, no dollar sign
            </Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTotalCost">
        <Form.Label>Total Cost</Form.Label>
        <Form.Control   disabled
            name="totalCost"
            value={total}
        />
        </Form.Group>
    </Row>


    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>

</>
)}