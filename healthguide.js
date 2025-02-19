/* JavaScript File: healthguide.js */


// 2. Personalized Health Tracker

function showHealthRecommendations() {
    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInCm = parseFloat(document.getElementById("height").value);

    if (age && weight && heightInCm) {
        const heightInMeters = heightInCm / 100; // Convert height to meters
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI calculation

        let recommendations = `Your BMI is ${bmi}. `;

        if (bmi < 18.5) {
            recommendations += "You are underweight. Consider consuming a calorie-rich diet and consult a nutritionist.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            recommendations += "You have a healthy weight. Maintain it by staying active and eating a balanced diet.";
        } else if (bmi >= 25 && bmi < 29.9) {
            recommendations += "You are overweight. Consider regular exercise and a healthy diet.";
        } else {
            recommendations += "You are in the obese category. Consult a healthcare provider for personalized advice.";
        }

        const recommendationsElement = document.getElementById("recommendations");
        recommendationsElement.innerText = recommendations;
        recommendationsElement.style.display = "block";
    } else {
        alert("Please fill all fields!");
    }
}
// 3. Daily Health Tips
function showHealthRecommendations() {
    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInCm = parseFloat(document.getElementById("height").value);

    if (age && weight && heightInCm) {
        const heightInMeters = heightInCm / 100; // Convert height to meters
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI calculation

        let recommendations = `Your BMI is ${bmi}. `;
        let dailyTip = "";

        if (bmi < 18.5) {
            recommendations += "You are underweight. Consider consuming a calorie-rich diet and consult a nutritionist.";
            dailyTip = "Add more protein and healthy fats to your diet today. Consider nuts, seeds, and avocados!";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            recommendations += "You have a healthy weight. Maintain it by staying active and eating a balanced diet.";
            dailyTip = "Keep up the good work! Include a 30-minute walk in your routine today.";
        } else if (bmi >= 25 && bmi < 29.9) {
            recommendations += "You are overweight. Consider regular exercise and a healthy diet.";
            dailyTip = "Try reducing sugary drinks today and opt for water or unsweetened beverages.";
        } else {
            recommendations += "You are in the obese category. Consult a healthcare provider for personalized advice.";
            dailyTip = "Start with light exercises like stretching or yoga to kick-start your fitness journey.";
        }

        // Display Recommendations
        const recommendationsElement = document.getElementById("recommendations");
        recommendationsElement.innerText = recommendations;
        recommendationsElement.style.display = "block";

        // Display Daily Health Tip
        const dailyTipElement = document.getElementById("daily-tip");
        dailyTipElement.innerText = dailyTip;
    } else {
        alert("Please fill all fields!");
    }
}

// 4. Stress Reliever
let breathingInterval;

function startBreathingExercise() {
    const circle = document.getElementById("breathing-circle");
    const stepText = document.getElementById("breathing-step");
    const instructions = ["Inhale deeply...", "Hold your breath...", "Exhale slowly..."];
    let currentStep = 0;

    circle.style.display = "block";

    breathingInterval = setInterval(() => {
        stepText.innerText = instructions[currentStep];
        currentStep = (currentStep + 1) % instructions.length;
    }, 4000);
}

function stopBreathingExercise() {
    const circle = document.getElementById("breathing-circle");
    const stepText = document.getElementById("breathing-step");

    clearInterval(breathingInterval);
    circle.style.display = "none";
    stepText.innerText = "Press Start to begin!";
}

function setMood(mood) {
    const moodMessage = document.getElementById("mood-message");
    if (mood === "Happy") {
        moodMessage.innerText = "Great to see you're happy! Spread the positivity.";
    } else if (mood === "Stressed") {
        moodMessage.innerText = "Take a deep breath and try a guided meditation.";
    } else if (mood === "Anxious") {
        moodMessage.innerText = "Relax and focus on the present. You're doing great!";
    }
}
// Handles audio playback for all relaxation options
function playAudio(audioId) {
    const audioElement = document.getElementById(audioId);

    // If the audio is playing, pause it. Otherwise, play it.
    if (audioElement.paused) {
        stopAllAudio(); // Ensure only one audio plays at a time
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

// Stops all audio playback
function stopAllAudio() {
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
    });
}

// Guided Meditation
function startMeditation() {
    playAudio("meditation-audio");
}

// Relaxing Music
function playRelaxingMusic() {
    playAudio("relaxing-music");
}

// Stretching Exercise
let stretchingInterval;
let countdownInterval;
let timeLeft = 15; // time in seconds for each stretch

const stretches = [
    "Neck Stretch: Sit or stand upright. Gently tilt your head to one side, bringing your ear towards your shoulder. Hold for 15 seconds, then switch sides.",
    "Shoulder Roll: Roll your shoulders forward in a circular motion for 15 seconds, then roll them backward for another 15 seconds.",
    "Side Stretch: Raise one arm overhead and lean to the opposite side. Hold for 15 seconds, then switch sides.",
    "Hamstring Stretch: Sit on the floor with one leg extended. Reach for your toes while keeping your back straight. Hold for 15 seconds, then switch legs.",
    "Cat-Cow Stretch: On all fours, alternate between arching your back (Cat) and dipping it down (Cow). Hold each position for 5 seconds, repeating for 30 seconds."
];

