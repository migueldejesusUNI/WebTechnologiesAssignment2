import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import '../customcards.css'

const SummaryCountryEmissionData = ({ }) => {

    let params = useParams()
    

    const [summaryData, setsummaryData] = useState({});
    const [fullData, setfullData] = useState({});
    const [countryId, setCountryId] = useState(params.countryId)
    const [regionId, setRegionId] = useState(params.regionId)
    const [elementList, setElementList] = useState({})
    const [elementId, setElementId] = useState(null)
    const initialisedAlready = useRef(false)

    useEffect(() => {
        console.log("Summary Data");
        fetch(`http://localhost:5256/api/B_Countries/SummaryCountryEmissionData/${countryId}`)
            .then(response => response.json())
            .then(data => setsummaryData(data))
            .catch(err => {
                console.log(err);
            })

        

    }, [countryId]);

    useEffect(() => {

        /* strict mode called this twice making the select box have duplicate
        entries so this was my way around strict mode rendering use effect twice ;)
        */
        if (!initialisedAlready.current) {
            initialisedAlready.current = true
            console.log("Element List ")
            fetch(`http://localhost:5256/api/B_Countries/GetElementList`)
                .then(response => response.json())
                .then(data => setElementList(data))
                .catch(err => {
                    console.log(err);
                });
        }
    }, [])

    /* for some reason when i put this code inside the fetch for the element list, it would
     just repeatedly call the api over and over, putting a seperate useEffect seems to
     have fixed it */
    useEffect(() => {

        if (elementList.length > 0) {
            let dropdown = document.getElementById('element-dropdown');
            let option;

            for (let i = 0; i < elementList.length; i++) {
                option = document.createElement('option');
                option.text = elementList[i].elementName;
                option.value = elementList[i].elementId;
                dropdown.add(option);
            }
        }
    }, [elementList])

    useEffect(() => {
        if (elementId != null) {
            console.log("OMG A ELEMENT IDDD")
        }
        else (
            console.log("we got no element id :(")
        )
    })

    

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryEmissionData/${countryId}?elementId=${elementId}`)
            .then(response => response.json())
            .then(data => setfullData(data))
            .catch(err => {
                console.log(err)
            })
    }, [countryId, elementId])
    
    
    function getElement(event) {
        
        var elementValue = event.target.value;
        console.log(elementValue);
        setElementId(elementValue);
        console.log(elementValue);        
    } 

    console.log(fullData)
    return (
        <div>

            <div className="text-white bg-gradient bg-success p-2 my-2 beorder rounded">
                <h2>Summary Country Emission Data </h2>
            </div>
            <hr />
            <Link to={"/Countries/" + regionId} className="btn btn-primary mb-1">Back to Country List</Link>
            <hr /> 

            
            {!summaryData?.length == 0 ? (
                <div className="row justify-content-center" >
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Year</th>
                                    <th>Element</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {summaryData?.map((obj) => (

                                    <tr>
                                        <td>{obj.year != null ? obj.year : "N/A"}</td>
                                        <td>{obj.element != null ? obj.element : "N/A"}</td>
                                        <td>{obj.totalValue != null ? obj.totalValue : "N/A"}</td>                     
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (<h2>No data found</h2>)}

            <hr />
            <h2>Detailed Emissions Breakdown</h2>

            <div>
                <select id="element-dropdown" name="elements" onChange={getElement}>
                    <option value="">Select Element</option>
                </select>

                {!fullData?.length == 0 ? (
                    <div className="row justify-content-center" >
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Year</th>
                                        <th>Item</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fullData?.map((obj) => (

                                        <tr>
                                            <td>{obj.year != null ? obj.year : "N/A"}</td>
                                            <td>{obj.itemName != null ? obj.itemName : "N/A"}</td>
                                            <td>{obj.value != null ? obj.value : "N/A"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    ) : (<h6>Please select an emission element</h6>)}
            </div>
            
        </div>
    )
}

export default SummaryCountryEmissionData