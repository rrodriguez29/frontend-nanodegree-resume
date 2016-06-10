/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Ricardo Rodriguez",
    "role": "Web developer",
    "contacts": {
        "mobile": "347-285-6808",
        "email": "ricardo.rodriguez@techie.com",
        "github": "rrodriguez29",
        "twitter": "",
        "location": "New York"
    },
    "welcomeMessage": "Hello!",
    "skills": ["c++", "PHP", "HTML"],
    "bioPic": "images/fry.jpg"
}

bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGit);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedBioPic);
}

bio.display();

var work = {
    "jobs": [{
        "employer": "Hunter College",
        "title": "Jr Web Developer",
        "location": "New York City",
        "dates": "in progress",
        "description": "Drupal 7 web developer, code in html,css,javascript and php"
    }, {
        "employer": "Mouse Squad",
        "title": "Computer Technician",
        "location": "Long Island City",
        "dates": "2008-2009",
        "description": "Troubleshoot computer issues relating to hardware or software."
    }],
    "display": function disp() {}
}

var education = {
    "schools": [{
        "name": "Hunter College",
        "location": "New York, NY, USA",
        "degree": "BA",
        "major": ["CompSci", "Math"],
        "dates": "2009-2014",
        "url": "google.com"
    }, {
        "name": "Temp College",
        "location": "New York, NY, USA",
        "degree": "MS",
        "major": ["CompSci"],
        "dates": "future",
        "url": "yahoo.com"
    }],
    "onlineCourses":[{
        "title":"javascript",
        "school":"Udacity",
        "date":"in progress",
        "url":"udacity.com"
    }],
    "display":function disp(){}
}

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "Created video game that plays tetris using arduino uno",
        "images": [
            "images/arduino.png",
            "images/arduinoFront.jpg"
        ]
    },
    {
        "title":"Sample Project 2",
        "dates":"2016",
        "description":"I did some stuff with drupal",
        "images":[
            "images/drupal.png",
            "images/otherDrupal.png"
        ]
    }]
}

projects.display = function(){
    for(var project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        for (var image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

projects.display();

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
}

function displayWork(){
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

$(document).click(function(loc){
    logClicks(loc.pageX,loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(fullName){
    var split = fullName.split(" ");
    var firstName = split[0].substr(0,1).toUpperCase() + split[0].substr(1).toLowerCase();
    var lastName = split[1].toUpperCase();

    return firstName + " " + lastName;
}

$("#mapDiv").append(googleMap);
