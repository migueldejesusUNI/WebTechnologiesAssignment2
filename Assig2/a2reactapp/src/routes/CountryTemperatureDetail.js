import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import '../customcards.css'


const CountryTemperatureDetail = ({ }) => {

    let params = useParams();

    const [tempData, settempData] = useState({ });
    const [countryId, setCountryId] = useState(params.countryId)
 

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5256/api/B_Countries/CountryTemperatureDetail/${countryId}`)
            .then(response => response.json())
            .then(data => settempData(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId])

    
    return (
        <div>
            <div class="text-white bg-gradient bg-success p-2 my-2 border rounded" >
                <h2 className="text-center">
                    Country Temperature
                </h2>
            </div>
            <hr />
            <Link to={"/Countries/0"} className="btn btn-primary mb-1">Back to Country List</Link>
            <hr />
            {!tempData.rawTemperatureData?.length == 0 ? (
                <div className="row justify-content-center" >
                    <div className="table-responsive">    
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Year</th>
                                    <th>Unit</th>
                                    <th>Change</th>
                                    <th>Value</th>
                                    <th>RegionalAvg</th>
                                    <th>RegionalMin</th>
                                    <th>RegionalMax</th>
                                </tr>
                            </thead>
                            <tbody>
                            {tempData.rawTemperatureData?.map((obj) => (
                            
                                <tr>
                                    <td>{obj.theCountryTempData.year != null ? obj.theCountryTempData.year : "N/A"}</td>
                                    <td>{obj.theCountryTempData.unit != null ? obj.theCountryTempData.unit : "N/A"}</td>
                                    <td>{obj.theCountryTempData.change != null ? obj.theCountryTempData.change : "N/A"}</td>
                                    <td>{obj.theCountryTempData.value != null ? obj.theCountryTempData.value : "N/A"}</td>
                                    <td>{obj.regionalAvg != null ? obj.regionalAvg : "N/A"}</td>
                                    <td>{obj.regionalMin != null ? obj.regionalMin : "N/A"}</td>
                                    <td>{obj.regionalMax != null ? obj.regionalMax : "N/A"}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (<h2>No data found</h2>)}
                     
        </div>
    )
}
export default CountryTemperatureDetail