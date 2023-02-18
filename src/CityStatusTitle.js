import React from "react";
export default function CityStatusTitle() {
  return (
    <div className="col-12 border-bottom border-dark-subtle pb-2 cityStatusTitle">
      <div>
        <p>Daily Forecast</p>
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          onClick={fToC}
          defaultChecked
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          °C
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          onClick={cToF}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          °F
        </label>
      </div>
    </div>
  );
}
