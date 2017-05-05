import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: SiteStoreState = [];

export default handleActions<SiteStoreState, SiteDataItem>({
  [Actions.SITE_DATA_RETRIEVED]: (state, action) => {
    return action.payload
  }
}, initialState);

