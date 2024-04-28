// Sample data of roommates with routines
const roommates = [
    { name: 'Alice', routine: '6:00 AM - Wake up, 7:00 AM - Exercise, 8:00 AM - Breakfast' },
    { name: 'Bob', routine: '7:30 AM - Wake up, 8:00 AM - Breakfast, 9:00 AM - Work' },
    { name: 'Charlie', routine: '6:30 AM - Wake up, 7:00 AM - Breakfast, 8:00 AM - Work' },
    { name: 'Diana', routine: '7:00 AM - Wake up, 8:00 AM - Breakfast, 9:00 AM - Exercise' }
];

function findRoommates() {
    const userRoutine = document.getElementById('routine').value.trim();
    const matches = roommates.filter(roommate => isSimilarRoutine(roommate.routine, userRoutine));

    displayMatches(matches);
}

function isSimilarRoutine(routine1, routine2) {
    // Here you would implement a more sophisticated algorithm to compare routines
    // For simplicity, we'll just check if the routines are exactly the same
    return routine1 === routine2;
}

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
        li.classList.add('result-item'); // Adding class for styling
        ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
}
function submitPost() {
    const postContent = document.getElementById('post-content').value.trim();
    if (postContent === '') {
        alert('Please enter your post content.');
        return;
    }
    const feed = document.getElementById('feed');
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.textContent = postContent;
    feed.prepend(postElement); // Add post at the beginning of the feed
    // Optionally, you can send the post content to a backend server for storage
}

