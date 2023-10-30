import { useState, useEffect } from 'react'
import CityCard from './CityCard';
import { Link, useParams } from 'react-router-dom'

const CityCardList = ({ }) => {

    let params = useParams();

    const [cardData, setState] = useState([]);
    const [countryId, setCountryId] = useState(params.countryId);

    useEffect(() => {
        console.log("useEffect")
        fetch(`http://localhost:5256/api/C_Cities/${countryId}`)
        .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId])

    return (
        <div className="row justify-content-center">
            {cardData?.map((obj) => (
                <CityCard
                    cityId={obj.cityId}
                    cityName={obj.cityName}
                    recordCount={obj.recordCount}
                />
            ))}
        </div>
    )
}

export default CityCardList