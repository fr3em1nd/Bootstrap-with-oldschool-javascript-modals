var zipcodeInput = document.getElementById('zipcodeInput');
var suggestionContainer = document.getElementById('suggestionContainer');
zipcodeInput.addEventListener('input', function() {
    if (zipcodeInput.value === "00000") {
        suggestionContainer.style.display = 'block';
    } else {
        suggestionContainer.style.display = 'none';
    }
});
