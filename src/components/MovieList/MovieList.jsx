import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import { PacmanLoader } from "react-spinners";
import '../MovieList/MovieList.css';
import '../MovieList/Mobile.css';

const url = process.env.REACT_APP_MOVIES_URL;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_MOVIES_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_MOVIES_API_HOST,
  },
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const MoviePerPage = 20;

  useEffect(() => {
    fetchMoviesData();
  }, []);
  const fetchMoviesData = async () => {
    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  };

  const IndexOfLastMovie = currentPage * MoviePerPage;
  const IndexOfFirstMovie = IndexOfLastMovie - MoviePerPage;
  const CurrentMovies = movies.slice(IndexOfFirstMovie, IndexOfLastMovie);

  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(movies.length / MoviePerPage); i++)
    PageNumbers.push(i);

  return (
    <div className="movie-list">
      {movies.length !== 0 ? (
        <div className="movies-pagination">
          <div className="movies">
            {CurrentMovies.map((movie, key) => (
              <Movie
                key={key}
                image={movie?.image}
                title={movie?.title}
                rating={movie?.rating}
                year={movie?.year}
                imdbid={movie?.imdbid}
              />
            ))}
          </div>
          <div className="buttons-numbers">
            <button
              className="button-previous"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              Prev
            </button>
            <div className="numbers">
              {PageNumbers.map((PageNumber) => (
                <div
                  className="number"
                  key={PageNumber}
                  onClick={() => {
                    setCurrentPage(PageNumber);
                  }}
                  style={{
                    backgroundColor:
                      PageNumber === currentPage ? "yellow" : "white",
                  }}
                >
                  {PageNumber}
                </div>
              ))}
            </div>
            <button
              className="button-next"
              onClick={() => {
                if (currentPage < PageNumbers.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <PacmanLoader color="#36d7b7" />
      )}
    </div>
  );
};

export default MovieList;
