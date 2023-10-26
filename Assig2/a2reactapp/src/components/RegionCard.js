const RegionCard = ({regionId, regionName, imageUrl }) => {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{regionName}</h5>
                <a href="#" className="btn btn-primary">Go somewhere {regionId}</a>
            </div>
        </div>
    )
}
export default RegionCard