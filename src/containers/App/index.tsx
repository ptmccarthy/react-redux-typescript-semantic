import * as React from 'react';
import * as SiteActions from '../../actions/sites';
import './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Sites } from '../../components';

import 'semantic-ui-css/semantic.min.css';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    sites: SiteDataItem[],
    actions: typeof SiteActions
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {
  render() {
    const { sites, actions } = this.props;
    return (
      <div>
        <Sites sites={sites} actions={actions}/>
      </div>
    )
  };
}

function mapStateToProps(state: RootState) {
  return {
    sites: state.sites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SiteActions as any, dispatch)
  }
}
