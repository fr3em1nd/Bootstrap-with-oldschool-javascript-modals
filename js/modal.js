var select = document.getElementById('selectOption');

var reviewsBtn = document.getElementsByClassName("reviewsBtn");
var modalCategoryModal = document.getElementById('categoryModal');
var modalNoCategoryModal = document.getElementById('NoCategoryModal');
var modalReviewsModal = document.getElementById('reviewsModal');
var closeBtnCategory = document.querySelector('.close-btn');
var closeBtnNoCategory = document.querySelector('.close-btn-ctg');
var closeBtnReview = document.getElementsByClassName("close-btn-review");
var selectedOptionDisplay = document.getElementById('selectedOption');

var noCategBtn = document.getElementById('noCategBtn');

select.addEventListener('change', function () {
    if (select.value) {
        selectedOptionDisplay.textContent = select.options[select.selectedIndex].text;
        modalCategoryModal.style.display = "block";
    }
});

closeBtnCategory.addEventListener('click', function () {
    modalCategoryModal.style.display = "none";
});


window.addEventListener('click', function (event) {
    if (event.target == modalCategoryModal) {
        modalCategoryModal.style.display = "none";
    }
});


for (var i = 0; i < reviewsBtn.length; i++) {
    reviewsBtn[i].addEventListener("click", function () {
        if (select.value) {
            modalReviewsModal.style.display = "block";
        }
    });
}


for (var i = 0; i < closeBtnReview.length; i++) {
    closeBtnReview[i].addEventListener("click", function () {
        modalReviewsModal.style.display = "none";
    });
}


window.addEventListener('click', function (event) {
    if (event.target == modalReviewsModal) {
        modalReviewsModal.style.display = "none";
    }
});


noCategBtn.addEventListener('click', function () {
    modalNoCategoryModal.style.display = "block";
});


closeBtnNoCategory.addEventListener('click', function () {
    modalNoCategoryModal.style.display = "none";
});

