import { Link } from "react-router-dom"
import '../customcards.css'
const CountryCard = ({ countryId, countryName, iso3, imageUrl, cityCount, emissionDataYearRange, temperatureDataYearRange }) => {
    return (
        <div id="indexCards" className="card col-4 mb-2" key={countryId}  style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={imageUrl} alt={"Photo of " + countryName} />
            <div className="card-body">
                <h4 className="card-title">{countryName}</h4>
                <h5 className="card-text">{iso3}</h5>
                <hr />
                <h6 className="card-text">Number of cities in {countryName}:  {cityCount}</h6>
                <hr /> 
                <p>Contains emission records from {emissionDataYearRange[0]} to {emissionDataYearRange[1]} </p>
                <p>Contains temperature records from {temperatureDataYearRange[0]} to {temperatureDataYearRange[1]}</p>
                <hr />
                <div className="btn-container">
                    {cityCount > 0 ? (<Link to={"/Cities/" + countryId} className="btn btn-primary mb-1">Visit Cities </ Link >) : ("")}
                    {temperatureDataYearRange[0] != 0 ? (< Link to={"/CountryTemperatureDetail/" + countryId} className="btn btn-primary mb-1">Temperature Data</Link>) : ("")}
                    {emissionDataYearRange[0] != 0 ? (<Link to={"/SummaryCountryEmissionData/" + countryId} className="btn btn-primary mb-1">Summary Emission Data</Link>) : ("")}
                </div>
            </div>
        </div>
    )
}
export default CountryCard