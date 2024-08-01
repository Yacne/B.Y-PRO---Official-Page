                    // قم بتعريف قائمة بالمسارات للصور
                    var imagePaths = [
                         'https://i.ibb.co/yXkBDfR/kmc-20240420-093454.png',
                         'https://i.ibb.co/c2Wfr0q/kmc-20240625-223011.png'
                    ];

                    var currentImageIndex = 0;
                    var containerElement = document.querySelector('.container1');

                    // إنشاء عنصر img ديناميكيًا وإضافته إلى .container1
                    var imgElement = document.createElement('img');
                    imgElement.src = imagePaths[currentImageIndex];
                    containerElement.appendChild(imgElement);

                    setInterval(function () {
                         // تغيير src للصورة
                         currentImageIndex++;
                         if (currentImageIndex >= imagePaths.length) {
                              currentImageIndex = 0;
                         }
                         imgElement.src = imagePaths[currentImageIndex];
                    }, 5000); //
                    
                    
                    
                    
                    
        function showIframe(url) {
            var iframe = document.getElementById('serviceIframe');
            var overlay = document.getElementById('overlay');
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
            var iframe = document.getElementById('serviceIframe');
            var overlay = document.getElementById('overlay');
            iframe.src = '';
            overlay.style.display = 'none';
        }

        function toggleTechnoApp() {
            var technoIframeContainer = document.getElementById('technoIframeContainer');
            var technoIframe = document.getElementById('technoIframe');
            if (technoIframeContainer.style.display === "none" || technoIframeContainer.style.display === "") {
                technoIframe.src = "https://yacne.github.io/B.Y-PRO---Official-Page/Techno%20app.html";
                technoIframeContainer.style.display = "block";
            } else {
                technoIframeContainer.style.display = "none";
            }
        }
          		
          		
          		
          		function toggleBulma() {
            var technoIframeContainer = document.getElementById('technoIframeContainer');
            var technoIframe = document.getElementById('technoIframe');
            if (technoIframeContainer.style.display === "none" || technoIframeContainer.style.display === "") {
                technoIframe.src = "https://yacne.github.io/B.Y-PRO---Official-Page/Bulma%20ide%20web.html";
                technoIframeContainer.style.display = "block";
            } else {
                technoIframeContainer.style.display = "none";
            }
        }
          		
          		
          		function toggleMoro() {
            var technoIframeContainer = document.getElementById('technoIframeContainer');
            var technoIframe = document.getElementById('technoIframe');
            if (technoIframeContainer.style.display === "none" || technoIframeContainer.style.display === "") {
                technoIframe.src = "https://yacne.github.io/B.Y-PRO---Official-Page/Moro.html";
                technoIframeContainer.style.display = "block";
            } else {
                technoIframeContainer.style.display = "none";
            }
        }
          		
          		
          		function toggleWhis() {
            var technoIframeContainer = document.getElementById('technoIframeContainer');
            var technoIframe = document.getElementById('technoIframe');
            if (technoIframeContainer.style.display === "none" || technoIframeContainer.style.display === "") {
                technoIframe.src = "https://yacne.github.io/B.Y-PRO---Official-Page/Whis.html";
                technoIframeContainer.style.display = "block";
            } else {
                technoIframeContainer.style.display = "none";
            }
        }
          		
          		function toggleZamasou() {
            var technoIframeContainer = document.getElementById('technoIframeContainer');
            var technoIframe = document.getElementById('technoIframe');
            if (technoIframeContainer.style.display === "none" || technoIframeContainer.style.display === "") {
                technoIframe.src = "https://yacne.github.io/B.Y-PRO---Official-Page/Zamasou.html";
                technoIframeContainer.style.display = "block";
            } else {
                technoIframeContainer.style.display = "none";
            }
        }
          		
          		function toggleAlpha() {
            var technoIframeContainer = document.getElementById('technoIframeContainer');
            var technoIframe = document.getElementById('technoIframe');
            if (technoIframeContainer.style.display === "none" || technoIframeContainer.style.display === "") {
                technoIframe.src = "https://yacne.github.io/B.Y-PRO---Official-Page/Alphaos.html";
                technoIframeContainer.style.display = "block";
            } else {
                technoIframeContainer.style.display = "none";
            }
        }
          		
          		
          		
          		
          		
          	
function downloadApp() {
    const link = document.createElement('a');
            link.href = 'https://raw.githubusercontent.com/Yacne/B.Y-PRO---Official-Page/main/B.Y%20PRO.apk';
            fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const a = document.createElement('a');
            a.style.display = 'none';
            document.body.appendChild(a);
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'B.Y PRO Web App.apk';
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
}
          		

       function toggleAbout() {
            var iframeContainer = document.getElementById('iframeContainer');
            iframeContainer.classList.toggle('show');
        }

        function closeIframe() {
            var iframeContainer = document.getElementById('iframeContainer');
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
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('resultsPopup').style.display = 'none'; // إخفاء نتائج البحث عند إغلاق النافذة
    }

   




// دالة لعرض أو إخفاء نافذة البحث
function togglePopup() {
    var popup = document.getElementById("popup");
    var resultsPopup = document.getElementById("resultsPopup");
    
    if (popup.style.display === "block") {
        popup.style.display = "none";
        resultsPopup.style.display = "none"; // إخفاء نافذة النتائج عند إغلاق نافذة البحث
    } else {
        popup.style.display = "block";
        resultsPopup.style.display = "none"; // إخفاء نافذة النتائج عند فتح نافذة البحث
        document.querySelector('.search-input').value = ''; // مسح نص صندوق البحث
        document.querySelector('.search-results').innerHTML = ''; // مسح نتائج البحث
        document.getElementById('noResults').style.display = 'none'; // إخفاء رسالة عدم وجود نتائج
    }
}

