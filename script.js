document.addEventListener('DOMContentLoaded', () => {
    const imagePaths = [
        'https://i.ibb.co/yXkBDfR/kmc-20240420-093454.png',
        'https://i.ibb.co/c2Wfr0q/kmc-20240625-223011.png',
        'https://raw.githubusercontent.com/Yacne/B.Y-PRO---Official-Page/main/Picsart1.png',
        'https://raw.githubusercontent.com/Yacne/B.Y-PRO---Official-Page/main/Picsart2.jpg',
        'https://raw.githubusercontent.com/Yacne/B.Y-PRO---Official-Page/main/Picsart3.jpg',
        'https://raw.githubusercontent.com/Yacne/B.Y-PRO---Official-Page/main/Picsart4.jpg',
    ];

    let currentImageIndex = 0;
    const containerElement = document.querySelector('.container1');

    if (containerElement) {
        imagePaths.forEach((path, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = path;
            imgElement.classList.add(index === 0 ? 'active' : 'previous');
            containerElement.appendChild(imgElement);
        });

        setInterval(() => {
            const images = document.querySelectorAll('.container1 img');
            if (images.length > 0) {
                const currentImage = images[currentImageIndex];
                const nextImageIndex = (currentImageIndex + 1) % imagePaths.length;
                const nextImage = images[nextImageIndex];

                currentImage.classList.remove('active');
                currentImage.classList.add('previous');
                nextImage.classList.remove('previous');
                nextImage.classList.add('active');

                currentImageIndex = nextImageIndex;
            }
        }, 3000);
    }
});




window.onpopstate = function(event) {
    window.location.href = 'https://yacne.github.io/B.Y-PRO---Official-Page/B.Y%20PRO%20-%20Official%20Page.html';
};

// To simulate a state and prevent the default back behavior
window.history.pushState({}, '', window.location.href);






function showIframe(url) {
    const iframe = document.getElementById('serviceIframe');
    if (iframe) {
        iframe.src = url;
        iframe.style.display = 'block';
    }
}

document.querySelector('.account-button')?.addEventListener('click', () => {
    showIframe('https://yacne.github.io/B.Y-PRO---Official-Page/login.html');
});

document.querySelector('#chatBtn')?.addEventListener('click', () => {
    showIframe('https://chat.openai.com/');
});

document.querySelector('.float-right')?.addEventListener('click', () => {
    window.location.href = "https://yacne.github.io/B.Y-PRO---Official-Page/B.Y%20PRO%20-%20Official%20Page.html";
});

document.querySelector('.float-right:nth-child(2)')?.addEventListener('click', () => {
    const aboutSection = document.getElementById("about-Section");
    const iframe = document.getElementById("serviceIframe");
    iframe.srcdoc = aboutSection.innerHTML;
    aboutSection.style.display = "none";
});
