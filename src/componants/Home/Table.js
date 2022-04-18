import React from "react";
import Button from 'react-bootstrap/Button';

export default function({workOrder, workOrders, setWorkOrders, index, handleEditClick}) {

    const handleDelete = () => {
        let newArray = [...workOrders]
        newArray.splice(index, 1)
        setWorkOrders(newArray)
    }

    
   
    return (
        <tr  className="work-orders">
            <td className="table_data_main">{workOrder?.Work_Order_Number}</td>
            <td className="table_data_main">{workOrder?.Property}</td>
            <td className="table_data_main">{workOrder?.Unit}</td>
            <td className="table_data_main">{workOrder?.Description}</td>
            <td className="table_data_main">{`$${workOrder?.Material_Total}`}</td>
            <td className="table_data_main">{`$${workOrder?.Labor_Total}`}</td>
            <td className="table_data_main">{`$${workOrder?.Total}`}</td>
            <td className="table_data_main">
                <Button variant="info" size="sm" id="edit_button" onClick={(event) => handleEditClick(event, index)}>Edit</Button>
                <Button variant="danger" size="sm" id="delete_button" onClick={() => handleDelete(index)}>Delete</Button>
            </td>

        </tr>
      
    )
}