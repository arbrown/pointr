//Server voting logic

if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      removeAllVoters: function() {

        return Voters.remove({});

      },

      clearVotes: function() {
      	return Votes.remove({});
      },

      removeVotes: function(voter) {
      	Votes.remove({voter: voter});
      },


    });

  });

}