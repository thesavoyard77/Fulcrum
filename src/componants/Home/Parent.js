import './Home.css'
import { useEffect, useState, Fragment } from "react";
import Table from "./Table.js"
import SubTable from "./SubTable.js"

export default function Parent() {
    const [moreWorkOrderIndex, setMoreWorkOrderIndex] = useState(null)


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
    
    const handleMoreClick = (e, index) => {
        e.preventDefault();
        setMoreWorkOrderIndex(index)
        if (moreWorkOrderIndex === index) {
            setMoreWorkOrderIndex(null)
        }

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
                                <th className="table_head">Total Material Cost</th>
                                <th className="table_head">Total Labor Cost</th>
                                <th className="table_head">Total</th>
                                <th className="table_head">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workOrders?.map((workOrder, index) => 
                                <Fragment key={index} >  
                                    { moreWorkOrderIndex === index ? 
                                        <>
                                        <Table
                                        workOrder={workOrder}
                                        workOrders={workOrders}
                                        index={index}
                                        setWorkOrders={setWorkOrders}
                                        handleMoreClick={handleMoreClick}/>
                                        <SubTable workOrder={workOrder}
                                         workOrders={workOrders}
                                         setWorkOrders={setWorkOrders}
                                         index={index} 
                                        />
                                        </>
                                    : <Table
                                     workOrder={workOrder}
                                     workOrders={workOrders}
                                     index={index}
                                     setWorkOrders={setWorkOrders}
                                     handleMoreClick={handleMoreClick}/>}
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