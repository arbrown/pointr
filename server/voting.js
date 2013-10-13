//Server voting logic

if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      removeAllVoters: function() {

        return Voters.remove({});

      },

      clearVotes: function() {
      	return Votes.remove({});
      }

    });

  });

}