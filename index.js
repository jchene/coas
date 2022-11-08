function fillRows(){
	for (let i = 2; i < 6; i++)
		$("<div></div>").attr("class", "row row" + i).appendTo($(".container"))
}

function loadImages(){
	$(".imgcol").remove();
	var coas = ["order", "federation", "alliance", "assembly"];
	for (let i = 0; i < 4; i++){
		var img = $("<img>").attr("src", "ressources/" + coas[i] + "_background.jpg").attr("class", "img");
		var imgboard = $("<div></div>").attr("class", "col s3 imgcol " + coas[i]);
		img.appendTo(imgboard);
		imgboard.appendTo($(".row2"));
	}
}

function displayLeaderboard(){
	$(".imgtext").remove();
	var coas = ["order", "federation", "alliance", "assembly"];
	var boardRow = $(".row3")
	for (let i = 0; i < 4; i++){
		var p = $("<p>The " + coas[i].charAt(0).toUpperCase() + coas[i].slice(1) + "</p>").attr("class", "imgtext");
	  var	board = $("<div></div>").attr("class", "col s3 txtcol");
	  p.appendTo(board);
	  board.appendTo(boardRow);
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
	$(".imgtext").remove();
	var coas = ["order", "federation", "alliance", "assembly"];
	for (let i = 0; i < 4; i++){
		setStaff(coas[i]);
	}
}

$(document).ready(function() {
	fillRows();
	loadImages();
	$(".lbtn").click(function(){
		loadImages();
		displayLeaderboard();
	})
	$(".pbtn").click(function(){
		loadImages();
	})
	$(".hbtn").click(function(){
		$(".imgcol").remove();
	})
});
