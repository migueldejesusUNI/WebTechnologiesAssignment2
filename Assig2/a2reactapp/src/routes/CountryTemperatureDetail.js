import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import '../customcards.css'


const CountryTemperatureDetail = ({ }) => {

    let params = useParams();

    const [tempData, settempData] = useState({ });
    const [countryData, setcountryData] = useState({ });
    const [countryId, setCountryId] = useState(params.countryId)
    const [regionId, setRegionId] = useState(params.regionId)
    
   
 

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5256/api/B_Countries/CountryTemperatureDetail/${countryId}`)
            .then(response => response.json())
            .then(data => settempData(data))
            .catch(err => {
                console.log(err);
            })

        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}`)
            .then(response => response.json())
            .then(data => setcountryData(data))
            .catch(err => {
                console.log(err)
            })

        
    }, [countryId, regionId])

    console.log(countryData.countryList && countryData.countryList.length > 0 ? countryData.countryList[2] : "Element not found");

    
  
    return (
        <div>
            <div className="text-white bg-gradient bg-success p-2 my-2 border rounded" >
                <h1 className="text-center">
                    Country Temperature 
                </h1>
            </div>
            <hr />
            <Link to={"/Countries/" + regionId} className="btn btn-primary mb-1">Back to Country List</Link>
            <hr />
            <div className="card col-6 mb-2 mx-auto" >
                <img className="card-img-top" src={countryData.countryList?.find(c => c.countryId == countryId).imageUrl } />
                <div className="card-body text-white bg-gradient bg-primary p-2 my-2 border rounded">
                    <h2>{countryData.countryList?.find(c => c.countryId == countryId).countryName}</h2>
                    <h3>{countryData.theRegion?.regionName}</h3>
                </div>
                <div>
                    
                    <h4>Showing temperature records from {tempData.minYear} to {tempData.maxYear}</h4>
                    
                </div>
            </div>
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