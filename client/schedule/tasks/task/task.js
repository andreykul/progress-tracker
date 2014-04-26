Template.task.helpers({
	color: function(status){
		if (status === "Done")
			return "alert alert-success";
		else if (status === "In Progress")
			return "alert alert-warning";

		return "alert alert-info";
	},
});