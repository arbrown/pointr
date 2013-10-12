Template.voters.voter_list = function () {
  return Voters.find({});
};

Template.voters.canned = function () {
  return [{name: "Robot"}, {name: "iRobot"}];
};

Template.results.show = function () {
  return true;
}

Template.name.events({
  'keyup input#namebox': function (evt) {
    var name = $('input#namebox').val().trim();
    Voters.update(Session.get('voter_id'), {$set: {name: name}});
  }
});


Meteor.startup(function () {

  var voter_id = Voters.insert({name: 'change your name'});
  Session.set('voter_id', voter_id);
});

