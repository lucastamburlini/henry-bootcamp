import React from "react";

class Botones extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
        <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
      </div>
    );
  }
}

export default Botones;

/* render() {

    const { alerts: { m1, m2 } } = this.props;

    return (
      <div>
        <button onClick={() => alert(m1)}>Módulo 1</button>
        <button onClick={() => alert(m2)}>Módulo 2</button>
      </div>
    );
  } */
