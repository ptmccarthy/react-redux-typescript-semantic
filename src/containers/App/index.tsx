import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router';

import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Icon, List } from 'semantic-ui-react';

export namespace App {
  export interface Props extends RouteComponentProps<void> {

  }

  export interface State {
    /* empty */
  }
}

export class App extends React.Component<App.Props, App.State> {
  render() {
    return (
      <div className='normal'>
        <Header as='h1'>Application Header</Header>
        <Button primary>Foo</Button>
        <Button secondary>Bar</Button>
        <Header as='h3'>Some Icons in a List</Header>
        <List>
          <List.Item><Icon name='wifi'></Icon></List.Item>
          <List.Item><Icon name='alarm'></Icon></List.Item>
          <List.Item><Icon name='random'></Icon></List.Item>
        </List>
      </div>
    )
  };
}
