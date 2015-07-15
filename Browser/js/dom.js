define(['jquery','foundation'],function($,foundation){
	var texto = function(Message){

		var div = $('<div></div>',{'class':'alert-box warning roun','id':'alerta','text':Message});
		//var texto = $('<h1></h1>',{'text':Message});

		return div;
	};
	var remove = function(div){
		div.find('#alerta').remove();
	};
	return {
		texto : texto,
		remove : remove
	};
});