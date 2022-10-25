
function logOutClient(){
	const auth = new Auth();

	document.querySelector(".logout").addEventListener("click", (e) => {
		auth.logOut();
	});
	console.log('Doing logout client')
}
