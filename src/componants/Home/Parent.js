import './Home.css'
import { useEffect, useState, Fragment } from "react";
import Table from "./Table.js"
import Form from "./Form.js"


export default function Parent() {
    const [editWorkOrders, setEditWorkOrders] = useState(null)

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
    
    const handleEditClick = (e, index) => {
        e.preventDefault();
        setEditWorkOrders(index)
    }

    
        return(
    <>
        {workOrders ? 
            <>  
                <form>
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
                                <th className="table_head">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workOrders?.map((workOrder, index) => 
                                <Fragment key={index} >  
                                    { editWorkOrders === index ? <Form
                                     workOrder={workOrder}
                                      workOrders={workOrders}
                                       setWorkOrders={setWorkOrders}  />
                                    : <Table
                                     workOrder={workOrder}
                                     workOrders={workOrders}
                                     index={index}
                                     setWorkOrders={setWorkOrders}
                                     handleEditClick={handleEditClick}/>}
                                </Fragment>
                            )}
                        </tbody>
                    </table>
                </form>
            </>
                
           : <>
                <div id="no-work-orders">NO WORK ORDERS <br /> PLEASE CREATE ONE!</div>
           </> }
    </>
        )
}