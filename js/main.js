

/* Slider*/
$(document).ready(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: 'dots-style',
    responsive: [{
      breakpoint: 1200,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
      }
   }, {
      breakpoint: 760,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
      }
   }]
  });

})




/*Menu*/
burger.onclick = function myFunction(){
  
  let item = document.getElementById('myMenu');
  if (item.className === "menu"){
      
      item.className += " responsive";
  } else {
      item.className = "menu";
      
  }
}


/*Кнопка наверх*/
let smoothJumpUp = function() {
   if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
       window.scrollBy(0,-100);
       setTimeout(smoothJumpUp, 1);
   }
}

window.onscroll = function() {
 let scrolled = window.pageYOffset || document.documentElement.scrollTop;
 if (scrolled > 400) {
    document.getElementById('upbutton').style.display = 'block';
 } else {
    document.getElementById('upbutton').style.display = 'none';
 }
}





/* Filtration gallery*/

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("pic");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}














