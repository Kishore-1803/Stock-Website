document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.term').forEach(term => {
        term.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('visible');
            this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
        });
    });
});
