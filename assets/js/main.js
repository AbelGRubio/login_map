

function signUpOverlay(){
	const container = document.getElementById('container');
	const signUpButtonOverlay = document.getElementById('signUpOverlay');

	signUpButtonOverlay.addEventListener('click', () => {
		container.classList.remove("down-panel-active");
		container.classList.add("right-panel-active");
		console.log("singUpButtonOverlay clicked");
	});
}

function signInOverlay(){
	const container = document.getElementById('container');
	const signInButtonOverlay = document.getElementById('signInOverlay');

	signInButtonOverlay.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
		console.log("signInButtonOverlay clicked");
	});
	
}

function forgotPassword(){
	const container = document.getElementById('container');
	const forgotPasswordButton = document.getElementById('forgotPassword');

	forgotPasswordButton.addEventListener('click', () => {
		container.classList.add("down-panel-active");
		container.classList.remove("right-panel-active");
		console.log("forgotPassword clicked");
	});
}

function signIn(){
	const signInButton = document.getElementById('SignIn');

	signInButton.addEventListener('click', () => {
		console.log("signInButton clicked");
	});
	window.location.replace("/welcome.html");
}

function signUp(){
	const signUpButton = document.getElementById('SignUp');

	signUpButton.addEventListener('click', () => {
		console.log("signUpButton clicked");
	});
}

function backReference(){
	const container = document.getElementById('container');
	const backReferenceButton = document.getElementById('backReference');

	backReferenceButton.addEventListener('click', () => {
		container.classList.remove("down-panel-active");
		console.log("backReference clicked");
	});
}

function recoverMessage(){
	const RecoverMessageButton = document.getElementById('RecoverMessage');

	RecoverMessageButton.addEventListener('click', () => {
		console.log("RecoverMessage clicked");
	});
}