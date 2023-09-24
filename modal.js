var select = document.getElementById('selectOption');
var reviewsBtn = document.getElementsByClassName("reviewsBtn");
var modalCategoryModal = document.getElementById('categoryModal');
var modalReviewsModal = document.getElementById('reviewsModal');
var closeBtnCategory = document.querySelector('.close-btn');
var closeBtnReview = document.getElementsByClassName("close-btn-review");
var selectedOptionDisplay = document.getElementById('selectedOption');


select.addEventListener('change', function() {
    if (select.value) {
        selectedOptionDisplay.textContent = select.options[select.selectedIndex].text;
        modalCategoryModal.style.display = "block";
    }
});


closeBtnCategory.addEventListener('click', function() {
    modalCategoryModal.style.display = "none";
});


window.addEventListener('click', function(event) {
    if (event.target == modalCategoryModal) {
        modalCategoryModal.style.display = "none";
    }
});


for (var i = 0; i < reviewsBtn.length; i++) {
    reviewsBtn[i].addEventListener("click", function() {
        if (select.value) {
            modalReviewsModal.style.display = "block";
        }
    });
}


for (var i = 0; i < closeBtnReview.length; i++) {
    closeBtnReview[i].addEventListener("click", function() {
        modalReviewsModal.style.display = "none";
    });
}


window.addEventListener('click', function(event) {
    if (event.target == modalReviewsModal) {
        modalReviewsModal.style.display = "none";
    }
});
