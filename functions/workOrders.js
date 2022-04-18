exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                "Work_Order_Number": "WO-1000",
                "Property": "StoneBrook",
                "Unit": "3",
                "Description": "Broken light fixture",
                "Materials": ["light fixture", "wiring"],
                "Material_Cost": ["54.99", "8.00"],
                "Material_Total": "62.99",
                "Labor_Type": ["Electrician"],
                "Labor_Hours": ["0.5"],
                "Labor_Rate": ["40.00"],
                "Labor_Cost": ["20.00"],
                "Labor_Total": "20.00",
                "Total": "82.99"
            },
            {
                "Work_Order_Number": "WO-1001",
                "Property": "Pine Haven",
                "Unit": "4C",
                "Description": "Leaking faucet",
                "Materials": ["Seal", "Putty"],
                "Material_Cost": ["4.99", "3.00"],
                "Material_Total": "7.99",
                "Labor_Type": ["Handy Man"],
                "Labor_Hours": ["0.5"],
                "Labor_Rate": ["18.00"],
                "Labor_Cost": ["9.00"],
                "Labor_Total": "9.00",
                "Total": "16.99"
            },
            {
                "Work_Order_Number": "WO-1002",
                "Property": "StoneBrook",
                "Unit": "8",
                "Description": "Carpet badly stained",
                "Materials": ["Carpet", "Carpet padding", "nails"],
                "Material_Cost": ["800.00", "120.00", "13.00"],
                "Material_Total": "933.00",
                "Labor_Type": ["Carpet installer"],
                "Labor_Hours": ["6.0"],
                "Labor_Rate": ["28.00"],
                "Labor_Cost": ["168.00"],
                "Labor_Total": "168.00",
                "Total": "1101.00"
            },
            {
                "Work_Order_Number": "WO-1003",
                "Property": "Skyview Downtown",
                "Unit": "19B",
                "Description": "Broken window",
                "Materials": ["Window glass", "seal"],
                "Material_Cost": ["450.00", "8.00"],
                "Material_Total": "458.00",
                "Labor_Type": ["Glass installer"],
                "Labor_Hours": ["1.0"],
                "Labor_Rate": ["40.00"],
                "Labor_Cost": ["40.00"],
                "Labor_Total": "40.00",
                "Total": "498.00"
            },
            {
                "Work_Order_Number": "WO-1004",
                "Property": "Clock Tower",
                "Unit": "17",
                "Description": "Hole in drywall",
                "Materials": ["Drywall", "mud", "tape", "paint"],
                "Material_Cost": ["85.99", "5.00", "3.00", "12.99"],
                "Material_Total": "106.98",
                "Labor_Type": ["Drywaller", "Painter"],
                "Labor_Hours": ["1.5", "0.5"],
                "Labor_Rate": ["25.00", "25.00"],
                "Labor_Cost": ["37.50", "12.50"],
                "Labor_Total": "50.00",
                "Total": "82.99"
            },
            {
                "Work_Order_Number": "WO-1005",
                "Property": "StoneBrook",
                "Unit": "4",
                "Description": "Broken step",
                "Materials": ["wood", "carpet", "nails"],
                "Material_Cost": ["25.00", "12.00", "3.00"],
                "Material_Total": "40.00",
                "Labor_Type": ["Carpenter", "Carpet installer"],
                "Labor_Hours": ["0.5", "0.5"],
                "Labor_Rate": ["30.00", "20.00"],
                "Labor_Cost": ["15.00", "10.00"],
                "Labor_Total": "25.00",
                "Total": "65.00"
            },
            
        ])
    }
};