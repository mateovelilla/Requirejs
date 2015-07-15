define(['jquery','foundation','events'],function(querrii,foundation,events){
	console.log('Hola desde main');
	querrii(document).foundation();
	querrii('#img').on('click',function(){
		events.init();
	});
});