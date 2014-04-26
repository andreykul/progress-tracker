Schedule = new Meteor.Collection("Schedule");
Tasks = new Meteor.Collection("Tasks");

Meteor.startup(function(){
	count = Schedule.find({}).count();
	if (count === 0){
		Schedule.insert({
			name: "12-16 Months",
			date: "June - November",
			order: 0,
			tasks: []
		});

		Schedule.insert({
			name: "8-10 Months",
			date: "December - January",
			order: 1,
			tasks: []
		});

		Schedule.insert({
			name: "5-7 Months",
			date: "Febuary - April",
			order: 2,
			tasks: []
		});

		Schedule.insert({
			name: "4 Months",
			date: "May",
			order: 3,
			tasks: []
		});

		Schedule.insert({
			name: "3 Months",
			date: "June",
			order: 4,
			tasks: []
		});

		Schedule.insert({
			name: "2 Months",
			date: "July",
			order: 5,
			tasks: []
		});

		Schedule.insert({
			name: "1 Month",
			date: "August",
			order: 6,
			tasks: []
		});

		Schedule.insert({
			name: "2 Weeks",
			date: "August 17th - 23rd",
			order: 7,
			tasks: []
		});

		Schedule.insert({
			name: "1 Week",
			date: "August 24th - 30th",
			order: 8,
			tasks: []
		});

		Schedule.insert({
			name: "Wedding Day",
			date: "September 6th",
			order: 9,
			tasks: []
		});
	}
		
});