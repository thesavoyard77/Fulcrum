import React, {Fragment} from "react";
import Button from 'react-bootstrap/Button';


export default function SubTable({workOrder, index}) {
   
    const handleMaterialDelete = (index) => {
        
    }

    return (

    <>
                <tr className="work_orders_table_sub">
                    <th className="table_sub_head">Material</th>
                    <th className="table_sub_head">Material Cost</th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head">Action</th>
                </tr>

            
                {workOrder?.Materials.map((material, index) => 
                <Fragment  key={index}>
                    <tr>
                        <td className="table_data_sub">{material}</td>
                        <td className="table_data_sub">{workOrder?.Material_Cost[index]}</td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub"></td>
                        <td className="table_data_sub">
                            <Button variant="info" size="sm" id="edit_button" onClick={(event) => console.log(event)}>Edit</Button>
                            <Button variant="danger" size="sm" id="delete_button" onClick={(event) => console.log(event)}>Delete</Button>
                        </td>
                    </tr>
                </Fragment>
                )}
                

                <tr>
                    <th className="table_sub_head">Contractor Type</th>
                    <th className="table_sub_head">Labor Hours</th>
                    <th className="table_sub_head">Labor Rate</th>
                    <th className="table_sub_head">Labor Cost</th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                    <th className="table_sub_head"></th>
                </tr>
                
                    {workOrder?.Labor_Type.map((labor, index) =>
                    <Fragment  key={index}>
                        <tr>
                            <td className="table_data_sub">{labor}</td>
                            <td className="table_data_sub">{workOrder?.Labor_Hours[index]}</td>
                            <td className="table_data_sub">{workOrder?.Labor_Cost[index]}</td>
                            <td className="table_data_sub">{workOrder?.Labor_Rate[index]}</td>
                            <td className="table_data_sub"></td>
                            <td className="table_data_sub"></td>
                            <td className="table_data_sub"></td>
                                                         
                            <td className="table_data_sub">
                                <Button variant="info" size="sm" id="edit_button" onClick={(event) => console.log(event)}>Edit</Button>
                                <Button variant="danger" size="sm" id="delete_button" onClick={(event) => console.log(event)}>Delete</Button>
                            </td>
                        </tr>
                    </Fragment> )}


                


    
    </>
    
)}