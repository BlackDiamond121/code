document.addEventListener('DOMContentLoaded', function() {
    const bestCategoryItems = document.querySelectorAll('.best-category-item');

    bestCategoryItems.forEach(item => {
        item.addEventListener('click', () => {
            bestCategoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
