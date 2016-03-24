var bio = {
	"name" : "Steve Cooper",
    "role" : "web developer",
    "welcomeMsg" : "Welcome to my resume",
    "bioPic" : "images/resume_picture.jpg",
    "skills" : ["HTML", "CSS", "other things"],
    "contacts" : {
    	"location" : "Syracuse, NY",
		"email" : "stevencoop89@gmail.com",
		"mobile" : "315-481-4801",
		"github" : "http://github.com/ohthatsteve"
    }
};

var contacts = {
	"location" : "Syracuse, NY",
	"email" : "stevencoop89@gmail.com",
	"mobile" : "315-481-4801",
	"github" : "http://github.com/ohthatsteve"
};

var work = {
	"jobs" : [
	{
		"dates" : "2014-current",
		"employer" : "Local Food Concept",
		"location" : "Syracuse, NY",
		"title" : "Cashier",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat alias cumque ad laudantium, voluptatem at veniam voluptatibus, culpa ullam mollitia corporis explicabo! Neque iusto quam atque, sunt quia id ullam!"
	},{
		"dates" : "2011-2014",
		"employer" : "Smooth Waves AV",
		"location" : "Tampa, FL",
		"title" : "Home Installations Assistant",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste ratione sequi veritatis. Aperiam, inventore reprehenderit laudantium quidem ratione dolore perferendis dolorem. Fugiat, illum tempore nihil quam blanditiis cum ab!"
		},{
		"dates" : "2007-2011",
		"employer" : "Ford and Bryant LLC",
		"location" : "Liverpool, NY",
		"title" : "Cashier",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dicta perspiciatis exercitationem repudiandae. Ipsam quasi, sed corporis fuga doloribus. Quos sequi voluptas, labore doloremque obcaecati, modi a quo fugiat ipsam?"
		}
	]

};

var projects = {
	"project":[
		{
			"title" : "Portfolio",
			"dates" : "February 2016-current",
			"description" : "Udacity portfolio project",
			"image" : "#"
		},{
			"title" : "Galaxy Index",
			"dates" : "November 2015-current",
			"description" : "View information about various galaxies",
			"image" : "#"
		}
	]

}

var education = {
	"schools":[
	{
		"name"  : "Solvay High School",
		"dates" : "2003-2007",
       	"location" : "Solvay, Ny"
	}],
	"online": [
		{
			"name" : "lynda.com",
			"dates" : "2014-2015",
			"url" : "www.lynda.com/",
			"title" : ["Javascript essential training"]
		},{
			"name" : "Code Academy",
			"dates" : "2015-2016",
			"url" : "https://www.codecademy.com/",
			"title" : ["HTML & CSS",
						"JavaScript",
						"jQuery",
						"PHP",
						"Learn SQL",
						"Learn AngularJS"]
		},{
			"name" : "Udacity",
			"dates" : "2016-current",
			"url" : "https://www.udacity.com/",
			"title" : "[Front-End Web Developer Nanodegree (in progress)]"
		}
	]};


var name = HTMLheaderName.replace("%data%",bio.name);
var role = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(role);
$("#header").prepend(name);

if(bio.skills){
	$("#header").append(HTMLskillsStart);
	var count = 0;
	while(count<bio.skills.length){
		var skill = HTMLskills.replace("%data%", bio.skills[count]);
		$("#skills").append(skill);
		count++;
	};

};

if(contacts){
	for(contact in contacts){
		switch(contacts[contact]) {
			case contacts.location:
				var contact = HTMLlocation.replace("%data%", contacts[contact]);
				$("#topContacts").append(contact);
				$("#footerContacts").append(contact);
				break;
			case contacts.email:
				var contact = HTMLemail.replace("%data%", contacts[contact]);
				$("#topContacts").append(contact);
				$("#footerContacts").append(contact);
				break;
			case contacts.mobile:
				var contact = HTMLmobile.replace("%data%", contacts[contact]);
				$("#topContacts").append(contact);
				$("#footerContacts").append(contact);
				break;
			case contacts.github:
				var contact = HTMLgithub.replace("%data%", contacts[contact]);
				$("#topContacts").append(contact);
				$("#footerContacts").append(contact);
				break;
			default:
				var contact = HTMLcontactGeneric.replace("%data%", contacts[contact]);
				$("#topContacts").append(contact);
				$("#footerContacts").append(contact);
		}
	}
}
function buildWork(){
	if(work){
		$("#workExperience").append(HTMLworkStart);
		for(job in work.jobs){
			if (work.jobs.hasOwnProperty(job)){
				var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var wLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				var formattedTitle = employer + title;
				$(".work-entry:last").append(formattedTitle);
				$(".work-entry:last").append(dates);
				$(".work-entry:last").append(wLocation);
				$(".work-entry:last").append(description);
			}
		}
	}
}

buildWork();

$(document).click(function(loc) { 
	logClicks(loc.projectX,loc.projectY);
 });

projects.display = function(){
	for(project in projects.project){
			if (projects.project.hasOwnProperty(project))
			{
				$("#projects").append(HTMLprojectStart);
				var title = HTMLprojectTitle.replace("%data%",projects.project[project].title);
				var dates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
				var description = HTMLprojectDescription.replace("%data%",projects.project[project].description);

				$(".project-entry:last").append(title);
				$(".project-entry:last").append(dates);
				$(".project-entry:last").append(description);




			}
	}
}

projects.display();
$("#mapDiv").append(googleMap);