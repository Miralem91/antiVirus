function hideLink(){
    const link = document.querySelector('.close-link');
    const linkDiv = document.querySelector('.close-link-div');

    link.addEventListener('click', ()=> {
        linkDiv.classList.add('d-none');
    });
};

hideLink();