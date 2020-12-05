const openForm = document.querySelector('.ram');
const clickedForm = document.querySelector('.open-ram-click')
const clickedCross = document.querySelector('.close');
const toggleLike = document.querySelector('.like');
//const redHeart = document.querySelector('.red');
//const whiteHeart = document.querySelector ('.white');
const appElem = document.querySelector('.app');
const appFormElem =  document.querySelector('.app-form');
const clickedCom = document.querySelector('#open-comment');
const openCom = document.querySelector('.comment-bar');
let comBool = false;


const init = () => {
  //redHeart = document.querySelector('.red');
  //thisRedHeart = this.document.querySelector('.red');
  //whiteHeart = document.querySelector ('.white');
  //thisWhiteHeart = this.document.querySelector ('.white');


  clickedForm.addEventListener('click', event => {
    event.preventDefault();
    openForm.classList.add('visible');
    clickedForm.style.display="none";
    appElem.classList.add('up');
    appFormElem.classList.add('up');
  });
  clickedCross.addEventListener('click', event => {
    event.preventDefault();
    openForm.classList.remove('visible');
    clickedForm.style.display="block";
    appElem.classList.remove('up');
    appFormElem.classList.remove('up');
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

  //thisWhiteHeart.addEventListener('click', event =>{
  //  console.log('fuck');
  //  event.preventDefault();
  //  event.target.classList.add('invisible');
  //  thisRedHeart.classList.add('visible');
  //});
  //thisRedHeart.addEventListener('click', event =>{
  //  console.log('shit');
  //  event.preventDefault();
  //  event.target.classList.remove('visible');
  //  thisWhiteHeart.classList.remove('invisible');
  //});

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


//Vue.component('tweet', {
// props: ['tweetText'],
// data: function () {
//   return {
//     charactersRemaining: 280,
//     commentText: '',
//     liked: false
//   }
// },
// methods: {
//   countCharacters: function() {
//     this.charactersRemaining = 280 - this.commentText.length
//   },
//   toggleLike: function() {
//     this.liked = !this.liked
//   }
// },
 // template:
//})
//new Vue({
//
 // data: {
 // el: '#app',
 //   tweets: [
 //     { id: 1, tweetText: 'hello! it was a hard run, because it was raining '},
 //     { id: 2, tweetText: 'hi! today I was preparing for the marathon'},
 //     {id: 3, tweetText:'i run 10 km'},
 //     {id: 4, tweetText: 'my friend and I ran 5 km at speed, I won'}
 //   ]
 // }
//})
