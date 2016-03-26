var bio = {
	"name" : "Steven Cooper",
    "role" : "web developer",
    "welcomeMsg" : "Welcome to my resume",
    "bioPic" : "images/resume_picture.jpg",
    "skills" : ["HTML", "CSS", "other things"],
    "contacts" : {
    	"location" : "Syracuse, NY",
		"email" : "stevencoop89@gmail.com",
		"mobile" : "315-481-4801",
		"github" : "github.com/ohthatsteve"
    }
}

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
		"title" : "Home Installations Technician",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste ratione sequi veritatis. Aperiam, inventore reprehenderit laudantium quidem ratione dolore perferendis dolorem. Fugiat, illum tempore nihil quam blanditiis cum ab!"
		},{
		"dates" : "2007-2011",
		"employer" : "Ford and Bryant LLC",
		"location" : "Liverpool, NY",
		"title" : "Cashier",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dicta perspiciatis exercitationem repudiandae. Ipsam quasi, sed corporis fuga doloribus. Quos sequi voluptas, labore doloremque obcaecati, modi a quo fugiat ipsam?"
		}
	]
}

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
       	"location" : "Solvay, NY",
       	"degree" : "Regents Diploma"
	}],
	"online": [
		{
			"school" : "lynda.com",
			"dates" : "2015-2016",
			"url" : "www.lynda.com/",
			"title" : ["Javascript essential training"]
		},{
			"school" : "Code Academy",
			"dates" : "2015-2016",
			"url" : "https://www.codecademy.com/",
			"title" : ["HTML & CSS",
						" JavaScript",
						" jQuery",
						" PHP",
						" Learn SQL",
						" Learn AngularJS"]
		},{
			"school" : "Udacity",
			"dates" : "2016-current",
			"url" : "https://www.udacity.com/",
			"title" : ["Front-End Web Developer Nanodegree (in progress)"]
		}
	]}

bio.display = function(){
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
		}
	}

	if(bio.contacts){
		for(contact in bio.contacts){
			switch(bio.contacts[contact]) {
				case bio.contacts.location:
					var formattedContact = HTMLlocation.replace("%data%", bio.contacts[contact]);
					$("#topContacts").append(formattedContact);
					$("#footerContacts").append(formattedContact);
					break;
				case bio.contacts.email:
					var formattedContact = HTMLemail.replace("%data%", bio.contacts[contact]);
					$("#topContacts").append(formattedContact);
					$("#footerContacts").append(formattedContact);
					break;
				case bio.contacts.mobile:
					var formattedContact = HTMLmobile.replace("%data%", bio.contacts[contact]);
					$("#topContacts").append(formattedContact);
					$("#footerContacts").append(formattedContact);
					break;
				case bio.contacts.github:
					var formattedContact = HTMLgithub.replace("%data%", bio.contacts[contact]);
					$("#topContacts").append(formattedContact);
					$("#footerContacts").append(formattedContact);
					break;
				default:
					var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]).replace("%contact%", contact);
					$("#topContacts").append(formattedContact);
					$("#footerContacts").append(formattedContact);
			}
		}
	}
}

work.display = function(){
	if(work){
		$("#work").append(HTMLworkStart);
		for(job in work.jobs){
			if (work.jobs.hasOwnProperty(job)){
				var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var wLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				var formattedTitle = employer + title;
				$(".work-entry:last").append(formattedTitle, dates, wLocation, description);
			}
		}
	}
}

projects.display = function(){
	for(project in projects.project){
			if (projects.project.hasOwnProperty(project))
			{
				$("#projects").append(HTMLprojectStart);
				var title = HTMLprojectTitle.replace("%data%",projects.project[project].title);
				var dates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
				var description = HTMLprojectDescription.replace("%data%",projects.project[project].description);
				$(".project-entry:last").append(title, dates, description);
			}
	}
}

education.schools.display = function (){
	$("#education").append(HTMLschoolHeader);
	for(school in education.schools){
		if (education.schools.hasOwnProperty(school))
		{
			$("#education").append(HTMLschoolStart);
			var schoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var schoolDate = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var schoolMajor = HTMLschoolMajor.replace("%data%","");
			$(".education-entry:last").append(schoolName + schoolMajor + schoolDegree, schoolDate, schoolLocation);
		}
	}
	$('.education-entry:last').remove();
}
education.online.display = function() {
	if(education.online){
		$("#education").append(HTMLonlineClasses);
		for(online in education.online){
			if (education.online.hasOwnProperty(online))
			{
				var onlineSchool = HTMLonlineSchool.replace("%data%",education.online[online].school);
				var onlineDates = HTMLonlineDates.replace("%data%",education.online[online].dates);
				var onlineTitle = HTMLonlineTitle.replace("%data%",education.online[online].title);
				var onlineUrl = HTMLonlineURL.replace("%data%",education.online[online].url);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(onlineTitle + onlineSchool,onlineDates,onlineUrl);

			}
		}
	}
		$('.education-entry:last').remove();
}


bio.display();
work.display();
projects.display();
education.schools.display();
education.online.display();
$("#location").append(googleMap);

$(".nav-item").click(function(){
	var active,
		myElement,
		selection;
	active = null;
	active = $('#nav').find('.active');
	if (active != null && active.attr('id')!= $(this).attr('id').replace('-nav',"")){
		$(active).toggleClass('active').toggleClass('inactive');
	}
	selection = $(this).attr('id').replace('-nav',"");
	$('#'+selection).toggleClass('active').toggleClass('inactive');
})