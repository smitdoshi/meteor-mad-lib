
Template.body.events({
	'click #submitButton': function(events){
		console.log('Hello World..');
		events.preventDefault();
	}
});