function startStretchingExercise() {
    const instructions = document.getElementById("current-stretch");
    const audio = document.getElementById("stretching-audio");
    const timer = document.getElementById("stretching-timer");
    let currentStretch = 0;

    stopStretchingExercise(); // Ensure any previous exercise is stopped.

    instructions.innerText = stretches[currentStretch];
    audio.play();

    // Set up the countdown timer
    timeLeft = 15; // Reset timer to 15 seconds
    timer.innerText = `${timeLeft} seconds left`;

    countdownInterval = setInterval(() => {
        timeLeft--;
        timer.innerText = `${timeLeft} seconds left`;

        if (timeLeft <= 0) {
            currentStretch = (currentStretch + 1) % stretches.length; // Go to next stretch
            instructions.innerText = stretches[currentStretch];
            timeLeft = 15; // Reset time for next stretch
        }
    }, 1000);

    // Display new stretch every 15 seconds
    stretchingInterval = setInterval(() => {
        currentStretch = (currentStretch + 1) % stretches.length;
        instructions.innerText = stretches[currentStretch];
        timeLeft = 15; // Reset the timer for the next stretch
    }, 15000);
}

function stopStretchingExercise() {
    clearInterval(stretchingInterval);
    clearInterval(countdownInterval);
    const instructions = document.getElementById("current-stretch");
    const audio = document.getElementById("stretching-audio");
    const timer = document.getElementById("stretching-timer");

    instructions.innerText = "Press Start to begin your stretching exercise!";
    timer.innerText = ""; // Clear the timer
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning.
}

// 5. Dietary Recommendations
const tips = [
    "Include more fiber in your diet.",
    "Avoid sugary drinks.",
    "Eat lean proteins.",
    "Stay hydrated by drinking plenty of water.",
    "Eat a variety of fruits and vegetables.",
    "Limit processed foods.",
    "Control portion sizes to avoid overeating.",
    "Include healthy fats like avocados and nuts."
];

// Get the list element where tips will be displayed
const list = document.getElementById("diet-tips");
list.innerHTML = tips.map((tip) => `<li>${tip}</li>`).join("");

// Function to add a new tip dynamically
function addTip(newTip) {
    tips.push(newTip);
    list.innerHTML = tips.map((tip) => `<li>${tip}</li>`).join("");
}

// Function to show a random tip
function showRandomTip() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert(randomTip);
}

// Event listener to refresh tips every 5 seconds
setInterval(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    list.innerHTML = `<li>${randomTip}</li>`; // Show one random tip at a time
}, 10000);

// Event listener for adding a new tip from a text input
const addButton = document.getElementById("add-tip-button");
addButton.addEventListener("click", () => {
    const newTipInput = document.getElementById("new-tip");
    const newTip = newTipInput.value;
    if (newTip) {
        addTip(newTip);
        newTipInput.value = ''; // Clear input after adding
    }
});

// 6. Symptom Checker
function checkSymptoms() {
    var symptom = document.getElementById("symptom").value;
    var solutionText = "";

    // Provide solutions based on the selected symptom
    switch(symptom) {
        case "headache":
            solutionText = "Headache can be caused by stress, dehydration, or lack of sleep. Drink water, rest, and relax. If it persists, consider seeing a doctor.";
            break;
        case "fever":
            solutionText = "Fever could indicate an infection or illness. Stay hydrated, rest, and monitor your temperature. If it remains high, consult a doctor.";
            break;
        case "fatigue":
            solutionText = "Fatigue may be caused by poor sleep, stress, or underlying health conditions. Ensure proper rest and avoid overexertion. If fatigue persists, see a healthcare professional.";
            break;
        case "cough":
            solutionText = "Coughing may be a sign of a cold, allergies, or respiratory issues. Stay hydrated, try honey and lemon tea, and if it worsens, see a doctor.";
            break;
        case "shortness-of-breath":
            solutionText = "Shortness of breath can indicate a serious issue such as asthma, heart disease, or anxiety. If it is severe or persistent, seek immediate medical help.";
            break;
        case "chest-pain":
            solutionText = "Chest pain can be a sign of various conditions, including stress, heart problems, or digestive issues. If it's sharp or persistent, seek immediate medical attention.";
            break;
        case "dizziness":
            solutionText = "Dizziness can result from dehydration, low blood pressure, or fatigue. Drink water and rest. If dizziness continues, consult a doctor.";
            break;
        case "nausea":
            solutionText = "Nausea may be caused by food-related issues, stress, or a virus. Stay hydrated and rest. If nausea persists, seek medical advice.";
            break;
        default:
            solutionText = "Please select a symptom to get a solution.";
    }

    // Display the solution to the user
    document.getElementById("symptom-solution").innerHTML = solutionText;
}
// 7.  Function to request notification permission from the user
    function requestNotificationPermission() {
        if ("Notification" in window) {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    console.log("Notification permission granted.");
                } else {
                    alert("Please allow notifications to receive reminders.");
                }
            });
        } else {
            alert("Your browser does not support notifications.");
        }
    }

    // Call the function to request notification permission when the page loads
    document.addEventListener("DOMContentLoaded", requestNotificationPermission);

    // Function to set the medicine reminder
    function setMedicineReminder() {
        var medicineName = document.getElementById("medicine-name").value;
        var time = document.getElementById("time-select").value;

        if (!medicineName) {
            alert("Please enter the name of the medicine.");
            return;
        }

        var reminderMessage = `Reminder set for ${medicineName} in ${time} minutes.`;
        document.getElementById("reminder-message").innerHTML = reminderMessage;

        // Set a timeout to show the notification after the selected time
        setTimeout(function () {
            if ("Notification" in window && Notification.permission === "granted") {
                new Notification("Medicine Reminder", {
                    body: `It's time to take your medicine: ${medicineName}.`,
                    icon: "https://via.placeholder.com/100" // Placeholder for an icon
                });
            } else {
                alert(`Reminder: It's time to take your medicine: ${medicineName}.`);
            }
        }, time * 60000); // Convert minutes to milliseconds
    }
