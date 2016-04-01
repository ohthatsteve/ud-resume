var bio = {
    "name": "Steven Cooper",
    "role": "web developer",
    "contacts": {
        "location": "Syracuse, NY",
        "email": "stevencoop89@gmail.com",
        "mobile": "315-481-4801",
        "github": "github.com/ohthatsteve"
    },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["HTML",
        "CSS",
        "Javascript",
        "Other things"
    ],
    "biopic": "images/bio-pic.jpg",
    "display": function() {
        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(bioPic);
        $("#header").prepend(role);
        $("#header").prepend(name);

        if (bio.skills) {
            $("#header").append(HTMLskillsStart);
            var count = 0;
            while (count < bio.skills.length) {
                var skill = HTMLskills.replace("%data%", bio.skills[count]);
                $("#skills").append(skill);
                count++;
            }
        }

        if (bio.contacts) {
            var formattedContact;
            for (var contact in bio.contacts) {
                if (bio.contacts.hasOwnProperty(contact)) {
                    switch (bio.contacts[contact]) {
                        case bio.contacts.location:
                            formattedContact = HTMLlocation.replace("%data%", bio.contacts[contact]);
                            $("#top-contacts").append(formattedContact);
                            $("#footer-contacts").append(formattedContact);
                            break;
                        case bio.contacts.email:
                            formattedContact = HTMLemail.replace("%data%", bio.contacts[contact]);
                            $("#top-contacts").append(formattedContact);
                            $("#footer-contacts").append(formattedContact);
                            break;
                        case bio.contacts.mobile:
                            formattedContact = HTMLmobile.replace("%data%", bio.contacts[contact]);
                            $("#top-contacts").append(formattedContact);
                            $("#footer-contacts").append(formattedContact);
                            break;
                        case bio.contacts.github:
                            formattedContact = HTMLgithub.replace("%data%", bio.contacts[contact]);
                            $("#top-contacts").append(formattedContact);
                            $("#footer-contacts").append(formattedContact);
                            break;
                        default:
                            formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]).replace("%contact%", contact);
                            $("#top-contacts").append(formattedContact);
                            $("#footer-contacts").append(formattedContact);
                    }
                }
            }
        }
    }
};

var work = {
    "jobs": [{
        "dates": "2014-current",
        "employer": "Middle Ages Bar and Grill",
        "location": "Syracuse, NY",
        "title": "Sales Associate, Porter",
        "description": "Maintain a positive atmosphere while interacting with international travelers. Train new hires. Keep six retail locations well stocked throughout the day."
    }, {
        "dates": "2011-2014",
        "employer": "Smooth Waves AV",
        "location": "Tampa, FL",
        "title": "Home Installations Technician",
        "description": "Work on a team to install home entertainment systems, security systems, and various network devices both residential and commercial."
    }, {
        "dates": "2007-2011",
        "employer": "Ford and Bryant LLC",
        "location": "Liverpool, NY",
        "title": "Assistant manager",
        "description": "Aid in selection and training of new hires. Order merchanise for store. Keep track of inventory."
    }],
    "display": function() {
        if (work) {
            $("#work").append(HTMLworkStart);
            for (var job in work.jobs) {
                if (work.jobs.hasOwnProperty(job)) {
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
};

var projects = {
    "project": [{
        "title": "Portfolio",
        "dates": "February 2016-current",
        "description": "Udacity portfolio project",
        "images": {
            "mobile": "images/project1-1.jpg",
            "desktop": "images/project1-2.jpg"
        }
    }],
    "display": function() {
        for (var project in projects.project) {
            if (projects.project.hasOwnProperty(project)) {
                $("#projects").append(HTMLprojectStart);
                var title = HTMLprojectTitle.replace("%data%", projects.project[project].title);
                var dates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
                var description = HTMLprojectDescription.replace("%data%", projects.project[project].description);
                $(".project-entry:last").append(title, dates, description);
                for (var image in projects.project[project].images) {
                    if (projects.project.hasOwnProperty(project)) {
                        var projectImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
                        $(".project-entry:last").append(projectImage);
                    }
                }
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Solvay High School",
        "dates": "2007",
        "location": "Solvay, NY",
        "degree": "Regents Diploma"
    }],
    "onlineCourses": [{
        "school": "lynda.com",
        "dates": "2016",
        "url": "www.lynda.com/",
        "title": ["Javascript essential training"]
    }, {
        "school": "Code Academy",
        "dates": "2016",
        "url": "https://www.codecademy.com/",
        "title": ["HTML & CSS",
            " JavaScript",
            " jQuery",
            " PHP",
            " Learn SQL",
            " Learn AngularJS"
        ]
    }, {
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/",
        "title": ["Front-End Web Developer Nanodegree (in progress)"]
    }],
    "display": function() {
        $("#education").append(HTMLschoolHeader);
        for (var school in education.schools) {
            if (education.schools.hasOwnProperty(school)) {
                $("#education").append(HTMLschoolStart);
                var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                var schoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                var schoolMajor = HTMLschoolMajor.replace("%data%", "");
                $(".education-entry:last").append(schoolName + schoolMajor + schoolDegree, schoolDate, schoolLocation);
            }
        }

        if (education.onlineCourses) {
            $("#education").append(HTMLonlineClasses);
            for (var course in education.onlineCourses) {
                if (education.onlineCourses.hasOwnProperty(course)) {
                    var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                    var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                    var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                    $("#education").append(HTMLschoolStart);
                    $(".education-entry:last").append(onlineTitle + onlineSchool, onlineDates, onlineUrl);

                }
            }
        }

    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#location").append(googleMap);

//Create drop downs for mobile, javascript media query instructions from http://www.sitepoint.com/javascript-media-queries/
$(".nav-item").click(function() {

    var mq = window.matchMedia("(max-width: 480px)");

    //IF window width matches mobile screen width
    if (mq.matches) {

        var active,
            selection;
        active = null;
        //Find any nav items with the active class
        active = $('#nav').find('.active');

        //IF there is an active element AND the active element is not the selected element
        if (active && active.attr('id') != $(this).attr('id').replace('-nav', "")) {
            //Set current active element to inactive
            $(active).toggleClass('active').toggleClass('inactive');
        }
        //Toggle selected element between active and inactive
        selection = $(this).attr('id').replace('-nav', "");
        $('#' + selection).toggleClass('active').toggleClass('inactive');
    }
});