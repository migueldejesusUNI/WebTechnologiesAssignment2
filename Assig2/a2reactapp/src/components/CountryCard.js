import { Link } from "react-router-dom"
import '../customcards.css'
const CountryCard = ({ regionId, countryId, countryName, iso3, imageUrl, cityCount, emissionDataYearRange, temperatureDataYearRange }) => {
    return (
        <div id="indexCards" className="card col-4 mb-2" key={countryId}  style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={imageUrl} alt={"Photo of " + countryName} />
            <div className="card-body">
                <h4 className="card-title">{countryName}{iso3 != "" ? (" (" + iso3 + ")"): ("")}</h4>
                        
                <hr />
                <h6 className="card-text">{cityCount != 0 ? `Cities:  ${cityCount}` : "No cities available"}</h6>
                <hr /> 
                <p>{emissionDataYearRange[0] != 0 ? `Contains emission records from ${emissionDataYearRange[0]} to ${emissionDataYearRange[1]} ` : "No emission data available"} </p>
                <p>{temperatureDataYearRange[0] != 0 ? `Contains temperature records from ${temperatureDataYearRange[0]} to ${temperatureDataYearRange[1]} ` : "No temperature data available"}</p>
                <hr />
                <div className="btn-container">
                    {cityCount > 0 ? (<Link to={"/Cities/" + regionId + "/" + countryId} className="btn btn-primary mb-1">Visit Cities </ Link >) : ("")}
                    {temperatureDataYearRange[0] != 0 ? (< Link to={"/CountryTemperatureDetail/" + regionId + "/" + countryId} className="btn btn-primary mb-1">Temperature Data</Link>) : ("")}
                    {emissionDataYearRange[0] != 0 ? (<Link to={"/SummaryCountryEmissionData/" + regionId + "/" + countryId} className="btn btn-primary mb-1">Summary Emission Data</Link>) : ("")}
                </div>
            </div>
        </div>
    )
}
export default CountryCard