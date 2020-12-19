const openForm = document.querySelector('.ram');
const clickedForm = document.querySelector('.open-ram-click')
const clickedCross = document.querySelector('.close');
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
    console.log('blin');
    comBool=true;
    openCom.classList.add('visible');
    } else if (event.target.matches('.open-comment') && comBool===true) {
      event.preventDefault();
      console.log('be');
      comBool=false;
      openCom.classList.remove('visible');
    }
  });

};

var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input)
  {
    var label	 = input.nextElementSibling,
    labelVal = label.innerHTML;
    input.addEventListener('change', function(e)
      {
        var fileName = '';
        if(this.files && this.files.length > 1)
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
        fileName = e.target.value.split( '\\' ).pop();
        if( fileName )
        label.querySelector('span').innerHTML = fileName;
        else
        label.innerHTML = labelVal;
});
})
init();
