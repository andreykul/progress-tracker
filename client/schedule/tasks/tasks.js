Template.tasks.helpers({
	tasks: function(){
		return Tasks.find({belongsTo: this._id });
	}
});


Template.tasks.events({
	'blur .details': function(event, template){
		details = $(event.target).text();
		Tasks.update( { _id: this._id }, { $set: { details: details } } );
	},
	'blur .price': function(event, template){
		price = $(event.target).text();
		Tasks.update( { _id: this._id }, { $set: { price: price } } );
	},
	'blur .name': function(event, template){
		name = $(event.target).text();
		Tasks.update( { _id: this._id }, { $set: { name: name } } );
	},
	'click .status': function(event, template){
		event.preventDefault();
		status = $(event.target).text();
		Tasks.update({ _id: this._id }, { $set: { status: status } } );
	},
	'click .remove-task': function(event, template){
		Tasks.remove( { _id: this._id } );
	}
});