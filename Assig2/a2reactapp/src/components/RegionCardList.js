import React, { useState,useEffect } from 'react'
import RegionCard from "./RegionCard";


const RegionCardList = ({ }) => {

    const [cardData, setcardData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5256/api/A_Regions")
            .then(response => response.json())
            .then(data => setcardData(data))
            .catch(err => {
                console.log(err);
            });

    }, [])
    return (
        <div className="row justify-content-center mb-1 col-15">

            <h2>All Regions </h2>
            {cardData.map((obj) => (              
                <RegionCard                    
                    regionId={obj.regionId}
                    regionName={obj.regionName}
                    imageUrl={obj.imageUrl}
                    countryCount={obj.countryCount }

                />           
            )
            )
            }
        </div>   
    )
}

export default RegionCardList