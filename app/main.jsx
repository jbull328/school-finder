var React = require("react");
var ReactDom = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");
var schoolsStore = require("./stores/schoolsStore");
var _schools = schoolsStore.getSchools();
schoolsStore.onChange(function(schools) {
  _schools = schools;
  render();
});

function render() {
  ReactDom.render(<SchoolsList schools = {_schools} />,
  document.getElementById("container"))
}
render();
