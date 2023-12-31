const titulo = document.getElementById("header-container");
titulo.style.backgroundColor = "rgb(0,176,105)"

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  const currentTaskHeader = emergencyTasksHeaders[index];
  currentTaskHeader.style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footerr = document.getElementsByTagName('footer');
footerr[0].style.backgroundColor = 'rgb(0, 53, 51)';