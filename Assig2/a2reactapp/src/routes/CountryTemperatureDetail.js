import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import TemperatureCard from "../components/TemperatureCard"
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
                <div className="row justify-content-center mb-3 col-20">
                    {tempData.rawTemperatureData?.map((obj) => (
                        <TemperatureCard
                            year={obj.theCountryTempData.year}
                            unit={obj.theCountryTempData.unit}
                            change={obj.theCountryTempData.change}
                            value={obj.theCountryTempData.value}
                            regionalAvg={obj.regionalAvg}
                            regionalMin={obj.regionalMin}
                            regionalMax={obj.regionalMax}
                        />
                    ))}
                </div>
            ) : (<h2>No data found</h2>)}
            
               
            
        </div>
    )
}
export default CountryTemperatureDetail