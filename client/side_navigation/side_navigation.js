Template.side_navigation.helpers({
	schedule: function () {
		return Schedule.find({},{sort: {order:-1} });
	}
});