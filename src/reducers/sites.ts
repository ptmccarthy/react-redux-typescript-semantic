import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: SiteStoreState = [{
  name: 'test'
}];

export default handleActions<SiteStoreState, SiteDataItem>({
  [Actions.DATA_RETRIEVED]: (state, action) => {
    return action.payload
  }
}, initialState);

