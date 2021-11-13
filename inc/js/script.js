//console.log('script connnected');
//(function($){
window.GlobalVars = window.GlobalVars || {};

GlobalVars.user = {uid: 1};
var user = GlobalVars.user;


//

document.addEventListener('DOMContentLoaded', (e) => {
	homePage();
	homePageIdx();
	contactPage();
	contactListPage();
	loginPage();
	profilePage();
let btnFont = document.querySelector("#btnFont");
let fontStr, hypLink, link = '';		

btnFont.addEventListener('click', () =>{
	if(document.getElementById('font1')){
		document.getElementById('font1').remove();
	}
	fontStr = document.querySelector("#myFont").value;
	hypLink = fontStr.match(/\".*?\"/);
	let link = document.createElement("link");
	link.setAttribute("src", hypLink[0].replace(/\"/g, ''));
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("id", "font1");
	document.head.appendChild(link);

	console.log('btn clicked', hypLink[0]);
});
	function homePage(){
		if(document.getElementById('bg')){
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			var renderer = new THREE.WebGLRenderer({
				canvas: document.querySelector('#bg')
			});
			//console.log(scene);
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.position.setZ(30);
			camera.position.setX(10);

			//Cube
			var textureLoader = new THREE.TextureLoader();                             
			var img = textureLoader.load( 'inc/img/profile.png' );   
			var geometry = new THREE.BoxGeometry(3, 4, 3);
			//var material = new THREE.MeshBasicMaterial({color: 0xFF6347})
			var material = [
				new THREE.MeshBasicMaterial({color: 0xFF6347}),
				new THREE.MeshBasicMaterial({color: 0xFF6347}),
				new THREE.MeshBasicMaterial({color: 0xFF6347}),
				new THREE.MeshBasicMaterial({color: 0xFF6347}),
				new THREE.MeshBasicMaterial({
					map: img
				}),
				new THREE.MeshBasicMaterial({color: 0xFF6347}),
			];
			var cube = new THREE.Mesh(geometry, material);
			cube.rotation.y += 0.3;
			scene.add(cube);

			//Torus
			var geometry = new THREE.TorusGeometry(10, 3, 16, 100);
			var material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
			var torus = new THREE.Mesh(geometry, material);

			// scene.add(torus);

			// Lights

			/*var pointLight = new THREE.PointLight(0xffffff);
			pointLight.position.set(5, 5, 5);

			var ambientLight = new THREE.AmbientLight(0xffffff);
			scene.add(pointLight, ambientLight);*/

			// Scroll Animation

			function moveCamera() {
			  var t = document.body.getBoundingClientRect().top;
        camera.position.z = t * -0.01;
			  camera.position.x = t * -0.0002;
			  camera.rotation.y = t * -0.0002;
			}

			document.body.onscroll = moveCamera;
			moveCamera();

			function animate(){
				requestAnimationFrame(animate);

				// torus.rotation.x += 0.01;
				// torus.rotation.y += 0.005;
				// torus.rotation.z += 0.01;
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.02;
				cube.rotation.z += 0.01;
				renderer.render(scene, camera);
			}

			animate();
		}

	}
	function homePageIdx(){
		if(document.getElementById('pgHome')){
			var data = {
				// meme: 'Condescending-Wonka',
				// top: 'Topper',
				// bottom: 'Botts'
			};
			//var path = "https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=Condescending-Wonka&bottom=Bottom%20Text&top=Top%20Text&font=Impact&font_size=50";
			var path = "https://ronreiter-meme-generator.p.rapidapi.com/images";
			var type = "GET";
			var headers = {
					"x-rapidapi-key": "6606126959mshaff6a308c09b990p1e81d5jsnb336cfd6f097",
					"x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com"
			};
			/*
			xhr.open("GET", "https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=Condescending-Wonka&bottom=Bottom%20Text&top=Top%20Text&font=Impact&font_size=50");
xhr.setRequestHeader("x-rapidapi-key", "6606126959mshaff6a308c09b990p1e81d5jsnb336cfd6f097");
xhr.setRequestHeader("x-rapidapi-host", "ronreiter-meme-generator.p.rapidapi.com");
			*/
			xhttp(serializeObj(data), path, type, headers, function(info){
				var res = JSON.parse(info);
				console.log(res);
		   	//document.getElementById("txtArea").innerHTML = res.formType;
			}); 
		}
	}
	function cnvListPage(){
		if(document.getElementById('cnvListPage')){

		}
	}
	function contactPage(){
		if(document.getElementById('pgContact')){
			var btnContact = document.querySelector("#btnSubmitContact");
			var formContact = document.querySelector("#formContact");
			
			//Builds Game Genre dropdown
			buildGameGenres();
			// console.log('here');
			btnContact.addEventListener('click', () =>{

				var data = {
					formType: 'contact', 
					fName: formContact.elements['txtFName'].value,
					lName: formContact.elements['txtLName'].value,
					email: formContact.elements['txtEmail'].value,
					gameGenre: formContact.elements['selGameGenre'].value
						
				};

			//xhttp(JSON.stringify(data), 'ajax/forms.php', 'POST', 'application/json', function(info){
			xhttp(serializeObj(data), 'ajax/forms.php', 'POST', 'application/x-www-form-urlencoded', function(info){
					var res = JSON.parse(info);
			   	document.getElementById("txtArea").innerHTML = res.formType;
				}); 

			});
		}
	}
	
});

function contactListPage(){
	if(document.getElementById('pgContactList')){
		var data = {
				formType: 'contactList',
				formData: {}	
			};
		contactList(JSON.stringify(data));
}}
function loginPage(){
	if(document.getElementById('pgLogin')){
		/*var data = {
				formType: 'login',
				formData: {}	
			};*/
		var form = document.querySelector('#formLogin');
		btnLogin = document.querySelector('#btnLogin');
		btnLogin.addEventListener('click', (e) =>{
			//var self = e.toElement;
			var data = new FormData(form);
			var keys = ['formType', 'email', 'pw'];
			var vals = [
				'login', 
				form.elements['email'].value,
				form.elements['pw'].value
			];
			/*var len = keys.length;

			for(let i = 0; i < len; i++){
				data.append(keys[i], vals[i]);
			}*/
			
/*			var data = {
				formType: 'login',
				email: form.elements['email'].value,
				pw: form.elements['pw'].value
			};*/
			// console.log(data);
			// console.log(JSON.stringify(data));
			xhttp(data, 'ajax/forms.php', 'POST', 'application/x-www-form-urlencoded', function(info){
					console.log(info);
					//console.log(JSON.parse(info));
					
			});	
		});	
	}
}

function profilePage(){
	if(document.getElementById('pgProfile')){
		var btnEdit = document.querySelector("#btnEdit");
		var btnCancel = document.querySelector("#btnCancel");
		var btnSave = document.querySelector("#btnSave");

		var formProfile = document.querySelector("#formProfile");
		/*var data = {
			formType: 'profile'
		};*/
		var data = {
			formType: 'profile',
			formData: {uid: 1}	
		};
		var dataUpdate = {
			formType: 'profileUpdate',
			formName: 'Profile Update',
			formData: {uid: 1}	
		};	

		//console.log(user);
		btnEdit.addEventListener('click', (e) =>{
			var self = e.toElement;
			var siblings = getSiblings(self);
			allClass(siblings, 'toggle', 'd-none');
			self.classList.add('d-none');

			profileEditor();
		});

		btnCancel.addEventListener('click', (e) =>{
			var self = e.toElement;
			var siblings = getSiblings(self);
			allClass(siblings, 'toggle', 'd-none');
			self.classList.add('d-none');

			profileEditorHide();
		});

		btnSave.addEventListener('click', (e) =>{
			var self = e.toElement;
			dataUpdate.formData.f_name = formProfile.elements['f_name'].value;
			dataUpdate.formData.l_name = formProfile.elements['l_name'].value;
			dataUpdate.formData.email = formProfile.elements['email'].value;
			dataUpdate.formData.biography = formProfile.elements['biography'].value;

			xhttp(JSON.stringify(dataUpdate), 'ajax/profile.php', 'POST', 'application/json', function(info){
				console.log(info);
				console.log(JSON.parse(info));
				
			});
			
			// var xhr = xhr(data, 'ajax/profile.php', 'POST', 'application/json');
/*			var siblings = getSiblings(self);
			allClass(siblings, 'remove', 'd-none');
			self.classList.add('d-none');*/


		});
		getProfile(JSON.stringify(data));
}}

function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	console.log(this.responsetext);
     document.getElementById("txtArea").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/data/ajax_text.txt", true);
  xhttp.send();
}

function contactForm(dataString) {

	xhttp(dataString, 'ajax/forms.php', 'POST', 'application/json', function(info){
		var res = JSON.parse(info);
		console.log(res);
   	document.getElementById("txtArea").innerHTML = res.formType;
	}); 
}

function contactList(dataString) {
  var xhttp = new XMLHttpRequest();
 	console.log(dataString);
 	xhttp.open("POST", "ajax/forms.php"); 

  // Set the request header i.e. which type of content you are sending
  xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhttp.onreadystatechange = function() {
  	var resultData;
  	var rows = '';
    if (this.readyState == 4 && this.status == 200) {

    	var res = JSON.parse(this.responseText);
    	resultData = res.data;

    	for(let user of resultData){
    		rows += '<tr>'+
    		'<th scope="row">'+user.uid+'</th>'+
    		'<td>'+user.f_name+'</td>'+
    		'<td>'+user.l_name+'</td>'+
    		'<td>'+user.email+'</td>';
    	}
    	
    	document.querySelector('#tblContact tbody').innerHTML = rows;

    }
  };
	xhttp.send(dataString);
}

function getProfile(dataString) {
  var xhttp = new XMLHttpRequest();
 	console.log(dataString);
 	xhttp.open("POST", "ajax/profile.php"); 

  // Set the request header i.e. which type of content you are sending
  xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhttp.onreadystatechange = function() {
  	var resultData;
  	var area1 = '';
  	var area2 = '';
    if (this.readyState == 4 && this.status == 200) {
    	// console.log(this.responseText);
    	var res = JSON.parse(this.responseText);
    	resultData = res.data[0];
    	//console.log(resultData);
    	for(var prop in resultData){
    		user[prop] = resultData[prop];
    	}

    	area1 += '<label>'+user.f_name+'</label>'+
    		'<label>'+user.l_name+'</label>'+
    		'<label>'+user.uid+'</label>'+
    		'<label>'+user.email+'</label>';

			area2 += '<p>'+user.biography+'</p>';

    	document.querySelector('#profileStats .displayArea').innerHTML = area1;
    	document.querySelector('#bioWrapper .displayArea').innerHTML = area2;

    }
  };
	xhttp.send(dataString);
}
	function getSiblings(elem) {
		return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
			return sibling !== elem;
		});
	}

	function xhttp(data, path, type, headers, cb){
		var xhttp = new XMLHttpRequest();
		console.log('fired');
		xhttp.withCredentials = true;
	 	xhttp.open(type, path); 
	 	
	  // Set the request header i.e. which type of content you are sending
	  //xhttp.setRequestHeader("Content-Type", headerType);
	  if(Object.keys(headers).length > 0){
	  	let len = headers.length;
	  	for(let prop in headers){
	  		// console.log(prop);
	  		// console.log(headers[prop]);
	  		xhttp.setRequestHeader(prop, headers[prop]);
	  	}
	  }
	  console.log(xhttp);
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	cb(this.responseText);
	    }
		}
		xhttp.send(data);
	}
	
	function wwwEnc(data){
		return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
	}

	function serializeObj( obj ) {
    let str = '' + Object.keys(obj).reduce(function(a, k){
        a.push(k + '=' + encodeURIComponent(obj[k]));
        return a;
    }, []).join('&');
    // console.log(str);
    return str;
	}

	//Applies to all items in array
	function allClass(arr, action, value){
		Array.from(arr).forEach(item => item.classList[action](value));
	}

	function buildGameGenres(){
		var data = {
				formType: 'getAddUser'
			};
			//console.log(data);
			/*console.log(serializeObj(data));
			return;*/
			//xhttp(JSON.stringify(data), 'ajax/forms.php', 'POST', 'application/json', function(res){
			xhttp(serializeObj(data), 'ajax/forms.php', 'POST', 'application/x-www-form-urlencoded', function(res){
				var opt = '<option value=""></option>';
				
				resultData = JSON.parse(res).data;
    		for(var prop in resultData){
    			opt += '<option value='+resultData[prop].id+'>'+resultData[prop].type+'</option>';
    		}
	
    		document.querySelector('#selGameGenre').innerHTML = opt;
			});
	}
	function profileEditor(){
		var displayAreas = document.querySelectorAll('.displayArea');
		var editAreas = document.querySelectorAll('.editArea');
		var editArea1 = document.querySelector('#profileStats figure.editArea');
		var editArea2 = document.querySelector('#bioWrapper .editArea');
		
		var area1 = '<label>First Name:</label><input type="text" id="f_name" name="f_name" value="'+user.f_name+'"/>'+
			'<label>Last Name:</label><input type="text" id="l_name" name="l_name" value="'+user.l_name+'"/>'+
			'<label>Email:</label><input type="text" id="email" name="email" value="'+user.email+'"/>';
		var area2 = '<label>Biography:</label><br/><textarea id="biography" name="biography" class="form-control">'+user.biography+'</textarea>';

		editArea1.innerHTML = area1;
		editArea2.innerHTML = area2;

		displayAreas.forEach((el) =>{
			el.classList.add('d-none');
		});
		editAreas.forEach((el) =>{
			el.classList.remove('d-none');
		});

	}
	function profileEditorHide(){
		var displayAreas = document.querySelectorAll('.displayArea');
		var editAreas = document.querySelectorAll('.editArea');

		displayAreas.forEach((el) =>{
			el.classList.remove('d-none');
		});
		editAreas.forEach((el) =>{
			el.classList.add('d-none');
		});
	}

//)(jQuery);