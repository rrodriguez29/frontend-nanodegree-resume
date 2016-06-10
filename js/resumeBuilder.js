/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {"name":"Ricardo",
  "role":"Web Developer",
  "contacts":{
    "mobile":"347-285-6808",
    "email":"ricardo.rodriguez368@icloud.com",
    "github":"rrodriguez29",
    "twitter":"@",
    "location":"New York"
  },
  "welcomeMessage":"lorem ipsum dolor sit amet etc",
  "skills":["awesomeness","programming","js"],
  "bioPic":"images/fry.jpg"
}

var work = {};
work.jobPosition = "Jr Web Developer";
work.employer = "Hunter College";
work.yearsWorked = "2013-2016";
work.city = "New York";

var education = {
  "schools":[
    {
      "name":"Hunter College",
      "city":"New York, NY, USA",
      "degree":"BA",
      "major":["CompSci","Math"]
    },
    {
      "name":"Temp College",
      "city":"New York, NY, USA",
      "degree":"MS",
      "major":["CompSci"]
    }
  ]
}

var projects = {
  "projects":[
    {
      "title":"Sample Project 1",
      "dates":"2014",
      "description":"Created video game that plays tetris using arduino uno",
      "images":[
        "images/arduino.png",
        "images/arduinoFront.jpg"
      ]
    }
  ]
}

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
}

for (var job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data",work.jobs[job]title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}
