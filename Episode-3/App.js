import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const jsxHeading = <h1 id="heading">Namaste React using JSX🚀</h1>;

const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {Title}
    <h1 className="heading">Namaste React using Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
