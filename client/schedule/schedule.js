Template.schedule.helpers({
	schedule: function () {
		return Schedule.find({},{sort: {order: -1} });
	}
});

Template.schedule.events({
	'click .add-task': function(){
		task = Tasks.insert({name: "Task Name", price: "price", details: "Details", status:"Not Started", belongsTo: this._id});
	},
	'click #add-schedule': function(event, template){
		scheduleName = template.find("#schedule-name");
		date = template.find("#schedule-date");

		Schedule.insert({
			name: scheduleName.value,
			date: date.value,
			order: Schedule.find().count()
		});

		scheduleName.value = "";
		date.value = "";
	},
	'click .order-up': function(){
		if (this.order < Schedule.find().count() - 1)
			Schedule.update({_id: this._id},{$inc: {order: 1}});
	},
	'click .order-down': function(){
		if (this.order > 0)
			Schedule.update({_id: this._id},{$inc: {order: -1}});
	},
	'click .remove-schedule': function(){
		tasks = Tasks.find({belongsTo: this._id}).fetch();

		//Remove tasks that belong to this schedule
		_.each(tasks, function(task){
			Tasks.remove({_id: task._id});
		});

		//Remove schedule
		Schedule.remove({_id: this._id});
	},
	'focusout .schedule-title': function(event, template){
		newName = template.find(".schedule-name").innerHTML;
		newDate = template.find(".schedule-date").innerHTML;

		Schedule.update({_id: this._id},{
			$set: {
				name: newName,
				date: newDate
			}
		});
	}
});