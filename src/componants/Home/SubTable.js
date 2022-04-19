import React, { Fragment, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';


export default function SubTable({ workOrder, workOrders, setWorkOrders, index }) {

// Delete a row in the material section
    const handleMaterialDelete = (materialIndex) => {

        if (workOrders[index].Materials.length > 1) {
            let workOrderArray = [...workOrders]
            let oneWorkOrder = workOrders[index]
            oneWorkOrder.Materials.splice(materialIndex, 1)
            oneWorkOrder.Material_Cost.splice(materialIndex, 1)
            let newMaterialTotal = oneWorkOrder.Material_Cost.reduce((prev, current) => (+prev + +current).toFixed(2))
            oneWorkOrder.Material_Total = `${newMaterialTotal}`
            workOrderArray[index] = oneWorkOrder;
            setWorkOrders(workOrderArray)
        }

    }

// Delete a row in the labor section
    const handleLaborDelete = (laborIndex) => {
        if (workOrders[index].Labor_Type.length > 1) {
            let workOrderArray = [...workOrders]
            let oneWorkOrder = workOrders[index]
            oneWorkOrder.Labor_Type.splice(laborIndex, 1)
            oneWorkOrder.Labor_Hours.splice(laborIndex, 1)
            oneWorkOrder.Labor_Rate.splice(laborIndex, 1)
            oneWorkOrder.Labor_Cost.splice(laborIndex, 1)
            let newLaborTotal = oneWorkOrder.Labor_Cost.reduce((prev, current) => (+prev + +current).toFixed(2))
            oneWorkOrder.Labor_Total = `${newLaborTotal}`
            workOrderArray[index] = oneWorkOrder;
            setWorkOrders(workOrderArray)
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
                        <th className="table_sub_head"><Button variant="info" size="sm" id="edit_button" onClick={(event) => console.log(event)}>Add</Button></th>
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
                            <Button variant="danger" size="sm" id="delete_button" onClick={(event) => handleLaborDelete(laborIndex)}>Delete</Button>
                        </td>
                    </tr>
                </Fragment> )}

                <tr className="work_orders_table_sub">
                    <th className="table_sub_head">Material</th>
                    <th className="table_sub_head">Material Cost</th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"><Button variant="info" size="sm" id="edit_button" onClick={(event) => console.log(event)}>Add</Button></th>
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
                            
                            <Button variant="danger" size="sm" id="delete_button" onClick={(event) => handleMaterialDelete(materialIndex)}>Delete</Button>
                        </td>
                    </tr>
                </Fragment>
                )}
                

    </>
    
)}