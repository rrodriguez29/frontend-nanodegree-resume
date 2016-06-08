/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ["awesomeness","programming","teaching","js"];

//$("#main").append(skills);

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

$("#main").append(bio.name);

var work = {};
work.jobPosition = "Jr Web Developer";
work.employer = "Hunter College";
work.yearsWorked = "2013-2016";
work.city = "New York";

$("#main").append(work["jobPosition"]);

var education = {};
education["schoolAttended"] = "Hunter College";
education["yearsEnrolled"] = "5";
education["schoolLocation"] = "New York";

$("#main").append(education.schoolAttended);
