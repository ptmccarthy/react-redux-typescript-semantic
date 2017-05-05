import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const dataRetrieved = createAction<SiteDataItem>(Actions.SITE_DATA_RETRIEVED);
