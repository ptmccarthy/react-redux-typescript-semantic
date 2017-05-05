import * as React from 'react';
import * as style from './style.css';
import { Header, Icon } from 'semantic-ui-react';
import { BuildingItem } from '../BuildingItem'

export namespace Site {
  export interface Props {
    site: SiteDataItem;
  }

  export interface State {
    // empty
  }
}

export class Site extends React.Component<Site.Props, Site.State> {

  constructor(props?: Site.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { site } = this.props;

    return (
      <div>
        <Header as='h3'>{site.name}</Header>
        <ul>
          {site.buildings.map((building) =>
            <BuildingItem building={building} />
          )}
        </ul>
      </div>
    )
  }

}
