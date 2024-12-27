// Example: Change email link text on hover (from the earlier example)
const emailLink = document.getElementById('emailLink');

emailLink.addEventListener('mouseover', function() {
    emailLink.style.color = 'red';
    emailLink.textContent = "Click to email me!";
});

emailLink.addEventListener('mouseout', function() {
    emailLink.style.color = 'blue';
    emailLink.textContent = "kaviyababu2443@gmail.com";
});
