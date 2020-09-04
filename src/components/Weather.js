import React, { useEffect, useState } from "react";
import axios from "axios";
import configs from "../utility/config";
import DisplayData from "./DisplayData";
import Loader from "./Loader";
import Refresh from "./Refresh";
import Softkey from "./Softkey";
export default function Weather() {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [weather, setWeather] = useState(null);
    const [icon, setIcon] = useState(null);
    const [temp, setTemp] = useState(null);
    const [daily, setDaily] = useState(null);
    const [error, setError] = useState("");
    const getWeather = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${configs.API_KEY}`
            )
            .then((res) => {
                console.log(res.data);
                setWeather(res.data.current.weather[0].main);
                setIcon(res.data.current.weather[0].icon);
                setTemp(res.data.current.temp);
                setDaily(res.data.daily);
                console.log("daily", daily);
            });
    };
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setLat(String(position.coords.latitude));
                setLon(String(position.coords.longitude));
                console.log("lat->", lat);
                console.log("lon->", lon);
                getWeather();
            },
            function () {
                setError("Error fetching location details");
            }
        );
    };

    const handleKeyDown = (evt) => {
        switch (evt.key) {
            case "Enter":
                console.log("buton-pressed");
                return getLocation();
            default:
                return;
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        if (lat && lon) getWeather();
        return () => document.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lat, lon]);
    return (
        <>
            <div className="weather-main">
                {error !== "" ? (
                    <h1>{error}</h1>
                ) : lat && lat ? (
                    <>
                        {weather ? (
                            <DisplayData
                                icon={icon}
                                temperature={temp}
                                description={weather}
                                daily={daily}
                            />
                        ) : (
                            <Loader />
                        )}
                    </>
                ) : (
                    <Refresh />
                )}
            </div>
            <Softkey center={"Refresh"} />
        </>
    );
}
