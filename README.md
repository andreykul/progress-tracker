#Progress Tracker
---
Meteor.js application to set goal and keep track of them.
The application is for personal usage only since it is not secure in anyway.

##Packages
---
The application uses the following packages:

* bootstrap
* underscore
* jquery
* insecure
* preserve-inputs
* autopublish

##Structure
---
Every template has its own folder.

Each folder has two files _.html_ and _.js_

_.html_ : just html ...

_.js_ : contains `Meteor.helpers` and `Meteor.events`


##Collections
---

The application is built from two simple collections

1. Schedule : Seperates tasks into groups
	* name : Name for the group of tasks
	* date : Some sense of start and end
	* order : Order within other groups
2. Tasks : The actual task to do
	* name : Name for the task
	* price : Price if it cost anything
	* status : Not Started / In Progress / Done
	* details : Extra information about the task

##Installation
* Create new Meteor app
* Remove default files
* Add repo files
* Add Packages from Above
* `meteor run`
* You should have it running at `localhost:3000`

##License
None, Do what ever with it!


