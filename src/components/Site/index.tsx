import * as React from 'react';
import * as style from './style.css';
import { Header, Menu, Segment } from 'semantic-ui-react';
import { BuildingItem } from '../BuildingItem'

export namespace Site {
  export interface Props {
    site: SiteDataItem;
  }

  export interface State {
    activeBuildingIndex: number
  }
}

export class Site extends React.Component<Site.Props, Site.State> {

  constructor(props?: Site.Props, context?: any) {
    super(props, context);
  }

  handleShowBuilding = (e, { index }) => this.setState({ activeBuildingIndex: index })

  render() {
    const { site } = this.props;
    const activeBuildingIndex = this.state? this.state.activeBuildingIndex : 0;

    return (
      <div className={style.site}>
        <Header as='h2'>{site.name}</Header>
        <Menu attached='top' tabular>
          {site.buildings.map((building, index) =>
            <Menu.Item
              name={building.name}
              key={building.buildingId}
              index={index}
              active={activeBuildingIndex === index}
              onClick={this.handleShowBuilding}/>
          )}
        </Menu>

        <Segment attached='bottom'>
          <BuildingItem
            building={site.buildings.find((building, index) => {
              return index == activeBuildingIndex;
            })} />
        </Segment>
      </div>
    )
  }

}
