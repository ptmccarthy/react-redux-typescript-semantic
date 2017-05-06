import * as React from 'react';
import * as SiteActions from '../../actions/sites';
import * as style from './style.css';
import { Site } from '../Site';
import { Header, Icon } from 'semantic-ui-react';

export namespace Sites {
  export interface Props {
    sites: SiteDataItem[];
    actions: typeof SiteActions;
  }

  export interface State {
    // empty
  }
}

export class Sites extends React.Component<Sites.Props, Sites.State> {

  constructor(props?: Sites.Props, context?: any) {
    super(props, context)
  }

  render() {
    const { sites } = this.props;

    return (
      <div>
        {sites.map(site =>
          <Site key={site.siteId} site={site}/>
        )}
      </div>
    )
  }

}
