Template.nav_task_list.helpers({
	tasks: function(){
		return Tasks.find({belongsTo: this._id});
	},
	color: function(status){
		if (status === "Done")
			return "text-success";
		else if (status === "In Progress")
			return "text-warning";

		return "text-info";
	},
	idify: function(name){
		return name.replace(' ', '_');
	}
});