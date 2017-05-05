import * as React from 'react';
import * as SiteActions from '../../actions/sites';
import * as style from './style.css';

export namespace Sites {
  export interface Props {
    sites: SiteDataItem[];
    actions: typeof SiteActions;
  }

  export interface State {
    // empty
  }
}

export class SitesList extends React.Component<Sites.Props, Sites.State> {

  constructor(props?: Sites.Props, context?: any) {
    super(props, context)
  }

  render() {
    const { sites } = this.props;

    return (
      <ul>
        {sites.map(site =>
          <li>{site.name}</li>
        )}
      </ul>
    )
  }

}