const Card = ({regionImage, regionName, regionId }) => {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={regionImage} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{regionName}</h5>
                <a href="#" className="btn btn-primary">Go somewhere {regionId}</a>
            </div>
        </div>
    )
}
export default Card