document.addEventListener('DOMContentLoaded', function () {
    const commentButton = document.getElementById('comment_button');
    const commentText = document.getElementById('comment_text');
    const commentsContainer = document.getElementById('comments');

    commentButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const comment = commentText.value;

        if (name && comment) {
            const newComment = document.createElement('div');
            newComment.className = 'comment-container';
            newComment.innerHTML = `<strong>Name: ${name}
						</strong><br>${comment}<br><br>`;
						
            commentsContainer.insertBefore
			(newComment,commentsContainer.firstChild);

            document.getElementById('name').value && commentText.value;
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    function compareDates(a, b) {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateA - dateB;
    }
    function sortComments(order) {
      const commentsContainer = document.getElementById('comments');
      const comments = Array.from(commentsContainer.getElementsByTagName
	  ('p'));
	  
        comments.sort(compareDates);

        if (order === 'desc') {
            comments.reverse();
        }
        comments.forEach(function (comment) {
            commentsContainer.appendChild(comment);
        });
    }
sortComments('asc');
		const sortDropdown = document.getElementById('sort');
		sortDropdown.addEventListener('change', function () {
        const selectedOrder = sortDropdown.value;
        sortComments(selectedOrder);
    });
});