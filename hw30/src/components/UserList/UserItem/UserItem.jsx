import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./UserItem.module.scss";


export function UserItem({ data, loading, error }) {
  if (!data) {
    return <p>Loading...</p>; // Или другой UI для обработки отсутствия данных
  }
  const {name, height, mass, eye_color, birth_year, films, starships } = data;


  return (
    <div className="container mt-5 text-center">
      {loading && <p className="text-loading">Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {data && (
        <div className="card mt-3">
          <div className="card-body">
            <h2>Name: {name}</h2>
            <p>Height: {height} см</p>
            <p>Mass: {mass} кг</p>
            <p>Hair color: {eye_color}</p>
            <p>Birth year: {birth_year}</p>

            <h4>📽 Films:</h4>
            <ul className="list-group">
              {films.length > 0 ? (
                films.map((film, index) => <li key={index} className="list-group-item">{film}</li>)
              ) : (
                <li className="list-group-item">No information</li>
              )}
            </ul>

            <h4>🚀 Ships:</h4>
            <ul className="list-group">
              {starships.length > 0 ? (
                starships.map((ship, index) => <li key={index} className="list-group-item">{ship}</li>)
              ) : (
                <li className="list-group-item">No information</li>
              )}
            </ul>

            <button className="btn btn-danger mt-3">
              Remove User
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
