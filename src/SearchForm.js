import React from "react";
export default function SearchForm() {
  return (
    <form id="searchCityForm">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your city"
          id="searchCityInp"
        />
        <button
          className="btn btn-primary search"
          type="submit"
          id="searchCityBtn"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
