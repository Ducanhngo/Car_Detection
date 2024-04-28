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
