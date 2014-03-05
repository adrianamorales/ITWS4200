//__________________________________________________
//
//
//  Notes on Functionality
/* This app is designed to get data from a personal facebook profile. 
In this case, I'm using my profile data to show information such as name, workhistory, etc. 
The Facebook tokens expire after a certain time, so you may need to get another access token
and then change 

*/

$(document).ready(function () {
	
	
	var url = 								"https://graph.facebook.com/adriana.morales.908?access_token=CAACEdEose0cBAH7Uom7p2ERVq2HxXwZAtkKwqJf6ramlVXNHevJozRTaJSApZAkk031xZB7dLmt12MnfqOcXhCdLfLFZCgHCdZBX1G93Tsn5fxUyQ09iBmnX3EZCXXDmHPt0p18mZBUBKPZCltpq5PDpqzoDvrzZBWjBuKrLNTn9b0A4HAZAsX0o6ZBpZBrSSZBrPJSIZD";
	var facebookData;
	
	//Get JSON to call in data
	$.getJSON(url, function (facebookData, status) { 
		alert(status);
		
		var fullName = facebookData.name;
		var userName = facebookData.username;
		var gender = facebookData.gender;
		var bDay = facebookData.birthday;
		var bioInfo = facebookData.bio;
		//var workArray = [];
		
		if (userName === "undefined")
		{
			alert("The token has expired. You need to go <a href='https://developers.facebook.com/tools/explorer/145634995501895/?method=GET&path=adriana.morales.908%3Ffields%3Did%2Cname%2Ceducation%2Cabout%2Cbirthday%2Cbio%2Cfirst_name%2Cstatuses#_=_'>Facebook</a> to recieve another one");
		}
			$("#facebookBody").html("<h3>Username</h3><p>" + userName + "</p><h3>Full Name</h3><p>" + fullName + "</p><h3>Gender</h3><p>" 
																	+ gender + "</p><h3>Birthday<h3><p>" + bDay + "</p><h3>Bio</h3><p>" + bioInfo + "</p>");
	/*$.each( data, function( key, val ) {
		workArray.push(val.work.employer.name);
	});*/	

	});
		
}); 

/*
$( document ).ready(function() {
   $.ajax({
   type: "GET",
   url: "js/tweets-clean.json",
   dataType: "json",
   success: function(tweets, status) {

             //Pre-load first 5 tweets onto the screen
     for(var i = 0; i < 5; i++){
       $("#tweets").prepend("<li><img class='dp' src=’”+tweets[i].user.profile_image_url + "'></img><div class='tweet'>”+tweets[i].text +"</div></li>");
       $("img").error(function () {
       $(this).unbind("error").attr("src", "js/twitter-bird.jpg");
     });
   }
   var count = 5;

 //Every 2 seconds prepend a tweet the ul and delete the last tweet
   var timer = setInterval(function(){
   if(count == tweets.length) count = 0;
   var listItemHTML = "<li><img class='dp' src='" + tweets[count].user.profile_image_url + "'></img> <div class='tweet'>" + tweets[count].text + "</div></li>";

      $(listItemHTML).hide().css('opacity',0.0).prependTo('#tweets’).slideDown('slow’).animate({opacity: 1.0});
      $("img").error(function () {
            $(this).unbind("error").attr("src", "js/twitter-bird.jpg");
      });
      if (count != tweets.length) count ++;
          $("#tweets li:gt(5):last").remove();
   } , 2000);

       //hashtags
       var count = 0;
       var j=0;
       while(j < 5){
          if(tweets[count].entities.hashtags.length != 0){
             $("#hashtags").prepend("<li> #" + tweets[count].entities.hashtags[0].text + "</li>");
             j++;
          }
          count++;
       }
       var timer = setInterval(function(){
          if(count == tweets.length) count = 0;
          while(tweets[count].entities.hashtags.length == 0){
             count++;
          }
          var listItemHTML = "<li> #" + tweets[count].entities.hashtags[0].text + "</li>";
          $(listItemHTML).hide().css('opacity',0.0).prependTo('#hashtags’).slideDown('slow’).animate({opacity: 1.0});
          if (count != tweets.length) count ++;
          $("#hashtags li:gt(5):last").remove();
       } , 2200);
      }, error: function(msg) {
        alert("There was an error: " + msg.status + " " + msg.statusText);
      }
  });
});





*/