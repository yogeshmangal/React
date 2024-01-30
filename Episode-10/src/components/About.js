import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>

        {/* Functional Component */}
        <User name="Yogesh" />

        {/* Class Component  */}
        <UserClass name="Shalu" location="Bengaluru" />
      </div>
    );
  }
}

export default About;
