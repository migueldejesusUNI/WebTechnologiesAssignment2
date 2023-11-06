import { Link } from "react-router-dom";
import '../customcards.css'

const RegionCard = ({ regionId, regionName, imageUrl, countryCount }) => {
    return (
        <div id="indexCards" className="card col-4 mb-2" key={regionId}  style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={imageUrl != "" ? imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/330px-The_Blue_Marble_%28remastered%29.jpg"}  alt={"Photo of " + regionName} />
            <div className="card-body">
                <h4 className="card-title">{regionName}</h4>
                <hr /> 
                <h5 className="card-text">Number of countries: {countryCount}</h5>
                <hr />
                <div className="btn-container">
                    <Link to={"/Countries/" + regionId} className="stretched-link"></Link>
                </div>
            </div>
        </div>
    )
}
export default RegionCard