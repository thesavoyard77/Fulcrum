import React, { Fragment, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';


export default function SubTable({ workOrder, workOrders, setWorkOrders, index }) {

    const [laborForm, setLaborForm] = useState(false);
    const [materialForm, setMaterialForm] = useState(false);
    const [laborName, setLaborName] = useState();
    const [laborHours, setLaborHours] = useState();
    const [laborRate, setLaborRate] = useState();
    const [laborCost, setLaborCost] = useState();
    const [materialName, setMaterialName] = useState();
    const [materialCost, setMaterialCost] = useState();   

// Delete a row in the material section
    const handleMaterialDelete = (materialIndex) => {
        if (workOrders[index].Materials.length <= 1) alert("There must be at least one material, please make another before deleting")

        if (workOrders[index].Materials.length > 1) {
            let workOrderArray = [...workOrders]
            let oneWorkOrder = workOrders[index]
            oneWorkOrder.Materials.splice(materialIndex, 1)
            oneWorkOrder.Material_Cost.splice(materialIndex, 1)
            let newMaterialTotal = oneWorkOrder.Material_Cost.reduce((prev, current) => (+prev + +current).toFixed(2))
            oneWorkOrder.Material_Total = `${newMaterialTotal}`
            let newtotal = (+oneWorkOrder.Material_Total + +oneWorkOrder.Labor_Total).toFixed(2)
            oneWorkOrder.Total = `${newtotal}`
            workOrderArray[index] = oneWorkOrder;
            setWorkOrders(workOrderArray)
        }

    }

// Delete a row in the labor section
    const handleLaborDelete = (laborIndex) => {
        if (workOrders[index].Labor_Type.length <= 1) alert("There must be at least one contractor, please make another before deleting")

        if (workOrders[index].Labor_Type.length > 1) {
            let workOrderArray = [...workOrders]
            let oneWorkOrder = workOrders[index]
            oneWorkOrder.Labor_Type.splice(laborIndex, 1)
            oneWorkOrder.Labor_Hours.splice(laborIndex, 1)
            oneWorkOrder.Labor_Rate.splice(laborIndex, 1)
            oneWorkOrder.Labor_Cost.splice(laborIndex, 1)
            let newLaborTotal = oneWorkOrder.Labor_Cost.reduce((prev, current) => (+prev + +current).toFixed(2))
            oneWorkOrder.Labor_Total = `${newLaborTotal}`
            let newtotal = (+oneWorkOrder.Material_Total + +oneWorkOrder.Labor_Total).toFixed(2)
            oneWorkOrder.Total = `${newtotal}`
            workOrderArray[index] = oneWorkOrder;
            setWorkOrders(workOrderArray)
        }
    }

    // Calculate labor cost

    useEffect(() => {

        if (laborHours && laborRate) {
            let cost = (+laborHours * +laborRate).toFixed(2);
            setLaborCost(cost)
        }

    },[laborHours, laborRate])

    //Action button handlers for new labor and material rows

    const handleMaterialClick = (e) => {
        if(laborForm) setLaborForm(false);
        setMaterialForm(true)
    }
    const handleMaterialCancelClick = (e) => {
        setMaterialForm(false)
    }
    const handleLaborClick = (e) => {
        if(materialForm) setMaterialForm(false);
        setLaborForm(true)
    }
    const handleLaborCancelClick = (e) => {
        setLaborForm(false)
    }

    // onChange handlers for form input fields
    const handleLaborNameChange = (e) => {
        setLaborName(e.target.value)
    }

    const handleLaborHoursChange = (e) => {
        setLaborHours(e.target.value)
    }
    const handleLaborRateChange = (e) => {
        setLaborRate(e.target.value)
    }
    const handleLaborCostChange = (e) => {
        setLaborCost(e.target.value)
    }

    const mandleMaterialNameChange = (e) => {
        setMaterialName(e.target.value)
    }
    const handleMaterialCostChange = (e) => {
        setMaterialCost(e.target.value)
    }

    // Faux sumbits to add line items

    const handleMaterialSubmit = () => {
        
            let workOrderArray = [...workOrders]
            let oneWorkOrder = workOrders[index]
            oneWorkOrder.Materials.push(materialName)
            oneWorkOrder.Material_Cost.push(materialCost)
            let newMaterialTotal = oneWorkOrder.Material_Cost.reduce((prev, current) => (+prev + +current).toFixed(2))
            oneWorkOrder.Material_Total = `${newMaterialTotal}`
            let newtotal = (+oneWorkOrder.Material_Total + +oneWorkOrder.Labor_Total).toFixed(2)
            oneWorkOrder.Total = `${newtotal}`
            workOrderArray[index] = oneWorkOrder;
            setWorkOrders(workOrderArray)
            setMaterialForm(false)
    }

    const handleLaborSubmit = (laborIndex) => {
       
            let workOrderArray = [...workOrders]
            let oneWorkOrder = workOrders[index]
            oneWorkOrder.Labor_Type.push(laborName)
            oneWorkOrder.Labor_Hours.push(laborHours)
            oneWorkOrder.Labor_Rate.push(laborRate)
            oneWorkOrder.Labor_Cost.push(laborCost)
            let newLaborTotal = oneWorkOrder.Labor_Cost.reduce((prev, current) => (+prev + +current).toFixed(2))
            oneWorkOrder.Labor_Total = `${newLaborTotal}`
            let newtotal = (+oneWorkOrder.Material_Total + +oneWorkOrder.Labor_Total).toFixed(2)
            oneWorkOrder.Total = `${newtotal}`
            workOrderArray[index] = oneWorkOrder;
            setWorkOrders(workOrderArray)
            setLaborForm(false)
    }

    const getLaborCost = () => {
        if (laborRate && laborCost) {
            return +laborRate * +laborCost
        } else {
            return 0.00;
        }
    }

   
    return (

    <>        
                    <tr>
                        <th className="table_sub_head">Contractor Type</th>
                        <th className="table_sub_head">Labor Hours</th>
                        <th className="table_sub_head">Labor Rate</th>
                        <th className="table_sub_head">Labor Cost</th>
                        <th className="table_sub_head"></th>
                        <th className="table_sub_head"></th>
                        <th className="table_sub_head"></th>
                        <th className="table_sub_head"><Button variant="info" size="sm" id="edit_button" onClick={(event) => handleLaborClick(event)}>Add</Button></th>
                    </tr>
            
                {workOrder?.Labor_Type.map((labor, laborIndex) =>
                <Fragment  key={laborIndex}>
                    <tr>
                        <td className="table_data_sub">{labor}</td>
                        <td className="table_data_sub">{workOrder?.Labor_Hours[laborIndex]}</td>
                        <td className="table_data_sub">{workOrder?.Labor_Rate[laborIndex]}</td>
                        <td className="table_data_sub">{workOrder?.Labor_Cost[laborIndex]}</td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>                  
                        <td className="table_data_sub">
                            <Button variant="danger" size="sm" id="delete_button" onClick={(event) => handleLaborDelete(laborIndex)}>X</Button>
                        </td>
                    </tr>
                </Fragment> )}

                {laborForm ? 
                <>
                    <tr>
                        <td className="table_data_sub">
                            <input type="text"
                             required="required"
                             placeholder="Enter a conractor type"
                             name="Labor_Type"
                             onChange={handleLaborNameChange} 
                            ></input>
                        </td>
                        <td className="table_data_sub">
                            <input type="text"
                             required="required"
                             placeholder="Enter labor hours estimate"
                             name="Labor_Hours" 
                             onChange={handleLaborHoursChange} 
                            ></input>
                        </td>
                        <td className="table_data_sub">
                            <input type="text"
                             required="required"
                             placeholder="Enter hourly rate"
                             name="Labor_Rate" 
                             onChange={handleLaborRateChange} 
                            ></input>
                        </td>
                        <td className="table_data_sub">
                            <input type="text"
                             required="required"
                             value={laborCost || 0.00}
                             name="Labor_Cost" 
                             disabled
                            ></input>
                        </td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"><Button variant="info" size="sm" id="submit_button" onClick={(event) => handleLaborSubmit()}>Submit</Button></td>
                        <td className="table_data_sub"><Button variant="danger" size="sm" id="cancel_button" onClick={(event) => handleLaborCancelClick(event)}>Cancel</Button> </td>
                    </tr>
                </>
               :null }

                <tr className="work_orders_table_sub">
                    <th className="table_sub_head">Material</th>
                    <th className="table_sub_head">Material Cost</th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"><Button variant="info" size="sm" id="edit_button" onClick={(event) => handleMaterialClick(event)}>Add</Button></th>
                </tr>

            
                {workOrder?.Materials.map((material, materialIndex) => 
                <Fragment  key={materialIndex}>
                    <tr>
                        <td className="table_data_sub">{material}</td>
                        <td className="table_data_sub">{workOrder?.Material_Cost[materialIndex]}</td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub">
                            <Button variant="danger" size="sm" id="delete_button" onClick={(event) => handleMaterialDelete(materialIndex)}>X</Button>
                        </td>
                    </tr>
                </Fragment>
                )}

                {materialForm ? 
                    <>
                        <tr>
                            <td className="table_data_sub">
                                <input type="text"
                                required="required"
                                placeholder="Enter a material name"
                                name="Material" 
                                onChange={mandleMaterialNameChange} 
                                ></input>
                            </td>
                            <td className="table_data_sub">
                                <input type="text"
                                required="required"
                                placeholder="Enter material price"
                                onChange={handleMaterialCostChange} 
                                name="Material_Cost" 
                                ></input>
                            </td>
                            <td className="table_data_sub">
                               
                            </td>
                            <td className="table_data_sub"></td>
                            <td className="table_data_sub"></td>
                            <td className="table_data_sub"></td>
                            <td className="table_data_sub"><Button variant="info" size="sm" id="submit_button" onClick={(event) => handleMaterialSubmit()}>Submit</Button></td>
                            <td className="table_data_sub"> <Button variant="danger" size="sm" id="cancel_button" onClick={(event) => handleMaterialCancelClick(event)}>Cancel</Button></td>
                        </tr>
                    </>
               :null }  
                

    </>
    
)}