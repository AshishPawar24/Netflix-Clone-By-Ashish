// FAQ toggle function
function toggleFaq(element) {
    element.classList.toggle('active');
    // Close other answers when one is already opened
    var allFaqs = document.querySelectorAll('.faqbox');
    for (var i = 0; i < allFaqs.length; i++) {
        if (allFaqs[i] !== element) {
            allFaqs[i].classList.remove('active');
        }
    }
}

function validateEmail() {
    var email = document.getElementById('emailInput').value;
    var errorMsg = document.getElementById('errorMessage');
    if (email === '' || !email.includes('@') || !email.includes('.')) {
        errorMsg.style.display = 'block';
        document.getElementById('emailInput').style.borderColor = '#e87c03';
    } else {
        errorMsg.style.display = 'none';
        document.getElementById('emailInput').style.borderColor = '#e50914';
        showLoading();
    }
}

function validateEmail2() {
    var email = document.getElementById('emailInput2').value;
    var errorMsg = document.getElementById('errorMessage2');
    if (email === '' || !email.includes('@') || !email.includes('.')) {
        errorMsg.style.display = 'block';
        document.getElementById('emailInput2').style.borderColor = '#e87c03';
    } else {
        errorMsg.style.display = 'none';
        document.getElementById('emailInput2').style.borderColor = '#e50914';
        showLoading();
    }
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        validateEmail();
    }
}

function handleEnterKey2(event) {
    if (event.key === 'Enter') {
        validateEmail2();
    }
}


function showLoading() {
    var buttons = document.querySelectorAll('.btn-red');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = 'Loading... <span class="loading"></span>';
        buttons[i].disabled = true;
    }
    setTimeout(function () {
        alert('Thank you! We will contact you soon.');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = 'Get Started >';
            buttons[i].disabled = false;
        }
    }, 2000);
}

function toggleLanguageDropdown() {
    var dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

function changeLanguage(language) {
    var btn = document.querySelector('.language-selector .btn');
    if (btn) {
        btn.innerText = language;
    }
    var dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

function showSignIn() {
    var modal = document.getElementById('signInModal');
    if (modal) {
        modal.style.display = 'flex';
    } else {
        alert('Sign In feature will be available soon!');
    }
}

function closeSignIn() {
    var modal = document.getElementById('signInModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function handleSignIn(event) {
    event.preventDefault();
    alert('Sign In functionality will be available soon!');
    closeSignIn();
}

function showAlert(section) {
    alert(section + ' section is under development!');
}

window.onscroll = function () {
    var scrollBtn = document.getElementById('scrollBtn');
    if (scrollBtn && (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)) {
        scrollBtn.classList.add('show');
    } else if (scrollBtn) {
        scrollBtn.classList.remove('show');
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Animation on scroll
function animateOnScroll() {
    var sections = document.querySelectorAll('[data-aos]');
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var windowHeight = window.innerHeight;
        var scrollTop = window.pageYOffset;
        if (scrollTop > (sectionTop - windowHeight + 100)) {
            section.classList.add('visible');
        }
    }
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', function () {
    animateOnScroll();

    // Hero text animation
    var heroTexts = document.querySelectorAll('.hero span');
    for (var i = 0; i < heroTexts.length; i++) {
        heroTexts[i].style.opacity = '0';
        heroTexts[i].style.animation = 'fadeInUp 1s ease-out ' + (i * 0.3) + 's forwards';
    }
});


document.addEventListener('click', function (event) {
    var dropdown = document.getElementById('languageDropdown');
    var languageSelector = document.querySelector('.language-selector');
    if (dropdown && languageSelector && !languageSelector.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});