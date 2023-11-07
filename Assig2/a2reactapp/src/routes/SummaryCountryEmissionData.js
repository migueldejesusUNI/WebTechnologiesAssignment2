import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import '../customcards.css'

const SummaryCountryEmissionData = ({ }) => {

    let params = useParams()

    const [summaryData, setsummaryData] = useState({});
    const [countryId, setCountryId] = useState(params.countryId)

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5256/api/B_Countries/SummaryCountryEmissionData/${countryId}`)
            .then(response => response.json())
            .then(data => setsummaryData(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId])


    return (
        <div>

            <div class="text-white bg-gradient bg-success p-2 my-2 beorder rounded">
                <h2>Summary Country Emission Data </h2>
            </div>
            <hr /> 
            <Link to={"/Countries/0"} className="btn btn-primary mb-1">Back to Country List</Link>
            <hr /> 

            

            <div className="container mt-3">
                <h5>Please select the year you would like to view country emission data</h5>
            </div>
            <div className="mt-4">
                <select className="form-select" value={summaryData.year}>
                    <option value="selectYear">Select Year</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    )
}

export default SummaryCountryEmissionData