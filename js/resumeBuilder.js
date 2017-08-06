
var bio = {
  "name": "Marko Burazin",
  "role": "Web Developer",
  "contacts": {
    "mobile": "+46 72 1234567",
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
  "skillsLogos": [
    "images/html5_logo.svg",
    "images/css3_logo.svg",
    "images/js_logo.svg",
    "images/erlang_logo.svg",
    "images/php_logo.svg",
    "images/c_logo.svg",
    "images/git_logo.svg",
  ],
  "biopic": "images/me_naturalpools.png",

  "display": function() {
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
    $('.header-title').prepend(formattedWelcomeMsg);
    $('.header-title').prepend(formattedRole);
    $('.header-title').prepend(formattedName);

    var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
    var formattedEmail = HTMLemail.replace(/%data%/g, this.contacts.email);
    var formattedGithub = HTMLgithub.replace(/%data%/g, this.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);

    $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
    $('#header').append(formattedBioPic);

    if (this.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      this.skills.forEach(function(skill, index) {
        var formattedSkill = HTMLskills.replace(/%data%/g, skill);
        formattedSkill = formattedSkill.replace('%logo%', bio.skillsLogos[index]);
        $('#skills').append(formattedSkill);
      });
    }
  }
};


var work = {
  "jobs": [
    {
      "employer": "Ericsson AB",
      "title": "Senior Software Developer",
      "location": "Stockholm, Sweden",
      "dates": "2014 - present",
      "description": "Working as a senior software developer for next generation radio nodes."
    },
    {
      "employer": "Ericsson Nikola Tesla",
      "title": "Software Developer",
      "location": "Zagreb, Croatia",
      "dates": "2008 - 2014",
      "description": "Working as a software developer for radio nodes based on CPP platform."
    },
    {
      "employer": "Rudjer Boskovic Science Institute",
      "title": "Web Developer",
      "location": "Zagreb, Croatia",
      "dates": "2006",
      "description": "Developed a UI for managing the institute's internal computer network."
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
    });
  }
};


var projects = {
  "projects": [
    {
      "title": "Portfolio page",
      "dates": "2017",
      "description": "Developed my own portfolio page as a project for Udacity Frontend Developer Nanodegree",
      "images": ["images/my-portfolio1-small-400.png", "images/my-portfolio2-small-400.png"],
      "url": "https://mburazin.github.io/my-portfolio"
    }
  ],

  "display": function() {
    this.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      formattedTitle = formattedTitle.replace('#', project.url);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);

      $('.project-entry:last').append(HTMLprojectContainer);
      for (var i=0; i<project.images.length; i++) {
        var formattedImage = HTMLprojectImage.replace('%data%', project.images[i]);
        $('.flex-projects').append(formattedImage);
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
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
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
      formattedOnlineTitle = formattedOnlineTitle.replace('#', course.url);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.dates);

      $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
      $('.education-entry:last').append(formattedOnlineDates);
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

// Show the skills bubble chart
$('#bubbleChart').append(HTMLBubbleChartStart);
