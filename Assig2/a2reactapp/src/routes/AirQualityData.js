import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const AirQualityData = ({ }) => {

    let params = useParams();

    const [regionId, setregionId] = useState(params.regionId)
    const [countryId, setcountryId] = useState(params.countryId)
    const [cityID, setcityID] = useState(params.cityID)
    const [airQualityData, setAirQualityData] = useState({ })

    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/GetAirQualityData/${cityID}`)
            .then(response => response.json())
            .then(data => setAirQualityData(data))
            .catch(err => {
                console.log(err)
            })

    }, [cityID])

    console.log(airQualityData)
    return (
        <div>
            <div className="text-white bg-gradient bg-success p-2 my-2 border rounded">
                <h1 className="text-center">Air Quality Data</h1>
            </div>
            < hr />
            <Link to={"/Cities/" + regionId + "/" + countryId} className="btn btn-primary mb-1">Back to Cities List</Link> 
            <hr />

            <div className="card col-6 mb-2 mx-auto">
                <div className="card-body text-white bg-gradient bg-primary p-2 my-2 ">
                    <h2>{airQualityData.theCityDetail?.cityName}</h2>
                </div>
                <h4>{airQualityData.theCityDetail?.countryName}</h4>
                <h5>({airQualityData.theCityDetail?.regionName })</h5>

            </div>

            <div className="row justify-content-center">
                <h2 className="text-white bg-gradient bg-dark p-2" style={{width: 36 + 'rem'} }>Summary</h2>
            </div>
            <div>
                {!airQualityData.theCityAirQualityData?.length == 0 ? (
                    <div className="row justify-content-center">
                        {airQualityData.theCityAirQualityData?.map((obj) => (
                            <div className="card" col-4 mb-2 style={{width: 18 + 'rem'}}>
                                <div className="card-title text-white bg-gradient bg-danger p-2 my-2 border rounded">
                                    <h2>{obj.year}</h2>
                                </div>   
                                <div className="card-body">
                                    <h5 className="text-white bg-gradient bg-dark p-2 my-2 border rounded">PM10</h5>
                                    <h6>AVG: {obj.countryPM10Avg}</h6>
                                    <h6>MIN: {obj.countryPM10Min}</h6>
                                    <h6>MAX: {obj.countryPM10Max}</h6>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-white bg-gradient bg-dark p-2 my-2 border rounded">PM2.5</h5>
                                    <h6>AVG: {obj.countryPM25Avg}</h6>
                                    <h6>MIN: {obj.countryPM25Min}</h6>
                                    <h6>MAX: {obj.countryPM25Max}</h6>
                                </div>
                            </div>
                        ))}
                        
                    </div>

                ) : (<h2>No Summary Data Found</h2>)}
            </div>

            <hr /> 
            <div className="row justify-content-center">
                <h2 className="text-white bg-gradient bg-dark p-2" style={{ width: 36 + 'rem' }} >Detailed Air Quality Data</h2>
            </div>
            <div>
                {!airQualityData.theCityAirQualityData?.length == 0 ? (
                    
                    <div className="row justify-content-center" >
                        <h2 className="text-white bg-gradient bg-danger p-2 my-2 border rounded" style={{width: 18 + 'rem'}}>PM10</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Year</th>
                                        <th>Annual Mean</th>
                                        <th>Temporal Coverage</th>
                                        <th>Measured/Converted</th>
                                        <th>Reference</th>
                                        <th>Database Year</th>
                                        <th>Status</th>
                                        <th>Data Station Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {airQualityData.theCityAirQualityData?.map((obj) => (
                                        <tr>
                                            <td>{obj.theAirQualityData.year != null ? obj.theAirQualityData.year : "N/A"}</td>
                                            <td>{obj.theAirQualityData.annualMean != null ? obj.theAirQualityData.annualMean : "N/A"}</td>
                                            <td>{obj.theAirQualityData.temporalCoverage1 != null ? obj.theAirQualityData.temporalCoverage1 : "N/A"}</td>
                                            <td>{obj.theAirQualityData.annualMeanPm10 != null ? obj.theAirQualityData.annualMeanPm10 : "N/A"}</td>
                                            <td>{obj.theAirQualityData.reference != null ? obj.theAirQualityData.reference : "N/A"}</td>
                                            <td>{obj.theAirQualityData.dbYear != null ? obj.theAirQualityData.dbYear : "N/A"}</td>
                                            <td>{obj.theAirQualityData.status != "" ? obj.theAirQualityData.status : "N/A"}</td>
                                            <td>{obj.dataStationDetail[0].stationType != null ? obj.dataStationDetail[0].stationType + "   (Station Number: " + obj.dataStationDetail[0].stationNumber + ")" : "N/A"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-white bg-gradient bg-danger p-2 my-2 border rounded" style={{width: 18 + 'rem'} }>PM2.5</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Year</th>
                                        <th>Annual Mean</th>
                                        <th>Temporal Coverage</th>
                                        <th>Measured/Converted</th>
                                        <th>Reference</th>
                                        <th>Database Year</th>
                                        <th>Status</th>
                                        <th>Data Station Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {airQualityData.theCityAirQualityData?.map((obj) => (

                                        <tr>
                                            <td>{obj.theAirQualityData.year != null ? obj.theAirQualityData.year : "N/A"}</td>
                                            <td>{obj.theAirQualityData.annualMean != null ? obj.theAirQualityData.annualMeanUgm3 : "N/A"}</td>
                                            <td>{obj.theAirQualityData.temporalCoverage1 != null ? obj.theAirQualityData.temporalCoverage2 : "N/A"}</td>
                                            <td>{obj.theAirQualityData.annualMeanPm10 != null ? obj.theAirQualityData.annualMeanPm25 : "N/A"}</td>
                                            <td>{obj.theAirQualityData.reference != null ? obj.theAirQualityData.reference : "N/A"}</td>
                                            <td>{obj.theAirQualityData.dbYear != null ? obj.theAirQualityData.dbYear : "N/A"}</td>
                                            <td>{obj.theAirQualityData.status != "" ? obj.theAirQualityData.status : "N/A"}</td>
                                            <td>{obj.dataStationDetail[0].stationType != null ? obj.dataStationDetail[0].stationType + "   (Station Number: " + obj.dataStationDetail[0].stationNumber + ")" : "N/A"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    ) : (<h2>No data found</h2>)}
            </div>  
        </div>
        
    )
}

export default AirQualityData