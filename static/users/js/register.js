
const condition = document.querySelector('.condition');
const form = document.querySelector('.dws-form');
const formTwo = document.querySelector('.condition-form');
const closeElem = document.querySelector('.close');

const init = () =>{
condition.addEventListener('click', event => {
    event.preventDefault();
    formTwo.classList.add('visible');
    form.classList.add('visible');
});
closeElem.addEventListener('click', event => {
    event.preventDefault();
    formTwo.classList.remove('visible');
    form.classList.remove('visible');
})
};

init();