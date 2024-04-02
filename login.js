document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                if (data === 'Invalid username or password') {
                    alert(data);
                } else {
                    window.location.href = '/dashboard';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
