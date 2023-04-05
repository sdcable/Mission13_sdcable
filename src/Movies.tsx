import { useState, useEffect } from "react";
import { Movie } from "./types/movies";
import data from "./MovieData.json";

function MovieList() {
  const MDS = data.MovieData;
  //const [listOMovies, setListOMovies] = useState<Movie[]>([]);
  const [listOMovies, setListOMovies] = useState(MDS);
  const addMovie = () => {
    setListOMovies([
      ...MDS,
      {
        Category: "Action/Adventure",
        Title: "Batman & Robin",
        Year: 1997,
        Director: "Joel Schumacher",
        Rating: "PG-13",
      },
    ]);
  };
  /* 
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch("https://localhost:4000/Movie");
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchMovie();
  }, []);
  */
  //Above is what is used to pull the API
  //Below, we use mapping to allow the flexibility of it to come in.
  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <table className="table table-striped table-hover table-sm table-responsive">
            <thead className="table border">
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody className="table border">
              {listOMovies.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Batman
      </button>
    </>
  );
}

export default MovieList;
