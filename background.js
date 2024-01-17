'use strict';

// Add a listener for the Chrome alarm event
chrome.alarms.onAlarm.addListener(() => {
  // When an alarm goes off, clear the badge text from the Chrome extension icon
  chrome.action.setBadgeText({ text: '' });

  // Create a notification when the alarm goes off
  chrome.notifications.create({
    type: 'basic', // The type of notification
    iconUrl: 'images/timer_ended.png', // Icon to be displayed in the notification
    title: 'Timer', // Title of the notification
    message: 'Timer ended.', // Message displayed in the notification
    priority: 2 // Notification priority level
  });
});