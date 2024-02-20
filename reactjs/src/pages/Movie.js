import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "../App.css";

function Movie() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [values, setValues] = useState({
    car: "",
    year: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3001/api/v1`
      : process.env.REACT_APP_BASE_URL;

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getMovie();
    }

    return () => {
      ignore = true;
    };
  }, []);

  const getMovie = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/movies/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          // const { car, year } = data;
          setValues({
            car: data.car,
            year: data.year,
          });
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const deleteMovie = async () => {
    try {
      await fetch(`${API_BASE}/movies/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
          navigate("/dashboard", { replace: true });
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const updateMovie = async () => {
    try {
      await fetch(`${API_BASE}/movies/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMovie();
  };

  const handleInputChanges = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.car]: event.target.value,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Movie Profile</h1>
        <h5>{values && values.car}</h5>
        <p>{values && values.year}</p>
        <button onClick={() => deleteMovie()}>Delete Movie</button>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>

        <form onSubmit={(event) => handleSubmit(event)}>
          <label>
            Car:
            <input
              type="text"
              name="name"
              value={values.car}
              onChange={handleInputChanges}
            />
          </label>
          <label>
            Year:
            <input
              type="text"
              name="year"
              value={values.year}
              onChange={handleInputChanges}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Movie;
