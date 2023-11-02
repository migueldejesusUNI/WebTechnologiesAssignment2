import { useState, useEffect } from 'react'
import CountryCard from "./CountryCard"
import { Link, useParams } from "react-router-dom";

const CountryCardList = ({ }) => {
    let params = useParams();

    const [cardData, setcardData] = useState([]);
    const [regionId, setRegionId] = useState(params.regionId);
    const [query, setQuery] = useState('');

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}?searchText=${query}`)
            .then(response => response.json())
            .then(data => setcardData(data))
            .catch(err => {
                console.log(err);
            })
    }, [regionId, query])

    function searchQuery(evt) {
        const value = document.querySelector(['[name="searchText"]']).value;
        setQuery(value);
    }
    
    return (
        <div>
            <h2>Countries</h2>

            <div className="row justify-content-center mb-3">
                <div className="row col-3 text-center">
                    <input type="text" name="searchText" className="form-control" placeholder="Search for countries" />
                </div>
                <div className="row col-3 text-left">
                    <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
                </div>
            </div>
            <div className="row justify-content-center mb-3">
                <Link to={"/Regions"} className="btn btn-primary">Back To Regions</ Link >
            </div>
            <hr />
            {!cardData.countryList?.length == 0 ? (
                <div id="cardList" className="row justify-content-center">
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
            ) :  (<h2>No countries found</h2>)}
        </div>
    )
    
   
}

export default CountryCardList