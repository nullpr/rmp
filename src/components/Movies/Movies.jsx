import React from "react";
import "./Movies.scss";
import { MovieCard } from "./MovieCard";
import { filters, movies } from "utils/mocks";

const Movies = () => (
  <section className="movies">
    <div className="movies-options">
      <div className="movies-filters">
        {filters.map((item) => (
          <div key={`filter-${item}`} className="movies-filters-item">
            <input
              id={`genre-${item}`}
              type="radio"
              name="movie-genre"
              defaultChecked={item === "All"}
            />
            <label htmlFor={`genre-${item}`}>{item}</label>
          </div>
        ))}
      </div>
      <div className="movies-sort-by">
        <label htmlFor="movie-sort">Sort by</label>
        <select id="movie-sort">
          <option value="Release date">Release Date</option>
        </select>
      </div>
    </div>
    <ul className="movies-list">
      {movies.map((item) => (
        <MovieCard key={item.id} data={item} />
      ))}
    </ul>
  </section>
);

export { Movies };
