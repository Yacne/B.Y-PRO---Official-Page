
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

   








function showLoadingIndicator() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'block';
}

function hideLoadingIndicator() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'none';
}




function showResults() {
    const resultsPopup = document.getElementById('resultsPopup');
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const searchResults = document.querySelector('.search-results');
    const noResults = document.querySelector('.no-results');

    searchResults.innerHTML = '';
    showLoadingIndicator(); // 显示加载指示器

    setTimeout(() => { // 模拟搜索延迟
        const results = searchInSource(searchInput); // 你的搜索逻辑

        hideLoadingIndicator(); // 隐藏加载指示器

        if (results.length > 0) {
            results.forEach(result => {
                // 处理并显示搜索结果
            });
            resultsPopup.style.display = 'block';
            noResults.style.display = 'none';
        } else {
            resultsPopup.style.display = 'block';
            noResults.style.display = 'block';
        }
    }, 1000); // 模拟延迟
}