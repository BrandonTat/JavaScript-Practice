import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const Panes = [
  {title: "one", content:"I am the first"},
  {title: "two", content:"I am the second"},
  {title: "three", content:"I am the last"}
];

class Root extends React.Component {
  render() {
    return(
      <div id="widgets">
        <Clock />
        <Tabs panes={Panes}/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});
