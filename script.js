// Select elements
const trackerForm = document.getElementById('tracker-form');
const activityInput = document.getElementById('activity');
const durationInput = document.getElementById('duration');
const waterInput = document.getElementById('water');
const totalActivities = document.getElementById('total-activities');
const totalDuration = document.getElementById('total-duration');
const totalWater = document.getElementById('total-water');
const entriesList = document.getElementById('entries');

// Initialize totals
let activities = [];
let totalMinutes = 0;
let totalLiters = 0;

// Handle form submission
trackerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const activity = activityInput.value;
    const duration = parseInt(durationInput.value, 10);
    const water = parseFloat(waterInput.value);

    // Add to totals
    activities.push(activity);
    totalMinutes += duration;
    totalLiters += water;

    // Update UI
    updateSummary();
    addEntry(activity, duration, water);

    // Reset form
    trackerForm.reset();
});

// Update summary
function updateSummary() {
    totalActivities.textContent = activities.length;
    totalDuration.textContent = totalMinutes;
    totalWater.textContent = totalLiters.toFixed(1);
}

// Add entry
function addEntry(activity, duration, water) {
    const li = document.createElement('li');
    li.textContent = `${activity} - ${duration} minutes, ${water} liters`;
    entriesList.appendChild(li);
}
