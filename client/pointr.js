Template.voters.voter_list = function () {
  return Voters.find({});
};

Template.voters.canned = function () {
  return [{name: "Robot"}, {name: "iRobot"}];
};

Template.results.show = function () {
  return true;
};

Template.buttons.points = function () {
  return [
  {display: "1", value: 1},
  {display: "2", value: 2},
  {display: "3", value: 3},
  {display: "4", value: 4},
  {display: "5", value: 5},
  ]
};

Template.pointButton.events({
  'click .voteButton': function (evt) {
    var id = Session.get('voter_id');
    var voter = Voters.findOne(id);
    var already_voted = Votes.findOne({voter: voter});
    if (!already_voted){
      Votes.insert({voter: voter, vote: this.value});
    }
    else {
      //Votes.update({voter_id: id}, {$set {vote: this.value}});
      Votes.update(already_voted._id, {$set: {vote: this.value}});
    }
  },

});

Template.name.events({
  'keyup input#namebox': function (evt) {
    var name = $('input#namebox').val().trim();
    Voters.update(Session.get('voter_id'), {$set: {name: name}});
  },
});

Template.voter.events({
  'click .destroy': function() {
    var vote = Votes.findOne({voter: Voters.findOne(this._id)});
    //Meteor.call('remove_votes', this);
    if (vote){
      Votes.remove(vote._id);
    }
    Voters.remove(this._id);
  },
});

Template.results.show = function() {
  return Votes.find().count() == Voters.find().count();
};

Template.results.voters = function() {
  return Votes.find();
}

Template.results.events({
  'click .clearVotes': function() {
    Meteor.call('clearVotes');
  }
});

Meteor.startup(function () {
  var voter_id = Voters.insert({name: 'change your name'});
  Session.set('voter_id', voter_id);
});

