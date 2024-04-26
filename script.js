// Sample data of roommates with routines
const roommates = [
    { name: 'Alice', routine: '6:00 AM - Wake up, 7:00 AM - Exercise, 8:00 AM - Breakfast' },
    { name: 'Bob', routine: '7:30 AM - Wake up, 8:00 AM - Breakfast, 9:00 AM - Work' },
    { name: 'Charlie', routine: '6:30 AM - Wake up, 7:00 AM - Breakfast, 8:00 AM - Work' },
    { name: 'Diana', routine: '7:00 AM - Wake up, 8:00 AM - Breakfast, 9:00 AM - Exercise' }
];

// Function to find roommates with similar routines
function findRoommates(userRoutine) {
    // Convert user routine to lowercase for case-insensitive comparison
    userRoutine = userRoutine.toLowerCase().trim();

    // Filter roommates based on routine similarity
    const matches = roommates.filter(roommate => isSimilarRoutine(roommate.routine.toLowerCase(), userRoutine));

    return matches;
}

// Function to check if two routines are similar
function isSimilarRoutine(routine1, routine2) {
    // Split routines into individual activities
    const activities1 = routine1.split(',').map(activity => activity.trim());
    const activities2 = routine2.split(',').map(activity => activity.trim());

    // Check if the number of activities is the same
    if (activities1.length !== activities2.length) {
        return false;
    }

    // Check if each activity in routine1 exists in routine2
    for (let activity of activities1) {
        if (!activities2.includes(activity)) {
            return false;
        }
    }

    // Check if each activity in routine2 exists in routine1 (to ensure bidirectional similarity)
    for (let activity of activities2) {
        if (!activities1.includes(activity)) {
            return false;
        }
    }

    // If both routines have the same activities, they are considered similar
    return true;
}

// Function to display matching roommates
function displayMatches(matches) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (matches.length === 0) {
        resultsContainer.textContent = 'No suitable roommates found.';
        return;
    }

    const ul = document.createElement('ul');
    matches.forEach(match => {
        const li = document.createElement('li');
        li.textContent = `${match.name} - ${match.routine}`;
        ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
}

// Event listener for the "Find Roommates" button
document.getElementById('find-roommates-btn').addEventListener('click', () => {
    const userRoutine = document.getElementById('routine').value;
    const matches = findRoommates(userRoutine);

    displayMatches(matches);
});
