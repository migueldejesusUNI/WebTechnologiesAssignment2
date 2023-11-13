import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const CityCardList = ({ }) => {

    let params = useParams();

    const [cardData, setState] = useState([]);
    const [regionId, setRegionId] = useState(params.regionId);
    const [countryId, setCountryId] = useState(params.countryId);
    const [countryData, setcountryData] = useState({});
    const [query, setQuery] = useState('');


    useEffect(() => {
        console.log("useEffect")
        fetch(`http://localhost:5256/api/C_Cities/${countryId}?searchText=${query}`)
        .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            })

        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}`)
            .then(response => response.json())
            .then(data => setcountryData(data))
            .catch(err => {
                console.log(err)
            })
    }, [countryId, regionId, query])

    function searchQuery(evt) {
        const value = document.querySelector(['[name="searchText"]']).value;
        setQuery(value);
    }
    
    return (
        <div className="row justify-content-center">
            <div className="text-white bg-gradient bg-success p-2 my-2 border rounded">
                <h2>{countryData.countryList?.find(c => c.countryId == countryId).countryName}</h2>
                <h3>{countryData.theRegion?.regionName}</h3>
            </div>

            <div className="row justify-content-center mb-3">
                <Link to={"/Countries/" + regionId} className="btn btn-primary">Back to Countries</Link>
            </div>

            <div className="row col-3 text-center">
                <input type="text" name="searchText" className="form-control" placeholder="Search for cities"/>
            </div>
            <div className="row col-3 text-left">
                <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
            </div>
            <hr /> 
            {cardData?.map((obj) => (
                <div id="indexCards" className="card col-4 mb-2" key={obj.cityID} style={{ width: 18 + 'rem' }}>
                    <div className="card-body">
                        <h4 className="card-title">{obj.cityName}</h4>
                        <hr />
                        <h5 className="card-text">{obj.recordCount > 0 ? `Air Quality records: ${obj.recordCount}` : "No air quality records available"}</h5>
                        <Link to={"/AirQualityData/" + regionId + "/" + countryId + "/" + obj.cityID} className="btn btn-primary mb-1">Air Quality Data</Link>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default CityCardList