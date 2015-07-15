requirejs.config({
	baseUrl: 'helpers',
	paths: {
		main:'main',
		view:'/recurso/view',
	}
});
requirejs(['view'],function(view){
	view.init();
});