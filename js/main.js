var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);
////////////////////////////////////////////////////////
$('.products-slider').owlCarousel({
  loop:true,
  dots:false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});
$('.shoe-slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
            nav:false,
        },
        768:{
            items:2,
            nav:false,
            dots:false,
        },
        1000:{
            items:3,
            nav:false,
            dots:false,
        },
        1366:{
            items:4,
            nav:false,
            dots:false,
        },
        1500:{
            items:5,
            nav:false,
            dots:false
        }
    }
});
$('.shoe-slider-second').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            nav:false,
            dots:false
        },
        1000:{
            items:3,
            nav:false,
            dots:false
        },
        1366:{
            items:4,
            nav:false,
            dots:false
        },
        1500:{
            items:5,
            nav:false,
            dots:false
        }
    }
});
////////////////////////////////////////////////////////
var owl = $('.shoe-slider');
var owlSecond = $('.shoe-slider-second');

owl.owlCarousel();
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});
$('.customNextBtnSecond').click(function() {
    owlSecond.trigger('next.owl.carousel');
});
$('.customPrevBtnSecond').click(function() {
    owlSecond.trigger('prev.owl.carousel', [300]);
});
function triggerLeft() {
    var owlThird = $('.products-slider');
    owlThird.trigger('prev.owl.carousel', [700]);
}
function triggerRight() {
    var owlThird = $('.products-slider');
    owlThird.trigger('next.owl.carousel', [700]);
}
$('.right-button').click(function() {
    owlThird.trigger('next.owl.carousel');
    $('.right-button').click(function() {
        owlThird.trigger('next.owl.carousel');
    });
});
$('.left-button').click(function() {
    owlThird.trigger('prev.owl.carousel', [300]);
});

/////////////// Anasayfa Ürün Kategori Tabs /////////////
$(function () {
  $('.tab-content').hide();
  $('#th-tab-one').fadeIn('slow');
  $('#one').click(function() {
      $('.tab-content').hide();
      $('#th-tab-one').fadeIn('slow');
      $('#one').addClass("active");
      $('#two').removeClass("active")
      $('#three').removeClass("active")
  })
  
  $('#two').click(function() {
      $('.tab-content').hide();
      $('#th-tab-two').fadeIn('slow');
      $('#two').addClass("active");
      $('#one').removeClass("active")
      $('#three').removeClass("active")
  })
  
  $('#three').click(function() {
      $('.tab-content').hide();
      $('#th-tab-three').fadeIn('slow');
      $('#three').addClass("active");
      $('#one').removeClass("active")
      $('#two').removeClass("active")
  })
  
});
//////////////// Sepet aç-kapat ////////////////////////
$('#cart-icon').click(function(){
  $('.mycart').toggleClass('cart-active');
});
///////////// Sepet adet arttırma //////////////////////
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }
/////////////// Navigation Menu Js ////////////////////
const navigation = document.querySelector('.navigation');
const mblMenu = document.getElementById('mbl-menu');
function toggleMenuIcon() {
  navigation.classList.toggle('active');
    mblMenu.classList.toggle('menu-active');
}
navigation.addEventListener('click', toggleMenuIcon, false);

////////////// Homepage Cursor Nav ////////////////////
var owlThird = $('.products-slider');
var wrapper = document.querySelector('.products-slider');
var btns = wrapper.getElementsByTagName('button');
var wrapperWidth = wrapper.offsetWidth;
var wrapperLeft = wrapperWidth / 2;
function triggerLeft() {
    var owlThird = $('.products-slider');
    owlThird.trigger('prev.owl.carousel', [700]);
}
function triggerRight() {
    var owlThird = $('.products-slider');
    owlThird.trigger('next.owl.carousel', [700]);
}
wrapper.addEventListener('mousemove', (event) => {
    var xSet = event.clientX;
    if (xSet < wrapperLeft) {
        wrapper.classList.remove('nav-right')
        wrapper.classList.add('nav-left')
    }else if (xSet > wrapperLeft) {
        wrapper.classList.remove('nav-left')
        wrapper.classList.add('nav-right')
    }else if (btns[i].style.cursor = "pointer") {
        wrapper.classList.remove('nav-left')
        wrapper.classList.remove('nav-right')
    }
});
for (i=0; i < btns.length; i++) {
    btns[i].addEventListener('mouseenter', () => {
        [...btns].classList.toggle('z99')
    })
}

console.log(btns)