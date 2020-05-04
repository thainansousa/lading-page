$(function(){
	
	$('.md-50 .form').submit(function(){
		alert('\u{274C} Olá, essa página ela é um exemplo, os botões eles são apenas ilustrações!')
		return false;
	})
	$('.banner-principal .md-50 a').click(function(){
		alert('\u{274C} Olá, essa página ela é um exemplo, os botões eles são apenas ilustrações!')
		return false;
	})
	$('.newsletter-section .newsletter').submit(function(){
		alert('\u{274C} Olá, essa página ela é um exemplo, os botões eles são apenas ilustrações!')
		return false;
	})

	$('.md-50 .form input[name=telefone]').mask('(99) 99999-9999')
});