import { useState, useEffect } from 'react'
import CityCard from './CityCard';
import { Link, useParams } from 'react-router-dom'

const CityCardList = ({ }) => {

    let params = useParams();

    const [cardData, setState] = useState([]);
    const [countryId, setCountryId] = useState(params.countryId);
    const [query, setQuery] = useState('');

    useEffect(() => {
        console.log("useEffect")
        fetch(`http://localhost:5256/api/C_Cities/${countryId}?searchText=${query}`)
        .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId, query])

    function searchQuery(evt) {
        const value = document.querySelector(['[name="searchText"]']).value;
        setQuery(value);
    }

    return (
        <div className="row justify-content-center">
            <div className="row col-3 text-center">
                <input type="text" name="searchText" className="form-control" placeholder="Search for cities"/>
            </div>
            <div className="row col-3 text-left">
                <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
            </div>
            <div className="row justify-content-center mb-3">
                <Link to={"/Countries/0" } className="btn btn-primary">Back to Countries</Link>
            </div>
            <hr /> 
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