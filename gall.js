   $(document).ready(function(){
	    //switch small images with big images when clicked
	    $("#01").click(function() {
				$("#fimg1").attr("src", "images/KI1.jpg")
			});
			
		$("#02").click(function() {
				$("#fimg1").attr("src", "images/KI2.jpg")
			});
			
	    $("#03").click(function() {
				$("#fimg1").attr("src", "images/KI3.jpg")
			});
			
		$("#04").click(function() {
				$("#fimg1").attr("src", "images/KI4.jpg")
			});
			
		$("#05").click(function() {
				$("#fimg1").attr("src", "images/KI5.jpg")
			});
			
	    $("#06").click(function() {
				$("#fimg1").attr("src", "images/KI6.jpg")
			});
			
	    $("#07").click(function() {
				$("#fimg1").attr("src", "images/KI7.jpg")
			});
			
	    $("#08").click(function() {
				$("#fimg1").attr("src", "images/KI8.jpg")
			});
			
	    $("#09").click(function() {
				$("#fimg1").attr("src", "images/KI9.jpg")
			});
			
	    $("#10").click(function() {
				$("#fimg1").attr("src", "images/KI10.jpg")
			});
			
		$("searchbar").click
			
		//when hover, img swaps with bigger img (zzyy)
		$("#11").hover(function() {
				$("#fimg2").attr("src", "images/zzyy1.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
		$("#12").hover(function() {
				$("#fimg2").attr("src", "images/zzyy2.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
	    $("#13").hover(function() {
				$("#fimg2").attr("src", "images/zzyy3.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
		$("#14").hover(function() {
				$("#fimg2").attr("src", "images/zzyy4.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
		$("#15").hover(function() {
				$("#fimg2").attr("src", "images/zzyy5.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
	    $("#16").hover(function() {
				$("#fimg2").attr("src", "images/zzyy6.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
	    $("#17").hover(function() {
				$("#fimg2").attr("src", "images/zzyy7.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
	    $("#18").hover(function() {
				$("#fimg2").attr("src", "images/zzyy8.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
	    $("#19").hover(function() {
				$("#fimg2").attr("src", "images/zzyy9.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
	    $("#20").hover(function() {
				$("#fimg2").attr("src", "images/zzyy10.jpg");
		}, function() { $("#fimg2").attr("src", "images/zzyy1.jpg");
			});
			
		//hides and show small images
		$("#btn1").click(function() {
			$("#KIgall").toggle("slow");
		});
		
		$("#btn2").click(function() {
			$("#zzyygall").toggle("slow");
		});
		
		
   });
   
   //onload functions for slideshow with prev ant button
   window.onload = function() {
	   showDivs(slideIndex);
   };
//start at slideindex 1 of images
var slideIndex = 1;
//add/ subtracts from slideindex
function plusDivs(n) {
  showDivs(slideIndex += n);
}

//display image of index
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex -1].style.display = "block";  
}
