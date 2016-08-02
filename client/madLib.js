let exclamation, adverb, noun, verb;
let madLib;

Template.body.events({
	'click #submitButton': function(event, template){
		event.preventDefault();
		console.log('Hello World..');
		const exclamation = template.find('#exclamation').value;
		const adverb = template.find('#adverb').value;
		const noun = template.find('#noun').value;
		const verb = template.find('#verb').value;

		console.log(exclamation + "! you say, as you " +adverb + 
			" jump onto your " + noun + " and " + verb + " into the sunset.");

		madLib = exclamation + "! you say, as you " +adverb + 
			" jump onto your " + noun + " and " + verb + " into the sunset.";
		$("#createMadLib").hide();	
		$('#createMadLib').text(madLib).css("color","#0000ff").fadeIn('slow', function(){

		});
	}
});
