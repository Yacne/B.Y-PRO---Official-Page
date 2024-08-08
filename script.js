
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';

    installButton.addEventListener('click', (e) => {
        installButton.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted')




                


// تعريف قائمة بالمسارات للصور
const imagePaths = [
    'https://i.ibb.co/yXkBDfR/kmc-20240420-093454.png',
    'https://i.ibb.co/c2Wfr0q/kmc-20240625-223011.png'
];

let currentImageIndex = 0;
const containerElement = document.querySelector('.container1');

// إنشاء عنصر img ديناميكيًا وإضافته إلى .container1
const imgElement = document.createElement('img');
imgElement.src = imagePaths[currentImageIndex];
containerElement.appendChild(imgElement);

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    imgElement.src = imagePaths[currentImageIndex];
}, 5000);

function showIframe(url) {
    const iframe = document.getElementById('serviceIframe');
    const overlay = document.getElementById('overlay');
    iframe.src = url;
    overlay.style.display = 'block';
}

function showSoftwareIframe() {
    showIframe('https://yacne.github.io/B.Y-PRO---Official-Page/Software.html');
}

function showDeviceIframe() {
    showIframe('https://yacne.github.io/B.Y-PRO---Official-Page/Device.html');
}

function hideIframe() {
    const iframe = document.getElementById('serviceIframe');
    const overlay = document.getElementById('overlay');
    iframe.src = '';
    overlay.style.display = 'none';
}

function toggleIframe(url) {
    const technoIframeContainer = document.getElementById('technoIframeContainer');
    const technoIframe = document.getElementById('technoIframe');
    if (technoIframeContainer.style.display === "none" || technoIframeContainer.style.display === "") {
        technoIframe.src = url;
        technoIframeContainer.style.display = "block";
    } else {
        technoIframeContainer.style.display = "none";
    }
}

function toggleTechnoApp() {
    toggleIframe("https://yacne.github.io/B.Y-PRO---Official-Page/Techno%20app.html");
}

function toggleBulma() {
    toggleIframe("https://yacne.github.io/B.Y-PRO---Official-Page/Bulma%20ide%20web.html");
}

function toggleMoro() {
    toggleIframe("https://yacne.github.io/B.Y-PRO---Official-Page/Moro.html");
}

function toggleWhis() {
    toggleIframe("https://yacne.github.io/B.Y-PRO---Official-Page/Whis.html");
}

function toggleZamasou() {
    toggleIframe("https://yacne.github.io/B.Y-PRO---Official-Page/Zamasou.html");
}

function toggleAlpha() {
    toggleIframe("https://yacne.github.io/B.Y-PRO---Official-Page/Alphaos.html");
    
}

function toggleNamek() {
    toggleIframe("https://yacne.github.io/B.Y-PRO---Official-Page/Namek%20Encryptor.html");
    
}


function toggleAbout() {
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.classList.toggle('show');
}





function closeIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.classList.remove('show');
    hideIframe();
}

function showDefaultContent() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('technoIframeContainer').style.display = 'none';
    document.getElementById('iframeContainer').style.display = 'none';
}

function togglePopup() {
    const popup = document.getElementById('popup');
    const resultsPopup = document.getElementById('resultsPopup');
    if (popup.style.display === "block") {
        popup.style.display = "none";
        resultsPopup.style.display = "none";
    } else {
        popup.style.display = "block";
        resultsPopup.style.display = "none";
        document.querySelector('.search-input').value = '';
        document.querySelector('.search-results').innerHTML = '';
        document.getElementById('noResults').style.display = 'none';
    }
}

function closePopup() {
    togglePopup();
}

function showLoadingIndicator() {
    document.querySelector('.loading-indicator').style.display = 'block';
}

function hideLoadingIndicator() {
    document.querySelector('.loading-indicator').style.display = 'none';
}

// بيانات صفحات البحث
const pages = [
    'https://yacne.github.io/B.Y-PRO---Official-Page/Device.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Software.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Hacking.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Alpha os.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Bulma ide web.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Montage.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Moro.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Techno app.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Teleportaion.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Whis assistance ai.html',
    'https://yacne.github.io/B.Y-PRO---Official-Page/Zamasou.html'
];

// دالة للبحث في صفحة معينة
function searchInPage(page, searchInput) {
    return fetch(page)
        .then(response => response.text())
        .then(text => {
            return text.toLowerCase().includes(searchInput) ? page : null;
        });
}

function showResults() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const resultsContainer = document.querySelector('.search-results');
    const noResults = document.getElementById('noResults');

    resultsContainer.innerHTML = '';

    const elements = document.querySelectorAll('.service, .products, .About, .social-icons');
    let resultsFound = false;

    elements.forEach(element => {
        const titleElement = element.querySelector('.title, .service-text h1');
        if (titleElement) {
            const title = titleElement.textContent.toLowerCase();
            if (title.includes(searchInput)) {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');

                const resultTitle = document.createElement('h3');
                resultTitle.style.color = 'white';
                resultTitle.style.fontSize = '2rem';
                resultTitle.textContent = title;

                const resultClass = document.createElement('p');
                resultClass.style.color = 'blue';
                resultClass.textContent = element.className;

                resultItem.appendChild(resultTitle);
                resultItem.appendChild(resultClass);
                resultsContainer.appendChild(resultItem);

                resultItem.onclick = () => handleResultClick(title);

                resultsFound = true;
            }
        }
    });

    noResults.style.display = resultsFound ? 'none' : 'block';
    document.getElementById('resultsPopup').style.display = 'block';
}

function handleResultClick(title) {
    const actions = {
        'device': toggleDevice,
        'software': toggleSoftware,
        'techno app': toggleTechnoApp,
        'bulma ide web': toggleBulma,
        'moro': toggleMoro,
        'whis': toggleWhis,
        'zamasou': toggleZamasou,
        'alphaos': toggleAlpha,
        'about': toggleAbout,
        'montage': toggleMontage,
        'teleportation': toggleTeleportation,
        'hacking': toggleHacking,
        'social icons': toggleSocialIcons
    };

    const action = actions[title.toLowerCase()];
    if (action) {
        action();
    } else {
        alert('No action defined for this result.');
    }

    closePopup();
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '100085217054240',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v15.0'
    });
};


function openAccount() {
    window.open('https://yacne.github.io/B.Y-PRO---Official-Page/login.html', '_blank');
}



function toggleIframe(src) {
        var iframeContainer = document.getElementById('service-iframe-container');
        var iframe = document.getElementById('service-iframe');
        iframe.src = src;
        iframeContainer.style.display = 'block';
    }

    function toggleNamek() {
        toggleIframe("https://yacne.github.io/B.Y-PRO---Official-Page/Namek%20Encryptor.html");
    }
