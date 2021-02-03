import React, { useEffect, useState } from 'react';

const People = ({displayData}) => {   
    return(
        <div>
            <h3>{displayData.name}</h3>
            <p>Height: {displayData.height}</p>
            <p>Mass: {displayData.mass} kg</p>
            <p>Hair Color: {displayData.hair_color}</p>
            <p>skin Color: {displayData.skin_color}</p>
        </div>
    )
}

export default People;