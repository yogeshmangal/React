import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        bio: "Dummy Bio",
      },
    };
  }

  async componentDidMount() {
    console.log("Component Did Mount is called.");
    //API Call
    const data = await fetch("https://api.github.com/users/yogeshmangal");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Component Did Update is called in the last.");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount is called.");
  }

  render() {
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img
          src={this.state.userInfo.avatar_url}
          width="150"
          height="200"
        ></img>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Bio: {this.state.userInfo.bio}</h4>
      </div>
    );
  }
}

export default UserClass;
