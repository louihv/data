
		function pauseb(){
			var audioElement = document.getElementById('autoplayAudio');
				audioElement.pause();
				document.getElementById("play").style.display = "block";
				document.getElementById("pause").style.display = "none";
			}
		
		function playb(){
			var audioElement = document.getElementById('autoplayAudio');
				audioElement.play();
				document.getElementById("play").style.display = "none";
				document.getElementById("pause").style.display = "block";
		}
	