// دالة لإغلاق نافذة البحث
function closePopup() {
    var popup = document.getElementById("popup");
    var resultsPopup = document.getElementById("resultsPopup");
    
    popup.style.display = "none";
    resultsPopup.style.display = "none"; // إخفاء نافذة النتائج عند إغلاق نافذة البحث
    document.querySelector('.search-input').value = ''; // مسح نص صندوق البحث
    document.querySelector('.search-results').innerHTML = ''; // مسح نتائج البحث
    document.getElementById('noResults').style.display = 'none'; // إخفاء رسالة عدم وجود نتائج
}

// دالة لإظهار مؤشر التحميل
function showLoadingIndicator() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'block';
}

// دالة لإخفاء مؤشر التحميل
function hideLoadingIndicator() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'none';
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
            if (text.toLowerCase().includes(searchInput)) {
                return page;
            }
            return null;
        });
}



// دالة لعرض نتائج البحث
function showResults() {
    var searchInput = document.querySelector('.search-input').value.toLowerCase();
    var resultsContainer = document.querySelector('.search-results');
    var noResults = document.getElementById('noResults');

    // مسح النتائج السابقة
    resultsContainer.innerHTML = '';

    // البحث في العناصر المتاحة
    var elements = document.querySelectorAll('.service, .products, .About, .social-icons'); // تحديث الكلاسات هنا
    var resultsFound = false;

    elements.forEach(function(element) {
        var titleElement = element.querySelector('.title, .service-text h1');
        if (titleElement) {
            var title = titleElement.textContent.toLowerCase(); // التحقق من وجود العنوان
            if (title.includes(searchInput)) {
                var resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');

                var resultTitle = document.createElement('h3');
                resultTitle.style.color = 'white';
                resultTitle.style.fontSize = '2rem';
                resultTitle.textContent = title;

                var resultClass = document.createElement('p');
                resultClass.style.color = 'blue';
                resultClass.textContent = element.className; // الحصول على اسم الكلاس

                resultItem.appendChild(resultTitle);
                resultItem.appendChild(resultClass);
                resultsContainer.appendChild(resultItem);

                // تحديد الدالة المرتبطة بناءً على النص الموجود في العنوان
                resultItem.onclick = function() {
                    handleResultClick(title);
                };

                resultsFound = true;
            }
        }
    });

    // عرض رسالة "لا توجد نتائج" إذا لم يتم العثور على أي نتائج
    noResults.style.display = resultsFound ? 'none' : 'block';
    document.getElementById('resultsPopup').style.display = 'block';
}


// دالة لعرض نتائج البحث
function showResults() {
    var searchInput = document.querySelector('.search-input').value.toLowerCase();
    var resultsContainer = document.querySelector('.search-results');
    var noResults = document.getElementById('noResults');

    // مسح النتائج السابقة
    resultsContainer.innerHTML = '';

    // البحث في العناصر المتاحة
    var elements = document.querySelectorAll('.service, .products, .About, .social-icons');
    var resultsFound = false;

    elements.forEach(function(element) {
        var titleElement = element.querySelector('.title, .service-text h1');
        if (titleElement) {
            var title = titleElement.textContent.toLowerCase();
            if (title.includes(searchInput)) {
                var resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');

                var resultTitle = document.createElement('h3');
                resultTitle.style.color = 'white';
                resultTitle.style.fontSize = '2rem';
                resultTitle.textContent = title;

                var resultClass = document.createElement('p');
                resultClass.style.color = 'blue';
                resultClass.textContent = element.className;

                resultItem.appendChild(resultTitle);
                resultItem.appendChild(resultClass);
                resultsContainer.appendChild(resultItem);

                // تحديد الدالة المرتبطة بناءً على النص الموجود في العنوان
                resultItem.onclick = function() {
                    handleResultClick(title);
                };

                resultsFound = true;
            }
        }
    });

    // عرض رسالة "لا توجد نتائج" إذا لم يتم العثور على أي نتائج
    noResults.style.display = resultsFound ? 'none' : 'block';
    document.getElementById('resultsPopup').style.display = 'block';
}

// دالة لمعالجة النقر على نتائج البحث
function handleResultClick(title) {
    var normalizedTitle = title.toLowerCase();

    switch (normalizedTitle) {
        case 'device':
            toggleDevice();
            break;
        case 'software':
            toggleSoftware();
            break;
        case 'techno app':
            toggleTechnoApp();
            break;
        case 'bulma ide web':
            toggleBulma();
            break;
        case 'moro':
            toggleMoro();
            break;
        case 'whis':
            toggleWhis();
            break;
        case 'zamasou':
            toggleZamasou();
            break;
        case 'alphaos':
            toggleAlpha();
            break;
        case 'about':
            toggleAbout();
            break;
        case 'montage':
            toggleMontage();
            break;
        case 'teleportation':
            toggleTeleportation();
            break;
        case 'hacking':
            toggleHacking();
            break;
        case 'social icons':
            toggleSocialIcons();
            break;
        default:
            alert('No action defined for this result.');
    }

    // إغلاق نافذة البحث بعد النقر
    closePopup();
}

