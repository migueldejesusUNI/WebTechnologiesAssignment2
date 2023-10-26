const RegionCard = ({regionId, regionName, imageUrl, countryCount }) => {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{regionName}</h5>
                <h6 className="card-text">Number of countries: {countryCount}</h6>
                <a href="Countries" className="btn btn-primary">Visit Countries {regionId}</a>
            </div>
        </div>
    )
}
export default RegionCard