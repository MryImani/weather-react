import React from "react";
import DateInDesktop from "./DateInDesktop";
import DateInMobile from "./DateInMobile";
import Humidity from "./Humidity";
import Time from "./Time";
import Wind from "./Wind";
import CityName from "./CityName";
import SearchCity from "./SearchCity";
import CurrentStatusLogo from "./CurrentStatusLogo";
import CurrentStatusTemperature from "./CurrentStatusTemperature";
import NextDay from "./NextDay";
import CityStatusTitle from "./CityStatusTitle";
import "./styles.css";
export default function App() {
  return (
    <div>
      <div className="theme"></div>
      <div className="container">
        <div className="row cityInfo">
          <div className="col-sm-6 col-12 d-none d-sm-block">
            <Time currentTime="12:30" statusTime="PM" />
            <DateInDesktop day="Monday" date="9" month="January" year="2023" />
            <ul>
              <li>
                <p>
                  Humidity: <Humidity humidity="89%" />
                </p>
              </li>
              <li>
                <p>
                  Wind: <Wind speed="3.6km/h" />
                </p>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-12 cityName">
            <div>
              <CityName CityName="Mashhad" country="Iran" />
              <p className="dateMobileShow d-block d-sm-none">
                <DateInMobile
                  day="Monday"
                  time="12:30"
                  date="9"
                  month="January"
                  year="2023"
                />
                <br />
                Humidity: <Humidity humidity="89%" /> ,Wind:
                <Wind speed="3.6km/h" />
              </p>
            </div>
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
          </div>
        </div>
        <SearchCity />
        <div className="row cityStatus">
          <CityStatusTitle />
          <CurrentStatusLogo src="/images/rainy.png" />
          <CurrentStatusTemperature
            temperature="-2"
            temperatureUnit="°C"
            weatherDescription="cloudy"
          />
          <NextDay
            dayName="TUE"
            maxTemp="6"
            minTemp="-1"
            src="/images/sunny.png"
            className="nextDay1"
          />
          <NextDay
            dayName="WED"
            maxTemp="4"
            minTemp="-1"
            src="/images/partly-cloudy.png"
            className="nextDay2"
          />
          <NextDay
            dayName="THU"
            maxTemp="3"
            minTemp="-1"
            src="/images/cloudy.png"
            className="nextDay3"
          />
          <NextDay
            dayName="FRI"
            maxTemp="2"
            minTemp="-2"
            src="/images/cloudy.png"
            className="nextDay4"
          />
          <NextDay
            dayName="SAT"
            maxTemp="1"
            minTemp="-3"
            src="/images/rainy.png"
            className="nextDay5"
          />
          <NextDay
            dayName="SUN"
            maxTemp="2"
            minTemp="-3"
            src="/images/snowy.png"
            className="nextDay6"
          />
        </div>
      </div>
    </div>
  );
}