// 8. Chatbot
function chatbotResponse() {
    const input = document.getElementById("chat-input").value;
    document.getElementById("chat-response").innerText = `You asked: "${input}". We suggest staying active and consulting a doctor if needed!`;
}

// 9. Health Goals Reminder
// Function to set a reminder with user-selected time
function setReminder(goal) {
    const timeInput = document.getElementById("reminder-time").value;

    // Check if user selected a time
    if (!timeInput) {
        alert("Please select a time for the reminder!");
        return;
    }

    const now = new Date();
    const [hours, minutes] = timeInput.split(":"); // Get hours and minutes from the input
    const reminderTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

    // If reminder time is in the past, set it for the next day
    if (reminderTime < now) {
        reminderTime.setDate(reminderTime.getDate() + 1);
    }

    const formattedTime = `${reminderTime.getHours()}:${reminderTime.getMinutes() < 10 ? "0" + reminderTime.getMinutes() : reminderTime.getMinutes()}`;

    // Display reminder message
    displayReminderNotification(goal, formattedTime);

    // Notify user at the selected time
    const timeDifference = reminderTime - now;
    setTimeout(() => {
        alert(`Reminder: It's time to ${goal}`);
    }, timeDifference); // Time difference in milliseconds
}

// Function to display the reminder in a notification-like style
function displayReminderNotification(goal, time) {
    const reminderElement = document.getElementById("reminder-message");
    reminderElement.innerHTML = `Reminder set for: <strong>${goal}</strong> at <strong>${time}</strong>`;
    reminderElement.style.backgroundColor = "#ffeb3b";  // Highlight color
    reminderElement.style.padding = "1rem";
    reminderElement.style.borderRadius = "5px";
    reminderElement.style.marginTop = "10px";
    reminderElement.style.textAlign = "center";
    reminderElement.style.fontWeight = "bold";
    reminderElement.style.fontSize = "16px";
}

// 10. Health Myths Buster
// Array of health myths with their explanations
const myths = [
    {
        myth: "Drinking more water will help you lose weight faster.",
        fact: "Drinking water is important for overall health, but it does not directly lead to weight loss. A balanced diet and exercise are key."
    },
    {
        myth: "You need to drink 8 glasses of water a day.",
        fact: "The 8 glasses rule is a general guideline. Water intake should vary based on individual needs, activity levels, and climate."
    },
    {
        myth: "Cracking your knuckles causes arthritis.",
        fact: "There is no scientific evidence that cracking your knuckles causes arthritis. The sound comes from air bubbles popping in the joint."
    },
    {
        myth: "Sugar makes kids hyperactive.",
        fact: "Studies have shown that sugar doesn't cause hyperactivity in children. Behavior may be influenced by other factors, such as excitement."
    },
    {
        myth: "You should avoid all fats to stay healthy.",
        fact: "Healthy fats, such as those found in avocados, nuts, and olive oil, are essential for the body. It's the unhealthy fats that should be limited."
    },
    {
        myth: "You can catch a cold from being cold or wet.",
        fact: "Colds are caused by viruses, not cold weather. However, being cold or wet can weaken your immune system, making you more susceptible to infections."
    },
    {
        myth: "You should wait an hour after eating before swimming.",
        fact: "There is no scientific evidence to support the idea that you must wait before swimming. You can swim after eating, but listen to your body."
    },
    {
        myth: "Detox diets will cleanse your body of toxins.",
        fact: "Your liver and kidneys naturally detoxify your body. Detox diets may lead to temporary weight loss, but they don't offer long-term health benefits."
    }
];

let mythIndex = 0;

// Function to show a myth and its fact
function showMyth() {
    let myth = myths[mythIndex];
    let mythDisplay = document.getElementById("myth-display");
    mythDisplay.innerHTML = `<strong>Myth:</strong> ${myth.myth}<br><strong>Fact:</strong> ${myth.fact}`;

    // Increment index to show next myth
    mythIndex = (mythIndex + 1) % myths.length; // Loops back to first myth when all myths are shown
}