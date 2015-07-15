define(["jquery","foundation","dom"],function($,f,d){
	console.log('Hola desde events');
	var init = function(){
		console.log('init process in events....');
		$('#hi')
			.append(d.texto('Hi'))
			.show(3000)
			.promise().done(function(){
				$('#name').append(d.texto("My name is..."))
					.show(3000)
					.promise().done(function(){
						$('#hi').attr('style','display:none;');
						$('#name').attr('style','display:none;');
						$('#Franky').attr('src','img/Frankenstein.jpg')
							.attr('style','width:20%')
							.animate({
								width: "100%",
							},2000)
							.promise().done(function(){
								d.remove($('#hi'));
								d.remove($('#name'));
								$('#Franky').attr('src','img/frankenstein.jpg');
							});
					})
			});
	}
	return {
		init:init
	};
});