import * as mockDB from './db';
import { getMovies, getSuggestions } from "./rest_db";
const resolvers = {
  Query: {
    moviesMock: () => mockDB.getMovies(),
    movieMock: (_, { id }) => mockDB.getById(id),
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
  Mutation: { 
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_,{id}) => deleteMovie(id)
  }
};

export default resolvers;