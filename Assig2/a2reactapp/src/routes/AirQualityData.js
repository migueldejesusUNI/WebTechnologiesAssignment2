import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const AirQualityData = ({ }) => {

    let params = useParams();

    const [regionId, setregionId] = useState(params.regionId)
    const [countryId, setcountryId] = useState(params.countryId)
    const [cityID, setcityID] = useState(params.cityID)

    return (
        <div>
            <h2>Yes</h2>
            <h2>CityID : {cityID}</h2>
        </div>
        
    )
}

export default AirQualityData