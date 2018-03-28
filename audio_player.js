$(document).ready(function() {
		var filePath = "http://archive.org/details/Best100InstrumentalSongs/"
		var songDetails = [{
				"number" : "1",
				"name" : "Blue Star",
				"duration" : "02:14",
				"artist" : "The Ventures",
				"file" : "053-TheVentures-BlueStar.mp3"
		}, {
				"number" : "2",
				"name" : "I Want Some Lovin",
				"duration" : "02:30",
				"artist" : "Louis Prima",
				"file" : "050-LouisPrima-IWantSomeLovin.mp3"

		}, {
				"number" : "3",
				"name" : "Feels So Good",
				"duration" : "03:33",
				"artist" : "Chuck Mangione",
				"file" : "028-ChuckMangione-FeelsSoGood.mp3"
		}, {
				"number" : "4",
				"name" : "Tequila",
				"duration" : "02:13",
				"artist" : "The Champs",
				"file" : "096-TheChamps-Tequila.mp3"
		}, {
				"number" : "5",
				"name" : "Calcutta",
				"duration" : "02:16",
				"artist" : "Lawrence Welk",
				"file" : "088-LawrenceWelk-Calcutta.mp3"
		}, {
				"number" : "6",
				"name" : "I Feel Love",
				"duration" : "06:57",
				"artist" : "Vanessa Mae",
				"file" : "080-VanessaMae-IFeelLove.mp33"
		}, {
				"number" : "7",
				"name" : "Samba Pa Ti",
				"duration" : "04:45",
				"artist" : "Santana",
				"file" : "035-Santana-SambaPaTi.mp3"
		}, {
				"number" : "8",
				"name" : "El Bimbo",
				"duration" : "02:49",
				"artist" : "Claude Ciari",
				"file" : "095-ClaudeCiari-ElBimbo.mp3"
		}, {
				"number" : "9",
				"name" : "Santorini",
				"duration" : "06:57",
				"artist" : "Yanni",
				"file" : "078-Yanni-Santorini.mp3"
		}, {
				"number" : "10",
				"name" : "Fur Elise",
				"duration" : "03:47",
				"artist" : "Beethoven",
				"file" : "074-Beethoven-FurElise.mp3"
		}];
		$.each(songDetails, function(key, value) {
				$("#songList").append("<li><div class='songItem'><div class='songNum'>"+ value.number +".</div><div class='songTitle'>"+ value.name + "</div><div class='songLen'>"+ value.duration +"</div></div></li>");
		});
		var playingSongNo = 0;
		var totalSongs = songDetails.length;
		var audio = $("#player").get(0);
		$("#player").on("play", function() {
			$("#currentAction").text("Now Playing");
		}).on("pause", function () {
			$("#currentAction").text("Paused");
		}).on("ended". function () {
			$("#currentAction").text("Ended");
		});
		$("#songList li").click(function() {
				playingSongNo = $(this).index();
				playSong(playingSongNo);
		});
		$("#prev").click(function () {
			if (playingSongNo == 0) {
				playingSongNo = totalSongs - 1;
				playSong(playingSongNo);
			}
			else {
				playingSongNo--;
				playSong(playingSongNo);
			}
		});
		$("#next").click(function () {
			if (playingSongNo + 1 == totalSongs) {
				playingSongNo = 0;
				playSong(playingSongNo);
			}
			else {
				playingSongNo++;
				playSong(playingSongNo);
			}
		})
			function playSong(songNo) {
				$("#songTitle").text(songDetails[songNo].name);
				audio.src = filePath + songDetails[songNo].file;
				audio.play();
			}
			playSong(playingSongNo);

});















