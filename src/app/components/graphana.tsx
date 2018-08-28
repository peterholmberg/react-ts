import React, { PureComponent } from "react";

export interface GraphanaProps {
  compiler: string;
  framework: string;
}

export default class Graphana extends PureComponent<GraphanaProps, {}> {
  render() {
    return <h1>Graphana</h1>;
  }
}
