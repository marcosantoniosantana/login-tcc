//const arealogin = document.querySelector(".area-login");
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var btEntrar = document.getElementById("enviarInfs");
var inputBotao = document.getElementById("fazerLogin");
var btCadastrar = document.getElementById('cadastrar');
var linkCadastro = document.getElementById('pgCadastro');


/*
	email.addEventListener('focus', ()=>{
		email.style.borderColor = "#3b3b3b";
	});
	*/


	btEntrar.onclick = ()=>{
		inputBotao.click(validar());
		//inputBotao.addEventListener('click', a());
	}

	btCadastrar.onclick = () => {
		linkCadastro.click();
	}

	function validar(){
		var emailDados = document.getElementById('email').value;
		var senhaDados = document.getElementById('senha').value;
		var registroEmail = "cliente.um@gmail.com";
		var registrosenha = "123456";

		var erroLogin = document.getElementById('infsErradas');
		erroLogin.style.color = "rgb(175 1 1)";
		erroLogin.style.bottom = "-5px";
		erroLogin.style.top = "-5px";
		//erroLogin.innerHTML = "Preencha os campos";

		//var erroDados = document.getElementById('infsErradas');
		//erroDados.style.color = "rgb(175 1 1)";
		//erroDados.style.bottom = "-5px";
		//erroDados.style.top = "-5px"
		

		//var loginInfs = document.getElementById('loginInfs');


		if(emailDados == registroEmail && senhaDados == registrosenha){
			//window.alert("E-mail correto! e senha corretos, Iniciando login");
			onload(abrirInicio());

		} else if (emailDados == null || emailDados == "" && senhaDados == null || senhaDados == "") {
			//window.alert("Login e/ ou senha invalidos, tente novamente");
			erroLogin.innerHTML = "Preencha os campos";
		} else {
			//window.alert('Informações incorretas');
			erroLogin.innerHTML = "Login e/ ou senha incorretos";
		}
	}

	function abrirInicio(){
		var linkInicio = document.getElementById('pHome');
		//window.alert("Iniciando login, bem vindo");

		linkInicio.click();
	}