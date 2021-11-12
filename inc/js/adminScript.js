window.GlobalVars = window.GlobalVars || {};

/*GlobalVars.user = {uid: 1};
var user = GlobalVars.user;*/

document.addEventListener('DOMContentLoaded', (e) => {
	adminPage();
});

function adminPage(){
		if(document.querySelector('.pgAdminDashboard')){

			var btnUpdateGames = document.querySelector("#btnUpdateGames");

			btnUpdateGames.addEventListener('click', () =>{

				var data = {
					action: 'updateGameList'		
				};

				xhttp(serializeObj(data), '../ajax/utils.php', 'POST', 'application/x-www-form-urlencoded', function(res){

					resultData = JSON.parse(res);
					alert(resultData.msg);
				});
		})
	}
}