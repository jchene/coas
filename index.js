function cleanContainer(){
  $(".imgtext").remove();
  $(".imgcol").remove();
  $(".txtcol").remove();
}

function fillRows(){
	for (let i = 2; i < 6; i++)
		$("<div></div>").attr("class", "row row" + i).appendTo($(".container"))
}

function loadImages(){
	cleanContainer()
	var coas = ["order", "federation", "alliance", "assembly"];
	for (let i = 0; i < 4; i++){
		var img = $("<img>").attr("src", "ressources/" + coas[i] + "_background.jpg").attr("class", "img");
		var imgboard = $("<div></div>").attr("class", "col s3 imgcol " + coas[i] + "img");
		img.appendTo(imgboard);
		imgboard.appendTo($(".row2"));
	}
}

function displayLeaderboard(){
	$(".imgtext").remove();
  $(".txtcol").remove();
	var coas = ["order", "federation", "alliance", "assembly"];  
	for (let i = 0; i < 4; i++){
		var p = $("<p>The " + coas[i].charAt(0).toUpperCase() + coas[i].slice(1) + "</p>").attr("class", "imgtext");
	  var	board = $("<div></div>").attr("class", "col s3 txtcol " + coas[i] + "txt1");
	  p.appendTo(board);
	  board.appendTo($(".row3"));
	  p = $("<p>100 000</p>").attr("class", "imgtext");
	  board = $("<div></div>").attr("class", "col s3 txtcol " + coas[i] + "txt2");
	  p.appendTo(board);
	  board.appendTo($(".row4"));
	}
}

function displayStaff(){
	$(".imgtext").remove();
  $(".txtcol").remove();
	var coas = ["order", "federation", "alliance", "assembly"];
	for (let i = 0; i < 4; i++){
		var img = $("<img>").attr("src", "ressources/medium_jchene.jpg");
	  img.attr("class", "staffimg imgtext");
  	var p = $("<p>Brume</p>").attr("class", "stafftxt imgtext");
  	var staffBoard = $("<div></div>").attr("class", "col s3 txtcol");
  	img.appendTo(staffBoard);
    p.appendTo(staffBoard);
  	staffBoard.appendTo($(".row4"));
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
		displayStaff();
	})
	$(".hbtn").click(function(){
		cleanContainer();
	})
});
