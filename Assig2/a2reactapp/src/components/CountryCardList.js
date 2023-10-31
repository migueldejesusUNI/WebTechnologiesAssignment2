import { useState, useEffect } from 'react'
import CountryCard from "./CountryCard"
import { Link, useParams } from "react-router-dom";

const CountryCardList = ({ }) => {
    let params = useParams();

    const [cardData, setState] = useState([]);
    const [regionId, setRegionId] = useState(params.regionId);

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            })
    }, [regionId])

    return (
        <div className="row justify-content-center">
            {cardData.countryList?.map((obj) => (
                <CountryCard
                    countryId={obj.countryId}
                    countryName={obj.countryName}
                    iso3={obj.iso3}
                    imageUrl={obj.imageUrl}
                    cityCount={obj.cityCount}
                    emissionDataYearRange={obj.emissionDataYearRange}
                    temperatureDataYearRange={obj.temperatureDataYearRange}
                />
            ))}
            
        </div>
    )
}

export default CountryCardList