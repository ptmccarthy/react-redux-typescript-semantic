import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const dataRetrieved = createAction<void>(Actions.DATA_RETRIEVED);
