import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import '../customcards.css'


const CountryTemperatureDetail = ({ }) => {

    let params = useParams();

    const [tempData, settempData] = useState({
        "rawTemperatureData": []
    });
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
            <h2 className="text-center">
            Country Temperature detail
            </h2>
            <p>
                Country ID: {countryId}
            </p>
            <p>Earliest Year: {tempData.minYear}</p>
            <p>Latest Year: {tempData.maxYear}</p>

            

            {!tempData.rawTemperatureData?.length == 0 ? (
                <div className="row justify-content-center">
                    <table className="table">
                        <thead>
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
                                <td>{obj.theCountryTempData.year}</td>
                                <td>{obj.theCountryTempData.unit}</td>
                                <td>{obj.theCountryTempData.change}</td>
                                <td>{obj.theCountryTempData.value}</td>
                                <td>{obj.regionalAvg}</td>
                                <td>{obj.regionalMin}</td>
                                <td>{obj.regionalMax}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (<h2>No data found</h2>)}
            
               
            
        </div>
    )
}
export default CountryTemperatureDetail