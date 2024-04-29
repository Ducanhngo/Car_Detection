async function submitPost() {
    const content = document.getElementById('post-content').value.trim();
    const author = document.getElementById('post-author').value.trim();
    if (!content || !author) {
        alert('Please enter both post content and author name.');
        return;
    }
    try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content, author })
        });
        if (!response.ok) {
            throw new Error('Failed to submit post.');
        }
        const post = await response.json();
        displayPost(post);
    } catch (error) {
        console.error(error);
        alert('Failed to submit post.');
    }
}

async function fetchPosts() {
    try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts.');
        }
        const posts = await response.json();
        posts.forEach(displayPost);
    } catch (error) {
        console.error(error);
        alert('Failed to fetch posts.');
    }
}

function displayPost(post) {
    const feed = document.getElementById('feed');
    const postElement = document.createElement('div');
    postElement.textContent = `${post.author}: ${post.content}`;
    feed.appendChild(postElement);
}

// Fetch posts on page load
fetchPosts();
