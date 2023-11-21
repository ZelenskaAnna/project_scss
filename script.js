function navToggle(){
	document.getElementById('headerNav').classList.toggle('is-active');
}
document.addEventListener("DOMContentLoaded", function () {
	function navToggle() {
	  var headerNav = document.getElementById('headerNav');
	  headerNav.classList.toggle('is-active');
	}
  
	var menuLinks = document.querySelectorAll('.header__a');
  
	menuLinks.forEach(function (link) {
	  link.addEventListener('click', function () {
		var headerNav = document.getElementById('headerNav');
		headerNav.classList.remove('is-active');
	  });
	});
  });