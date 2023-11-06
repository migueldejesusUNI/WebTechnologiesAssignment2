import '../customcards.css'

const TemperatureCard = ({ year, unit, change, value, regionalAvg, regionalMin, regionalMax }) => {
    return (
        <div id="indexCards" className="card col-4 mb-2" key={ year } style={{ width: 18 + 'rem' }}>
            <div>
                <h4>year: {year}</h4>
                <p>unit: {unit}</p>
                <p>change: {change}</p>
                <p>value: {value}</p>
                <p>regionalAvg: {regionalAvg}</p>
                <p>regionalMin: {regionalMin}</p>
                <p>regionalMax: {regionalMax}</p>
            </div>

        </div>
    )
}
export default TemperatureCard