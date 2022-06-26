let btn = document.getElementById('btn');
let body = document.body;
let docElem = document.documentElement ;

// add scroll event listener
window.addEventListener('scroll', function(){
  scrollPos = docElem.scrollTop;

  if (scrollPos > 0){
    btn.style.display = 'block'
  } else btn.style.display = 'none'
});

// add click event listener
btn.addEventListener('click', function(){
  body.scrollTop = 0
})






// for chrome and firefox ---------------

// let btn = document.getElementById('btn');
// let body = document.body;
// let docElem = document.documentElement;
// let offset = 100;
// let scrollPos ;
// let docHeight ;
// let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;


// calculate document height
// docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
// if (docHeight != 'undefined') {
// offset = docHeight / 4;
// }


// add scroll event listener
// window.addEventListener('scroll', function () {
// 	scrollPos = body.scrollTop || docElem.scrollTop;

// 	if (scrollPos > 0) {
// 		btn.style.display = 'block';
// 	} else btn.style.display = 'none';
// });

// add click event listener
// btn.addEventListener('click', function () {
// 	body.scrollTop = 0;
// });
