var React = require("react");
var ReactDom = require("react-dom");
var SchoolsList = require("./components/SchoolList.jsx");

var _schools = [
  {name: "Lovedale", tagline: "This is a wonderful school"},
  {name: "Bishop", tagline: "Another great school"}
];

function render() {
  ReactDom.render(<SchoolsList schools = {_schools} />,
  document.getElementById("container"))
}
render();
