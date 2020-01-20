import initialData from './data';

const resolvers = {
    Query: { books: () => initialData },
  };

export {resolvers};