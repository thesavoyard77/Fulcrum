import React from "react"
import Table from "./Table"
import { Nav } from 'react-bootstrap'

export default function Home() {


    return(
        <div className="home-outer-wrapper">
         <h1>Work Order Estimates</h1> <Nav.Link href="/create">Add Work Order</Nav.Link>
         <Table  />
        </div>
)};