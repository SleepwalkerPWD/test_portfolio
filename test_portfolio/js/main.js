$( document ).ready(function() {


//Модальное окно, открыть по кнопке
$('.header__autorisation-button').click(function() {
	$('.wrapper-all-blur').css('filter', 'blur(5px)');
	$('.js-overlay').fadeIn();
	setTimeout(detail, 50000);
	// $('.js-overlay').addClass('disabled');
});


//Модальное окно исчезает через 50 секунд
function detail(){
	$('.js-overlay').fadeOut();
	$('.wrapper-all-blur').css('filter', 'none');
}


// Закрыть на крестик
$('.js-close').click(function(){
	$('.js-overlay').fadeOut();
	$('.wrapper-all-blur').css('filter', 'none');
});


//Закрыть по клику вне окна
$(document).mouseup(function (e)  {
	var popup = $('.js-popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay').fadeOut();
		$('.wrapper-all-blur').css('filter', 'none');
	}
});

//Кнопка вверх
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});

//Поднять при нажатии на кнопку
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});


});