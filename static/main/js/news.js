// src="https://code.jquery.com/jquery-3.5.1.min.js"
// src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"


// $('form').submit(function() {
//     // для читаемости кода
//     var $form = $(this);

//     // проверяем поле с именем пользователя
//     if ($form.find('textarea').val() === '') {
//         // добавляем текст ошибки
//         // прерываем дальнейшую обработку
//         return false;
//     }

//     // всё хорошо – отправляем запрос на сервер
//     $.post(
//         $form.attr('action'), // ссылка куда отправляем данные
//         $form.serialize()     // данные формы
//     );

//     // отключаем действие по умолчанию
//     return false;
// });



// $('#sumbit').click(function(){
//     alert($('#textarea').val());
// });


// Vue.component('tweet', {
//     props: ['tweetText'],
//     data: function () {
//       return {
//         charactersRemaining: 280,
//         commentText: '',
//         liked: false
//       }
//     },
//     methods: {
//       countCharacters: function() {
//         this.charactersRemaining = 280 - this.commentText.length
//       },
//       toggleLike: function() {
//         this.liked = !this.liked
//       }
//     },
//     template: `<div class="status">
//     <div class="tweet-content">
//       <img src="https://i.pinimg.com/originals/51/c6/d5/51c6d537b0552ca4016d6bd8f894411f.png" class="logo" alt="logo">
//       <div class="tweet">
//         <a >Name</a>
//         <span>@login</span>
//         <p class="tweet-text">
//           {{ tweetText }}
//         </p>
//         <div class="reactions">
//           <span v-on:click="toggleLike" class="like">
//             <span v-if="liked">&#10084&#65039</span>
//             <span v-else>&#x1F90D</span>
//           </span>
//         </div>
//       </div>
//     </div>
//     <div class="comment-bar">
//       <textarea placeholder="tweet your reply" v-model="commentText" v-on:input="countCharacters">
//       </textarea>
//       <span class="characters-remaining">
//         {{ charactersRemaining }} characters remaining
//       </span>
//     </div>
//   </div>`
//   })

//   new Vue({
//     el: '#app',
//     data: {
//       tweets: [
//         { id: 1, tweetText: 'hello! it was a hard run, because it was raining '},
//         { id: 2, tweetText: 'hi! today I was preparing for the marathon'},
//         {id: 3, tweetText:'i run 10 km'},
//         {id: 4, tweetText: 'my friend and I ran 5 km at speed, I won'}
//       ]
//     }
//   })



const openForm = document.querySelector('.ram');
const clickedForm = document.querySelector('.open-ram-click')
const clickedCross = document.querySelector('.close');
const toggleLike = document.querySelector('.like');
//const redHeart = document.querySelector('.red');
//const whiteHeart = document.querySelector ('.white');
const appElem = document.querySelector('.app');
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
  })
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

init();