import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import '../customcards.css'

const SummaryCountryEmissionData = ({ }) => {

    let params = useParams()
    

    const [summaryData, setsummaryData] = useState({});
    const [countryId, setCountryId] = useState(params.countryId)
    const [elementList, setElementList] = useState({})
    const [elementId, setElementId] = useState(null)

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5256/api/B_Countries/SummaryCountryEmissionData/${countryId}`)
            .then(response => response.json())
            .then(data => setsummaryData(data))
            .catch(err => {
                console.log(err);
            })

        fetch(`http://localhost:5256/api/B_Countries/GetElementList`)
            .then(response => response.json())
            .then(data => setElementList(data))
            .catch(err => {
                console.log(err);
            });
        

    }, [countryId]);

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

    function getElement(event) {
        
        var elementValue = event.target.value;
        console.log(elementValue);
        setElementId(elementValue);
        console.log(elementValue);

        
        
    } 
    



    return (
        <div>

            <div className="text-white bg-gradient bg-success p-2 my-2 beorder rounded">
                <h2>Summary Country Emission Data </h2>
            </div>
            <hr /> 
            <Link to={"/Countries/0"} className="btn btn-primary mb-1">Back to Country List</Link>
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

            <select id="element-dropdown" name="elements" onChange={getElement}>
                <option>Select Element</option>
            </select>
        </div>
    )
}

export default SummaryCountryEmissionData