import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const CountryTemperatureDetail = ({ }) => {

    let params = useParams();

    const [tempData, settempData] = useState([]);
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
            <p>{tempData.minYear}</p>
        </div>
    )
}
export default CountryTemperatureDetail