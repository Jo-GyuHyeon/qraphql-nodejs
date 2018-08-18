let movies = [
  {
    id: 0,
    name: "Star Wars - the new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 5
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
]

export const getMovies = () => movies;
export const getById = (id) => {
  const filterMovies = movies.filter(movie => movie.id === id);
  return filterMovies[0];
};
export const deleteMovie = (id) => {
  const cleanMovies = movies.filter(movie => movie.id !== id);
   if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  }
  movies.push(newMovie);
  return newMovie;
};