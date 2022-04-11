import './Home.css'
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { csv } from 'd3';
import Button from 'react-bootstrap/Button';



export default function Table() {

    const [workOrders , setWorkOrders ] = useState(() => {
        let value;
        try {
          value = JSON.parse(localStorage.getItem(`workOrderStorage:`))
        } catch {
            value = undefined;
        }
        return value;
      });

      useEffect(() => {
        localStorage.setItem(`workOrderStorage:`, JSON.stringify(workOrders))
    }, [workOrders])
    
    
    const handleDelete = (index) => {
        let newArray = [...workOrders]
        newArray.splice(index, 1)
        setWorkOrders(newArray)
    }
    
   console.log(workOrders, "home")
        return(
    <>
        {workOrders ? 
            <>  
                <table className="table table-striped ii">
                    <thead>
                        <tr className="work_orders_table_rows">
                            <th className="table_head xx">Work Order Number</th>
                            <th className="table_head">Property</th>
                            <th className="table_head">Unit</th>
                            <th className="table_head" id="description">Description</th>
                            <th className="table_head">Labor Hours</th>
                            <th className="table_head">Labor Cost</th>
                            <th className="table_head">Material Cost</th>
                            <th className="table_head">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workOrders?.map((workOrder, index) => 
                            <tr key={index} className="work-orders">
                                <td className="table_data">{workOrder?.Work_Order_Number}</td>
                                <td className="table_data">{workOrder?.Property}</td>
                                <td className="table_data">{workOrder?.Unit}</td>
                                <td className="table_data">{workOrder?.Description}</td>
                                <td className="table_data">{workOrder?.Labor_Hours}</td>
                                <td className="table_data">{`\$${workOrder?.Labor_cost}`}</td>
                                <td className="table_data">{`\$${workOrder?.Material_cost}`}</td>
                                <td className="table_data">{`\$${workOrder?.Total}`}</td>
                                <td className="table_data">
                                    <Button variant="info" size="sm" id="edit_button">Edit</Button>
                                </td>
                                <td className="table_data">
                                    <Button variant="danger" size="sm" id="delete_button" onClick={() => handleDelete(index)}>Delete</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
                
           : <>
                <div id="no-work-orders">NO WORK ORDERS <br /> PLEASE CREATE ONE!</div>
           </> }
    </>
        )
}