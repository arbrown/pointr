Template.voters.voter_list = function () {
  return Voters.find({});
};

Template.voters.canned = function () {
  return [{name: "Robot"}, {name: "iRobot"}];
}

Template.results.show = function () {
  return true;
}
