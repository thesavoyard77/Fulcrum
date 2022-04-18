import './Form.css'
import React from 'react';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function AddWorkOrder() {
    let defaultProperty = "StoneBrook"
    const [errors , setErrors ] = useState();

    //Property
    const [property, setProperty] = useState(defaultProperty);
    const[unit, setUnit] = useState("");

    //Description
    const [description , setDescription] = useState("");

    //Materials
    const [tempMaterial, setTempMaterial] = useState("");
    const [ materials, setMaterials] = useState([]);
    const [tempMaterialCost, setTempMaterialCost] = useState();
    const [ materialCost, setMaterialCost] = useState([]);
    const [ materialTotal, setMaterialTotal] = useState(0.00);

    //Labor
    const [tempLaborType, setTempLaborType] = useState("");
    const [laborType, setLaborType] = useState([]);
    const [tempLaborHours, setTempLaborHours] = useState("");
    const [laborHours, setLaborHours] = useState([]);
    const [tempLaborRate, setTempLaborRate] = useState("");
    const [laborRate, setLaborRate] = useState([]);
    const [laborCost, setLaborCost] = useState([]);
    const [laborTotal, setLaborTotal] = useState(0.00);

    //Total Cost
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
      let lastWONum;
      let increment;
      try {
        lastWONum = workOrders[workOrders.length -1]?.Work_Order_Number
        lastWONum = lastWONum?.split('-')
        increment = +lastWONum[1]
        increment = increment += 1;
        increment = `${lastWONum[0]}-${increment}`

      } catch {
        lastWONum = null;
        increment = null;
      }

      
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

      const upDateMaterial = (e) => {
        setTempMaterial(e.target.value)
    }

      const updateTempMaterialCost = (e) => {
            setTempMaterialCost(e.target.value)
      }

      const upDateLaborType = (e) => {
        setTempLaborType(e.target.value)
      }

      const upDateLaborHours = (e) => {
        setTempLaborHours(e.target.value)
      }

      const upDateLaborRate = (e) => {
        setTempLaborRate(e.target.value)
      }

    //   Set the new material items in the array

      const handleMaterialAdd = (e) => {
          e.preventDefault();
          let newMaterial = [...materials, tempMaterial]
          let newMaterialCost = [...materialCost, tempMaterialCost]
          setMaterials(newMaterial)
          setMaterialCost(newMaterialCost)
          setTempMaterial('')
          setTempMaterialCost('')
      }

      const handleLaborAdd = (e) => {
        e.preventDefault();
        let newLabor = [...laborType, tempLaborType]
        let newLaborHours = [...laborHours, tempLaborHours]
        let newLaborRate = [...laborRate, tempLaborRate]
        let tempLaborCost = (`${(+tempLaborHours * +tempLaborRate).toFixed(2)}`)
        let newLaborCost = [...laborCost, tempLaborCost]
        setLaborType(newLabor)
        setLaborHours(newLaborHours)
        setLaborRate(newLaborRate)
        setLaborCost(newLaborCost)
        setTempLaborType('')
        setTempLaborHours('')
        setTempLaborRate('')
    }

  
    //  Track totals for labor and materials and update the grand total
      useEffect(()=> {
        if (laborTotal && materialTotal) {
            let newTotal = +laborTotal + +materialTotal;
            newTotal = newTotal.toFixed(2)
            setTotal(newTotal)
        }
      },[laborTotal, materialTotal])

        // Calculate the sum of all material costs and set the total
      useEffect(() => {
          if (materialCost.length) {
            let newMaterialCost = materialCost?.reduce((prev, current) =>( +prev + +current).toFixed(2))
            setMaterialTotal(newMaterialCost)
          }
      }, [materialCost])

      // Calculate the sum of all contractor costs and set the total
      
      useEffect(() => {
        if (laborCost.length) {
          let newLaborTotal = laborCost?.reduce((prev, current) =>( +prev + +current).toFixed(2))
          setLaborTotal(newLaborTotal)
        }
    }, [laborCost])

      let data = {
        Work_Order_Number: increment,
        Property: property,
        Unit: unit,
        Description: description,
        Materials: materials,
        Material_Cost: materialCost,
        Material_Total: materialTotal,
        Labor_Type: laborType,
        Labor_Hours: laborHours,
        Labor_Rate: laborRate,
        Labor_Cost: laborCost,
        Labor_Total: laborTotal,
        Total: total,
      }

      useEffect(() => {
        localStorage.setItem(`workOrderStorage:`, JSON.stringify(workOrders))
    }, [workOrders])
      
      const handleSubmit = (e) => {
          e.preventDefault()
          let newArray = [...workOrders, data]
          setWorkOrders(newArray)
          setTimeout(() => navigate('/'), 500)
      }

      console.log(laborType, laborHours, laborRate, laborCost, laborTotal)
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

        <Form.Group as={Col} className="mb-3" controlId="formGridUnit">
            <Form.Label>Unit Number</Form.Label>
            <Form.Control placeholder="Unit Number"
            name="unit"
            onChange={updateUnit}
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
        <Form.Label>Maintenance Description</Form.Label>
        <Form.Control
            name="description"
            onChange={updateDescription}
         >
        </Form.Control>
        </Form.Group>

    </Row>

    <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridMaterial">
            <Form.Label>Material </Form.Label>
            <Form.Control placeholder="Material Name"
                value={tempMaterial}
                name="material"
                onChange={upDateMaterial}
            >
            </Form.Control>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridMaterialCost">
            <Form.Label>Material Cost</Form.Label>
            <Form.Control placeholder="Material Cost"
                name="materialCost"
                value={tempMaterialCost}
                onChange={updateTempMaterialCost}
             />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridMaterialtotal">
        <Form.Label>Total Material Cost</Form.Label>
        <Form.Control  placeholder="WO-1001" disabled
            name="Work_Order_Number"
            value={`$${materialTotal ?? ""}`}
        />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMaterialtotal" className="d-flex align-items-center justify-content-center col-sm-1">
                <Button variant="secondary" size="sm" className="add-material" onClick={(event) => handleMaterialAdd(event)}>Add</Button>
        </Form.Group>

        
        {materials?.map((material, ind) => (
                <div key={ind} ><b>{`${ind + 1}. Material: ${material}, Price: $${materialCost[ind]}`}</b></div>
                ))}
        
    </Row>

    <Row className="mb-3">

    <Form.Group as={Col} className="mb-3" controlId="formGridLaborType">
            <Form.Label>Labor Type</Form.Label>
            <Form.Control placeholder="Labor Type" 
                value={tempLaborType}
                name="laborType"
                onChange={upDateLaborType}
            />

        </Form.Group>
        
        <Form.Group as={Col} className="mb-3" controlId="formGridHours">
            <Form.Label>Labor Hours</Form.Label>
            <Form.Control placeholder="Hours" 
                value={tempLaborHours}
                name="laborHours"
                onChange={upDateLaborHours}
            />

        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridHourlyRate">
            <Form.Label>Hourly Rate</Form.Label>
            <Form.Control placeholder="Hourly Rate"
                name="laborRate"
                value={tempLaborRate}
                onChange={upDateLaborRate}
            />

        </Form.Group>
        <Form.Group as={Col} controlId="formGridLaborTotal">
        <Form.Label>Total Labor Cost</Form.Label>
        <Form.Control  placeholder="Total Labor Cost" disabled
            name="laborTotal"
            value={`$${laborTotal}`}
        />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMaterialtotal" className="d-flex align-items-center justify-content-center col-sm-1">
                <Button variant="secondary" size="sm" className="add-material" onClick={(event) => handleLaborAdd(event)}>Add</Button>
        </Form.Group>
        {laborType?.map((labor, ind) => (
            <div key={ind} ><b>{`${ind + 1}. Contractor: ${labor}, Hours: ${laborHours[ind]}, Hourly Rate: $${laborRate[ind]}, Contractor Cost: $${laborCost[ind]}`}</b></div>
         ))}

    </Row>

    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridTotalCost"className="d-flex align-items-center justify-content-center col-sm-3">
            <Form.Label className="d-flex align-items-center justify-content-center col-sm-3">Total Cost</Form.Label>
            <Form.Control   disabled
                name="totalCost"
                value={`\$${total}`}
            />
        </Form.Group>
    </Row>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    
</>
)}