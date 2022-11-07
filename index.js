function setLeaderboard(name){
	var img = $("<img>").attr("src", "ressources/" + name + "_background.jpg");
	img.attr("class", "img");
	var p = $("<p>The " + name.charAt(0).toUpperCase() + name.slice(1) + "</p>").attr("class", "imgtext");
	var leaderboard = $("<div></div>").attr("class", "col s3 imgcol");
	img.appendTo(leaderboard);
	p.appendTo(leaderboard);
	leaderboard.appendTo($(".row2"));
}

function displayLeaderboard(){
	var coas = ["order", "federation", "alliance", "assembly"];
	$(".imgcol").remove();
	for (let i = 0; i < 4; i++){
		setLeaderboard(coas[i]);
	}
}

function setStaff(name){
	var img = $("<img>").attr("src", "ressources/" + name + "_background.jpg");
	img.attr("class", "img");
	var p = $("<p>The " + name.charAt(0).toUpperCase() + name.slice(1) + "</p>").attr("class", "imgtext");
	var leaderboard = $("<div></div>").attr("class", "col s3 imgcol");
	img.appendTo(leaderboard);
	p.appendTo(leaderboard);
	leaderboard.appendTo($(".row2"));
}

function displayStaff(){
	var coas = ["order", "federation", "alliance", "assembly"];
	$(".imgcol").remove();
	for (let i = 0; i < 4; i++){
		setStaff(coas[i]);
	}
}

$(document).ready(function() {
	displayLeaderboard();
	$(".lbtn").click(function(){
		displayLeaderboard();
	})
	$(".pbtn").click(function(){
		displayStaff();
	})
	$(".hbtn").click(function(){
		$(".imgcol").remove();
	})
});