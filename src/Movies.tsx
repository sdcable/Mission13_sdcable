import { useState } from "react";
import data from "./MovieData.json";

const MDS = data.MovieData; //This is the name of the JSON object in the JSON file.

function MovieList() {
  const [listOMovies, setListOMovies] = useState(MDS);

  const addMovie = () => {
    setListOMovies([
      ...MDS,
      {
        Category: "Action/Adventure",
        Title: "Batman returns",
        Year: 1992,
        Director: "Joel Schumacher",
        Rating: "PG-13",
      },
    ]);
  };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table table-striped table-hover table-sm table-responsive">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
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

      <button className="btn btn-primary" onClick={addMovie}>
        Add Batman
      </button>
    </>
  );
}

export default MovieList;
