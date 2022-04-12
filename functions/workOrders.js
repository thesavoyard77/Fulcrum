exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                "Work_Order_Number": "WO-1000",
                "Property": "StoneBrook",
                "Unit": "3",
                "Description": "Broken light fixture",
                "Labor_Hours": "0.5",
                "Labor_cost": "12.50",
                "Material_cost": "45.00",
                "Total": "57.50"
            },
            {
                "Work_Order_Number": "WO-1001",
                "Property": "StoneBrook",
                "Unit": "9",
                "Description": "Hole in wall",
                "Labor_Hours": "1.5",
                "Labor_cost": "42.50",
                "Material_cost": "57.75",
                "Total": "100.25"
            },
            {
                "Work_Order_Number": "WO-1003",
                "Property": "Pine Haven",
                "Unit": "A10",
                "Description": "Leaky sink",
                "Labor_Hours": "0.5",
                "Labor_cost": "30.00",
                "Material_cost": "20.85",
                "Total": "50.85"
            },
            {
                "Work_Order_Number": "WO-1004",
                "Property": "Skyview Downtown",
                "Unit": "12B",
                "Description": "Carpet Cleaning",
                "Labor_Hours": "2",
                "Labor_cost": "84.00",
                "Material_cost": "36.50",
                "Total": "120.50"
            },
            {
                "Work_Order_Number": "WO-1005",
                "Property": "Skyview Downtown",
                "Unit": "24C",
                "Description": "Stain Removal In carpet",
                "Labor_Hours": "0.5",
                "Labor_cost": "12.00",
                "Material_cost": "18.00",
                "Total": "30.00"
            },
            {
                "Work_Order_Number": "WO-1006",
                "Property": "Clock Tower",
                "Unit": "8",
                "Description": "HVAC Service",
                "Labor_Hours": "2",
                "Labor_cost": "108.00",
                "Material_cost": "88.00",
                "Total": "196.00"
            },
            {
                "Work_Order_Number": "WO-1007",
                "Property": "Pine Haven",
                "Unit": "1D",
                "Description": "Hole in wall",
                "Labor_Hours": "2",
                "Labor_cost": "113.30",
                "Material_cost": "57.75",
                "Total": "120.50"
            },
            {
                "Work_Order_Number": "WO-1008",
                "Property": "Skyview Downtown",
                "Unit": "24C",
                "Description": "Carpet Cleaning",
                "Labor_Hours": "2",
                "Labor_cost": "84.00",
                "Material_cost": "36.50",
                "Total": "120.50"
            },
            {
                "Work_Order_Number": "WO-1009",
                "Property": "Pine Haven",
                "Unit": "22F",
                "Description": "Hole in wall",
                "Labor_Hours": "1.5",
                "Labor_cost": "42.50",
                "Material_cost": "57.75",
                "Total": "100.25"
            },
            {
                "Work_Order_Number": "WO-1010",
                "Property": "StoneBrook",
                "Unit": "2",
                "Description": "Broken light fixture",
                "Labor_Hours": "0.5",
                "Labor_cost": "12.50",
                "Material_cost": "45.00",
                "Total": "57.50"
            },
            {
                "Work_Order_Number": "WO-1011",
                "Property": "Skyview Downtown",
                "Unit": "24A",
                "Description": "Stain Removal In carpet",
                "Labor_Hours": "0.5",
                "Labor_cost": "12.00",
                "Material_cost": "18.00",
                "Total": "30.00"
            },
            {
                "Work_Order_Number": "WO-1012",
                "Property": "Clock Tower",
                "Unit": "17",
                "Description": "Carpet Cleaning",
                "Labor_Hours": "2",
                "Labor_cost": "84.00",
                "Material_cost": "36.50",
                "Total": "120.50"
            }
        ])
    }
};