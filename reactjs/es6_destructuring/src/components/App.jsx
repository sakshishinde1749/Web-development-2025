import React from "react";
import Rows from "./Rows";
import cars from "../practice";

function App() {
    console.log(cars);
    return (
        <table>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Color</th>
            </tr>
            {cars.map(cars =>
                <Rows 
                    model={cars.model}
                    speed={cars.speedStats.topSpeed}
                    color={cars.coloursByPopularity[0]}
                />
            )}
        </table>
    );
}

export default App;