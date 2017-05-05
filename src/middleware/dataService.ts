import axios from 'axios';
import * as Actions from '../constants/actions';

const dataService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'GET_SITE_DATA':
      axios.get('/api/sites')
        .then((response) => {
          next({
            type: Actions.SITE_DATA_RETRIEVED,
            payload: response.data
          });
        })
        .catch((error) => {
            return next({
              type: Actions.SITE_DATA_ERROR,
              error
            });
        });
    break

  default:
    break
  }
};

export default dataService
