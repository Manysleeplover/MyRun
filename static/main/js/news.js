
const openForm = document.querySelector('.ram');
const clickedForm = document.querySelector('.open-ram-click')
const clickedCross = document.querySelector('.close');
const toggleLike = document.querySelector('.like');
const appElem = document.querySelector('.app');
const clickedCom = document.querySelector('#open-comment');
const openCom = document.querySelector('.comment-bar');
let comBool = false;


const init = () => {

  clickedForm.addEventListener('click', event => {
    event.preventDefault();
    openForm.classList.add('visible');
    clickedForm.style.display="none";
    appElem.classList.add('up');
  });
  clickedCross.addEventListener('click', event => {
    event.preventDefault();
    openForm.classList.remove('visible');
    clickedForm.style.display="block";
    appElem.classList.remove('up');
  });

  appElem.addEventListener('click', event =>{
    if (event.target.matches('.open-comment') && comBool===false){
    event.preventDefault();
    comBool=true;
    openCom.classList.add('visible');
    } else if (event.target.matches('.open-comment') && comBool===true) {
      event.preventDefault();
      comBool=false;
      openCom.classList.remove('visible');
    }
  }) 
};
  
init();
