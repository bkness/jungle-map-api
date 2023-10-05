// Add event listener to the comment form
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form inputs
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    // Create a comment object
    var newComment = {
        name: name,
        comment: comment
    };

    // Save the comment to local storage
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';

    // Refresh the comments list
    displayComments();
});

// Function to display comments from local storage
function displayComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    comments.forEach(function(comment) {
        var commentItem = document.createElement('div');
        commentItem.innerHTML = '<strong>' + comment.name + '</strong>: ' + comment.comment;
        commentsList.appendChild(commentItem);
    });
}

// Call the function to display comments on page load
displayComments();