window.onload = () => {
    const settings = document.getElementById('settings');

    if (settings) {
        settings.addEventListener('click', e => {
            chrome.tabs.create({ url: "/settings.html" });
        });

    }
    
}
