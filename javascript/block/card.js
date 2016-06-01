// var $cardColors = document.querySelectorAll('.card_colors');
//
// for (var i = 0; i < $cardColors.length; i++) {
//   $cardColors[i].addEventListener('click', function(){
//   var $card = this.parentNode.parentNode.parentNode;
//   $card.dataset.color = this.dataset.color;
//   for (var x = 0; x < $cardColors.length; x++) {
//     $cardColors[x].classList.remove('isActive');
//   }
//   this.classList.add('isActive');
//   });
// }

var $cards = document.querySelectorAll('.card');
var $cardColors = document.querySelectorAll('.card_colors');
for (var i = 0; i < $cards.length; i++) {
  $cards[i].addEventListener('click',function(event){
   var $this=  event.target;
   if($this.classList.contains('card_colors')){
     var $card = this;
     $card.dataset.color = $this.dataset.color;
     for (var x = 0; x < $cardColors.length; x++) {
        $cardColors[x].classList.remove('isActive');
     }
     $this.classList.add('isActive');

   }

  })
;}
