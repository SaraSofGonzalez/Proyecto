document.addEventListener('keyup', e => {
    if (e.target.matches('#srch')) {
    const searchValue = e.target.value.toLowerCase();
    const cardsContainer = document.querySelector('.cards');
    document.querySelectorAll('.col-md-4').forEach(planta => {
        const plantaText = planta.textContent.toLowerCase();
        if (plantaText.includes(searchValue)) {
        planta.classList.remove('filtro');
        cardsContainer.classList.add('search-mode');
        } else {
        planta.classList.add('filtro');
        if (!document.querySelectorAll('.col-md-4:not(.filtro)').length) {
            cardsContainer.classList.remove('search-mode');
        }
        }
    });
    }
});
    document.addEventListener("DOMContentLoaded", function() {
        const menuIcon = document.getElementById("fabars");
        const menuList = document.getElementById("menu-list");

        menuIcon.addEventListener("click", function() {
            menuList.classList.toggle("show");
        });
    });
    document.querySelectorAll('.form input, .form textarea').forEach(function(element) {
    element.addEventListener('keyup', function(e) {
        handleInputEvent(e, this);
    });
    element.addEventListener('blur', function(e) {
        handleInputEvent(e, this);
    });
    element.addEventListener('focus', function(e) {
        handleInputEvent(e, this);
    });
    });
    
    document.querySelectorAll('.tab a').forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
        tab.classList.remove('active');
        });
        this.parentNode.classList.add('active');
        var target = this.getAttribute('href');
        var tabContents = document.querySelectorAll('.tab-content > div');
        tabContents.forEach(function(content) {
        content.style.display = 'none';
        });
        document.querySelector(target).style.display = 'block';
    });
    });
    
    function handleInputEvent(e, element) {
    var label = element.previousElementSibling;
    if (e.type === 'keyup') {
        if (element.value === '') {
        label.classList.remove('active', 'highlight');
        } else {
        label.classList.add('active', 'highlight');
        }
    } else if (e.type === 'blur') {
        if (element.value === '') {
        label.classList.remove('active', 'highlight');
        } else {
        label.classList.remove('highlight');
        }
    } else if (e.type === 'focus') {
        if (element.value === '') {
        label.classList.remove('highlight');
        } else {
        label.classList.add('highlight');
        }
    }
    }