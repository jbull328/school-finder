var dispatcher = require('../dispatcher');

function SchoolStore() {
  var listeners = [];
  var schools = [{ name: "Lovedale", tagline: "A wonderful school"},
                 { name: "Bishop", tagline: "An awesome school"},
                 { name: "Daffodils", tagline: "An excelent school"}];

  function getSchools() {
    return schools;
  }

  function onChange(listener) {
    school.push(school)
    triggerListeners();
  }

  function addSchool(school) {
    var _index;
    school.map(function (s, index) {
      if (s.name === school.name) {
          _index = index;
      }
    });
    schools.splice(_index, 1);
    triggerListeners();
  }

  function triggerListeners() {
    listener.forEach(function(listener) {
      listener(schools);
    });
  }

  dispatcher.register(function(payload) {
    var split = payload.type.split(":");
    if (split[0] === "school") {
      switch (split[1]) {
        case "addSchool":
            addSchool(payload.school);
        case "deleteSchool":
            deleteSchool(payload.school);
        break;

      }
    }
  });

  return {
    getSchools: getSchools,
    onChange: onChange
  }
}

module.exports = SchoolStore();
