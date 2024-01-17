'use strict';

// Collapsible functionality for timer buttons
var coll = document.getElementsByClassName("timer_collapsible");
var i;

// Loop through all elements with class 'timer_collapsible'
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    // Toggle the display of the next element (the collapsible content)
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Collapsible functionality for option buttons
var coll = document.getElementsByClassName("option_collapsible");
var i;

// Loop through all elements with class 'option_collapsible'
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    // Toggle the display of the next element (the collapsible content)
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Function to set an alarm based on the clicked timer button
function setAlarm(event) {
  const minutes = parseFloat(event.target.value);
  // Set the badge color and text for the Chrome extension
  chrome.action.setBadgeBackgroundColor({color:'#E8D5C4'});
  chrome.action.setBadgeText({ text: event.target.value });
  // Create an alarm with the specified delay in minutes
  chrome.alarms.create({ delayInMinutes: minutes });
  // Store the set minutes in Chrome's sync storage
  chrome.storage.sync.set({ minutes: minutes });
  // Close the popup window after setting the alarm
  window.close();
}

// Function to clear the set alarm
function clearAlarm() {
  // Clear the badge text from the Chrome extension
  chrome.action.setBadgeText({ text: '' });
  // Clear all alarms
  chrome.alarms.clearAll();
}

// Adding event listeners to the recommended timer buttons
document.getElementById('recmin1').addEventListener('click', setAlarm);
document.getElementById('recmin5').addEventListener('click', setAlarm);
document.getElementById('recmin10').addEventListener('click', setAlarm);
document.getElementById('recmin30').addEventListener('click', setAlarm);

// Adding event listeners to the full list of timer buttons
document.getElementById('min1').addEventListener('click', setAlarm);
document.getElementById('min2').addEventListener('click', setAlarm);
document.getElementById('min3').addEventListener('click', setAlarm);
document.getElementById('min4').addEventListener('click', setAlarm);
document.getElementById('min5').addEventListener('click', setAlarm);
document.getElementById('min10').addEventListener('click', setAlarm);
document.getElementById('min15').addEventListener('click', setAlarm);
document.getElementById('min30').addEventListener('click', setAlarm);
document.getElementById('min60').addEventListener('click', setAlarm);
document.getElementById('min120').addEventListener('click', setAlarm);

// Adding event listener to the reset button
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm)