import { connect, set } from 'mongoose';
import { NODE_ENV, DB_USERNAME, DB_PASSWORD, DB_HOST } from '@config';

export const dbConnection = async () => {
  const dbConfig = {
    url: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`,
  };

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  await connect(dbConfig.url)
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));
};
