import { combineReducers, Reducer } from 'redux';
import sites from './sites';

export interface RootState {
  sites: SiteStoreState;
}

export default combineReducers<RootState>({
  sites
});
