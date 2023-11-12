import { Link } from 'react-router-dom';
import '../customcards.css'
const CityCard = ({ cityId, cityName, recordCount }) => {
    return (
        <div id="indexCards" className="card col-4 mb-2" key={cityId} style={{ width: 18 + 'rem' }}>
            <div className="card-body">
                <h4 className="card-title">{cityName}</h4>
                <h4 className="card-text">{recordCount > 0 ? `Number of records for ${cityName}: ${recordCount}` : "No air quality records available"}</h4>

                <Link to={"/AirQualityData/" + cityId} className="btn btn-primary mb-1">Air Quality Data</Link>
            </div>
        </div>
    )
}
export default CityCard