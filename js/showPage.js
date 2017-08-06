/*
The next few lines are checking to see if you have not
changed each section of the resume. If you have not made any changes to a section
of the resume, then that part of the resume does not show up. More on this in the
course.
*/
if(document.getElementsByClassName('flex-contact').length === 0) {
  document.getElementById('topContacts').style.display = 'none';
}
if(document.getElementsByTagName('h1').length === 0) {
  document.getElementById('header').style.display = 'none';
}
if(document.getElementsByClassName('work-entry').length === 0) {
  document.getElementById('workExperience').style.display = 'none';
}
if(document.getElementsByClassName('bubbleChart').length === 0) {
  document.getElementById('bubbleChart').style.display = 'none';
}
if(document.getElementsByClassName('project-entry').length === 0) {
  document.getElementById('projects').style.display = 'none';
}
if(document.getElementsByClassName('education-entry').length === 0) {
  document.getElementById('education').style.display = 'none';
}
if(document.getElementsByClassName('flex-contact').length === 0) {
  document.getElementById('lets-connect').style.display = 'none';
}
if(document.getElementById('map') === null) {
  document.getElementById('mapDiv').style.display = 'none';
}
