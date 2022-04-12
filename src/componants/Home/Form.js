import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

export default function Form({workOrder, workOrders, setWorkOrders, index}) {

    const [errors , setErrors ] = useState();
    const [property, setProperty] = useState(workOrder?.Property);
    const[unit, setUnit] = useState();
    const [description , setDescription] = useState(workOrder?.Description);
    const [laborHours, setLaborHours] = useState();
    const [laborRate, setLaborRate] = useState();
    const [laborCost, setLaborCost] = useState();
    const [ materialCost, setMaterialCost] = useState();
    const [total, setTotal] = useState(0.00);

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
        Work_Order_Number: workOrder?.Work_Order_Number,
        Property: property,
        Unit: unit,
        Description: description,
        Labor_Hours: laborHours,
        Labor_cost: laborCost,
        Material_cost: materialCost,
        Total: total,
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        let newArray = [...workOrders, data]
        setWorkOrders(newArray)
    }

    return (
        <tr>
            <td className="form_data">{workOrder?.Work_Order_Number}</td>
            <td className="form_data">
                <select
                    onChange={updateProperty}
                >
                    <option>StoneBrook</option>
                    <option>Pine Haven</option>
                    <option>Skyview Downtown</option>
                    <option>Clock Tower</option>
                </select>
            </td>
            <td className="form_data">
                <input
                    type="text"
                    required="required"
                    placeholder="Enter new unit number"
                    name="unit"
                    onChange={updateUnit}
                ></input>
            </td>
            <td className="form_data">
                <select
                    onChange={updateDescription}
                >
                    <option>Broken light fixture</option>
                    <option>Hole in wall</option>
                    <option>Leaky sink</option>
                    <option>Carpet Cleaning</option>
                    <option>Stain Removal In carpet</option>
                    <option>HVAC Service</option>
                </select>
            </td>
            <td className="form_data">
                <input
                    type="text"
                    required="required"
                    placeholder="Enter new labor hours"
                    name="laborHours"
                    onChange={upDateLaborHours}
                ></input>
            </td>
            <td className="form_data">
                <input
                    type="text"
                    required="required"
                    placeholder="Enter hourly rate"
                    name="laborRate"
                    onChange={upDateLaborRate}
                ></input>
            </td>
            <td className="form_data">
                <input
                    type="text"
                    required="required"
                    placeholder="Enter new material cost"
                    name="materialCost"
                    onChange={upDateMaterialCost}
                ></input>
            </td>
            <td className="form_data">
                {`\$${workOrder?.Total}`}
            </td>
            <td className="table_data">
                <Button variant="info" size="sm" id="edit_button">Edit</Button>
                <Button variant="danger" size="sm" id="delete_button" onClick={() => console.log("cancel")}>Cancel</Button>
            </td>
     
               
     
        </tr>
    )
}