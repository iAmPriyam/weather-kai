import React from "react";
const getDate = (value) => {
    const date = new Date(value * 1000);
    let dateString = String(date);
    dateString = dateString.split(" ");
    dateString = `${dateString[0]}, ${dateString[2]} ${dateString[1]}`;
    return dateString;
};
export default function DisplayData({ description, icon, temperature, daily }) {
    return (
        <div className="data-display">
            <h1>{description}</h1>
            <div className="info-main">
                <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt="weather-icon"
                />
                <span>{temperature}°C</span>
            </div>
            <table>
                <tr>
                    <th>Day</th>
                    <th>Min</th>
                    <th>Max</th>
                </tr>
                {daily
                    ? daily.map((item) => (
                          <tr>
                              <td>{getDate(item.dt)}</td>
                              <td>{item.temp.min}</td>
                              <td>{item.temp.max}</td>
                          </tr>
                      ))
                    : null}
            </table>
        </div>
    );
}
