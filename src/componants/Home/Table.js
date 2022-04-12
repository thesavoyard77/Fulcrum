import React from "react";
import Button from 'react-bootstrap/Button';

export default function({workOrder, workOrders, setWorkOrders, index}) {

    const handleDelete = () => {
        let newArray = [...workOrders]
        newArray.splice(index, 1)
        setWorkOrders(newArray)
    }
   
    return (
        <tr  className="work-orders">
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
      
    )
}