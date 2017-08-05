
var bio = {
  "name": "Marko Burazin",
  "role": "Web Developer",
  "contacts": {
    "mobile": "+46 72 5074916",
    "email": "marko.burazin1@gmail.com",
    "github": "https://github.com/mburazin",
    "location": "Stockholm, Sweden"
  },
  "welcomeMessage": "Welcome to the coding heaven!",
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "Erlang",
    "PHP",
    "C",
    "git"
  ],
  "biopic": "images/me_naturalpools.png",

  "display": function() {
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);

    $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
    $('#header').append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage)
    $('#header').append(formattedWelcomeMsg);

    if (this.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      this.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace('%data%', skill);
        $('#skills').append(formattedSkill);
      });
    }
  }
};


var work = {
  "jobs": [
    {
      "employer": "Ericsson AB",
      "title": "Software Developer",
      "location": "Stockholm, Sweden",
      "dates": "2014 - present",
      "description": "Working as a senior software developer for next generation radio nodes"
    },
    {
      "employer": "Ericsson Nikola Tesla",
      "title": "Software Developer",
      "location": "Zagreb, Croatia",
      "dates": "2008 - 2014",
      "description": "Working as a software developer for radio nodes based on CPP platform"
    },
    {
      "employer": "Rudjer Boskovic Science Institute",
      "title": "Web Developer",
      "location": "Zagreb, Croatia",
      "dates": "2006",
      "description": "Developing a UI for managing the institute's computer network"
    }
  ],

  "display": function() {
    this.jobs.forEach (function(job) {
      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
      $('.work-entry:last').append(formattedEmployer + formattedTitle);

      var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
      var formattedDates = HTMLworkDates.replace('%data%', job.dates);
      var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
      $('.work-entry:last').append(formattedLocation);
      $('.work-entry:last').append(formattedDates);
      $('.work-entry:last').append(formattedDescription);
    })
  }
};


var projects = {
  "projects": [
    {
      "title": "Portfolio page",
      "dates": "2017",
      "description": "Developed my own portfolio page as a project for Udacity Frontend Developer Nanodegree",
      "images": ["images/197x148.gif"]
    }
  ],

  "display": function() {
    this.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);

      for (var i=0; i<project.images.length; i++) {
        var formattedImage = HTMLprojectImage.replace('%data%', project.images[i]);
        $('.project-entry:last').append(formattedImage);
      }
    });
  }
};


var education = {
  "schools": [
    {
      "name": "Faculty of Electrical Engineering and Computing (FER)",
      "location": "Zagreb, Croatia",
      "degree": "Masters",
      "dates": "2000 - 2008",
      "url": "http://www.fer.hr",
      "majors": ["Computer Science"]
    },
    {
      "name": "Elektrostrojarska Skola Varazdin",
      "location": "Varazdin, Croatia",
      "degree": "High School Vocational",
      "dates": "1996 - 2000",
      "url": "http://www.ess.hr",
      "majors": ["Computer Technician"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Frontend Developer Nanodegree",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.udacity.com"
    }
  ],

  "display": function() {
    // schools section
    this.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
      formattedSchoolName = formattedSchoolName.replace('#', school.url);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);

      $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
      $('.education-entry:last').append(formattedSchoolDates);
      $('.education-entry:last').append(formattedSchoolLocation);

      school.majors.forEach(function(major) {
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', major);
        $('.education-entry:last').append(formattedSchoolMajor);
      });
    });


    // online courses section
    $('#education').append(HTMLonlineClasses);

    this.onlineCourses.forEach(function(course) {
      $('#education').append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title);
      formattedOnlineTitle.replace('#', course.url)
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.dates);
      var formattedOnlineUrl = HTMLonlineURL.replace('%data%', course.url);

      $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
      $('.education-entry:last').append(formattedOnlineDates);
      $('.education-entry:last').append(formattedOnlineUrl);
    });

  }
};


// Display all the data in the page
bio.display();
work.display();
projects.display();
education.display();

// Make the locations where I lived and worked visible on google maps
$('#mapDiv').append(googleMap);

// $('#main').append(internationalizeButton);
// function inName(fullName) {
//   var names = fullName.trim().split(" ");
//   var newName = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
//
//   newName += " ";
//   newName += names[1].toUpperCase();
//
//   return newName;
// }
