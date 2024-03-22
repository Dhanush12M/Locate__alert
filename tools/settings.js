   // Function to save settings to local storage
        function saveSettings() {
            var selectedRingtone = document.getElementById("ringtone").value;
            var selectedVibration = document.getElementById("vibration").value;
            var selectedInterval = document.getElementById("notificationInterval").value;
            var scheduledDateTime = document.getElementById("scheduleDateTime").value;
            var scheduledLocation = document.getElementById("scheduleLocation").value;
            
            // Save settings to local storage
            localStorage.setItem("ringtone", selectedRingtone);
            localStorage.setItem("vibration", selectedVibration);
            localStorage.setItem("notificationInterval", selectedInterval);
            localStorage.setItem("scheduledDateTime", scheduledDateTime);
            localStorage.setItem("scheduledLocation", scheduledLocation);

            // For demonstration purposes, alert the saved settings
            alert("Settings saved:\nRingtone: " + selectedRingtone + "\nVibration: " + selectedVibration + "\nNotification Interval: " + selectedInterval + " minutes" + "\nScheduled Date & Time: " + scheduledDateTime + "\nScheduled Location: " + scheduledLocation);
        }

        // Function to load settings from local storage
        window.onload = function() {
            var savedRingtone = localStorage.getItem("ringtone");
            var savedVibration = localStorage.getItem("vibration");
            var savedInterval = localStorage.getItem("notificationInterval");
            var savedScheduledDateTime = localStorage.getItem("scheduledDateTime");
            var savedScheduledLocation = localStorage.getItem("scheduledLocation");

            if (savedRingtone !== null) {
                document.getElementById("ringtone").value = savedRingtone;
            }

            if (savedVibration !== null) {
                document.getElementById("vibration").value = savedVibration;
            }

            if (savedInterval !== null) {
                document.getElementById("notificationInterval").value = savedInterval;
            }

            if (savedScheduledDateTime !== null) {
                document.getElementById("scheduleDateTime").value = savedScheduledDateTime;
            }

            if (savedScheduledLocation !== null) {
                document.getElementById("scheduleLocation").value = savedScheduledLocation;
            }
        };

        // Function to go back to the previous page
        function goBack() {
            window.history.back();
        }

