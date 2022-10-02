const dialogElement = document.querySelectorAll('dialog');
const dialogToggle = document.querySelectorAll('[data-toggle="dialog"]');

dialogToggle.forEach(element => {
    element.addEventListener('click', function (e) {
        const target = e.currentTarget.dataset.target;
        const targetElement = document.querySelector(target);
        // display dialog
        targetElement.showModal();
    });
});

dialogElement.forEach(element => {
    const cancelBtn = element.querySelector('[data-dismiss="dialog"]');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => element.close());
    }
});
