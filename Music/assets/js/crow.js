document.querySelectorAll('.expand').forEach(item => {
    item.addEventListener('click', () => {
        const info = item.querySelector('.info');
        const arrow = item.querySelector('.arrow');
        
        item.classList.toggle('open');
        
        if (item.classList.contains('open')) {
            info.style.maxHeight = info.scrollHeight + 'px';
        } else {
            info.style.maxHeight = '0';
        }
    });
});

