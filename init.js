
function logOutClient(){
	console.log('Doing logout client')
	const auth = new Auth();
	window.location.replace("/");

	document.querySelector(".logout").addEventListener("click", (e) => {
		auth.logOut();
	});
}
