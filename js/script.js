const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


var conter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 4){
		counter = 1;
	}
},
5000);


setInterval(slide,5000);
function slide(){
    elemento = $('.ativo').next();
    if(elemento.hasClass('sld')){
        x = parseInt($('.slider').eq(0).css('margin-left')) / 250;

        final = (x - 1) * 250;
        $('.slider').animate({'margin-left': final},500);
        elemento = $('.ativo');
        elemento.next().addClass('ativo');
        elemento.removeClass('ativo');
    }else{
        $('.slide').css('margin-left',0);
        $('.ativo').removeClass('ativo');
        $('.sld').eq(0).addClass('ativo');
    }
}

$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});

var $homeIcon = $('.fs-1');

$(window).resize(function() {
  if (window.innerWidth <= 800) $homeIcon.addClass('6');
  else $homeIcon.removeClass('-1');
});