var name = 'JD'; // String

var age = 38; // Number/Integer

var is_day = false; // Boolean - true/false

var sky = 'nothing';

var fruits = ['orange', 'grape', 10, 'lime', 50, 'kiwi', ['banana', 'apple']]; // Array - storing a list/group of items

var personal_data = {
  name: 'JD', // key:value pairs -- property:value
  age: 38,
  hobbies: ['music', 'pickleball', 'fishing']
};

// console.log(sky);

// Logical Operation
  // test some condition -- if true
if ( is_day ) {
  // Some code
  sky = 'blue';
} else {
  sky = 'black';
}

// console.log(sky);

// Run some code when you tell it to
function asdfasdfdfsaf(here_that_thing_is) { // Reference -- Parameter
  console.log(here_that_thing_is);
}

// function $() {
//   console.log('test');
// }

// Pass in an argument - Just some value
// asdfasdfdfsaf('this is something I passed to the function', 15, 102, 'asdfasdf', 'another');

// var logo = document.querySelector('.navbar-brand');
// logo.style.backgroundColor = 'red'; // Actions -- Method/Property

// var $ = 'asdfasdf';
// $ <--- jQuery

// $('.navbar-brand').css({
//   color: 'orange',
//   background: 'cyan',
//   fontWeight: '800'
// });

// $('.navbar-brand').css('color', 'orange');

$('#change').on('click', function() {
  // console.log('test');
  $('.navbar-brand').css('background', 'red');
});

// $('#change').click(function() {

// });