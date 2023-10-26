const CountryCard = ({ countryId, countryName, iso3, imageUrl, cityCount, emissionDataYearRange, temperatureDataYearRange }) => {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={imageUrl} alt={"Photo of " + countryName} />
            <div className="card-body">
                <h4 className="card-title">{countryName}</h4>
                <h5 className="card-text">{iso3}</h5>
                <h6 className="card-text">Number of cities in {countryName}:  {cityCount}</h6>
                <a href="#Countries" className="btn btn-primary">Visit Cities </a>
            </div>
        </div>
    )
}
export default CountryCard