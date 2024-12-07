import React, { useState } from "react";

export default function Film() {
  const key = "d8c12df3";

  // State untuk menyimpan input
  const [title, setFormData] = useState("");
  // State untuk menyimpan hasil API
  const [results, setResults] = useState([]);
  // State untuk menyimpan detail film
  const [details, setDetails] = useState(null);
  // State untuk loading
  const [loading, setLoading] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // Fungsi untuk menangani perubahan input
  const searchInput = (e) => {
    setFormData(e.target.value);
  };

  // Fungsi untuk menangani submit form
  const searchForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=${title}`
      );
      const data = await res.json();

      // Periksa apakah data ditemukan
      if (data.Response === "True") {
        setResults(data.Search); // Simpan array Search ke state
        setDetails(null);
      } else {
        setResults([]); // Kosongkan hasil jika tidak ada film
        console.error("No films found!");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const showDetails = async (title) => {
    setLoadingDetail(true);
    setDetails(null);

    try {
      // API request untuk mendapatkan detail film
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&t=${title}`
      );
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setDetails(data);
      } else {
        setDetails(null);
        console.error("Details Udefined");
      }
    } catch (err) {
      console.error("Error get data", err);
    } finally {
      setLoadingDetail(false);
    }
  };

  return (
    <section className="w-full h-full flex justify-start items-start gap-3">
      <form
        onSubmit={searchForm}
        className="min-w-[1100px] h-full flex flex-col justify-start items-start gap-3"
      >
        {/* ======================== */}
        {/* Search Form */}
        {/* ======================== */}
        <header className="w-full flex flex-col justify-start items-start gap-3">
          <label htmlFor="inputFilm" className="text-[25px] text-black">
            Search Anime
          </label>
          <span className="w-full flex justify-center items-center rounded-md bg-white/50 backdrop-blur-sm">
            <input
              onChange={searchInput}
              type="text"
              id="inputFilm"
              value={title}
              placeholder="Search anime..."
              className="w-full px-4 py-4 text-black outline-none bg-transparent"
            />
            <button type="submit" className="w-[50px] h-[50px]">
              <i className="bi bi-search text-[20px]"></i>
            </button>
          </span>
        </header>

        {/* ======================== */}
        {/* Films List */}
        {/* ======================== */}
        <div className="w-full h-full grid grid-cols-5 gap-6 pt-3 overflow-y-scroll overflow-x-hidden scrollbar-hide">
          {loading ? (
            <p>Loading...</p>
          ) : results.length > 0 ? (
            results.map((film, index) => (
              <div
                key={index}
                className="w-[200px] h-[350px] flex flex-col justify-start items-start gap-1"
              >
                <img
                  src={film.Poster}
                  alt={film.Title}
                  className="w-full h-[300px] object-cover cursor-pointer hover:brightness-50"
                  onClick={() => showDetails(film.Title)}
                />
                <p className="">{film.Title}</p>
              </div>
            ))
          ) : (
            <p>Films Not Found!</p>
          )}
        </div>
      </form>

      {/* ======================== */}
      {/* Details Film List */}
      {/* ======================== */}
      <div className="w-full h-full flex flex-col justify-start items-start gap-3">
        <h1 className="text-[25px]">Details:</h1>

        {loadingDetail ? (
          <p>Loading...</p>
        ) : details ? (
          <div className="w-full h-full flex flex-col justify-start items-start">
            <p className="font-bold">
              Title: <span className="font-normal">{details.Title}</span>
            </p>
            <p className="font-bold">
              Type: <span className="font-normal">{details.Type}</span>
            </p>
            <p className="font-bold">
              Genre: <span className="font-normal">{details.Genre}</span>
            </p>
            <p className="font-bold">
              Plot: <span className="font-normal">{details.Plot}</span>
            </p>
            <p className="font-bold">
              Rated: <span className="font-normal">{details.Rated}</span>
            </p>
            <p className="font-bold">
              IMDB Rating:{" "}
              <span className="font-normal">{details.imdbRating}</span>
            </p>
            <p className="font-bold">
              IMDB Votes:{" "}
              <span className="font-normal">{details.imdbVotes}</span>
            </p>
            <p className="font-bold">
              Release Date:{" "}
              <span className="font-normal">{details.Released}</span>
            </p>
            <p className="font-bold">
              Runtime: <span className="font-normal">{details.Runtime}</span>
            </p>
            <p className="font-bold">
              Year: <span className="font-normal">{details.Year}</span>
            </p>
            <p className="font-bold">
              Actors: <span className="font-normal">{details.Actors}</span>
            </p>
            <p className="font-bold">
              Writer: <span className="font-normal">{details.Writer}</span>
            </p>
            <p className="font-bold">
              Country: <span className="font-normal">{details.Country}</span>
            </p>
          </div>
        ) : (
          <p>Detail Not Found</p>
        )}
      </div>
    </section>
  );
}
