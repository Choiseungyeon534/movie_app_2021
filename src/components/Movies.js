import React from "react";
import PropTyes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movies({ id, year, title, summary, poster, genres, runtime, rating }) {
    return (
        <Link
            to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres,
                    runtime,
                    rating
                }
            }}
        >
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre"> {genre}</li>
                        ))}
                    </ul>
                    <h5 className="movie__year">{year}</h5>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    );

}

Movies.PropTyes = {
    id: PropTyes.number.isRequired,
    year: PropTyes.number.isRequired,
    title: PropTyes.string.isRequired,
    summary: PropTyes.string.isRequired,
    poster: PropTyes.string.isRequired,
    genres: PropTyes.arrayOf(PropTyes.string).isRequired
};

export default Movies;