import * as React from 'react';
import * as style from './style.css';

export namespace BuildingItem {
  export interface Props {
    building: Building
  }

  export interface State {

  }
}

export class BuildingItem extends React.Component<BuildingItem.Props, BuildingItem.State> {

  constructor(props?: BuildingItem.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { building } = this.props;

    if (!building.workCenters) {
      return <span>There are no active work centers at this site.</span>
    }

    return (
      <ul>
        {building.workCenters.map((workCenter) =>
          <li key={workCenter.workCenterId}>{workCenter.name}</li>
        )}
      </ul>
    )
  }
}
