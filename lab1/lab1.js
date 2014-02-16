/*Create a Tweet Ticker, which will show tweets from the JSON file,
 5 tweets at a time and will slowly cycle through the tweets every three seconds.
Use CSS3 transitions and animations (or jQuery animations) to make the tweets cycle through the ticker smoothly. */
$(function() {
	var url = "tweets.json"; 
	
	//	Get jSON function
	$.getJSON(url, function (data, status) {
			var tweetItems = [];
			var hashtagItems = [];
			var profileImages = [];
			//read each tweet & hashtag and push to array
			$.each( data, function( key, val ) {
				tweetItems.push("<span class='tweet'>" + val.text + "</span>");
				hashtagItems.push("<span class='hashtag'>" + val.entities.hashtags + "</span>");
				profileImages.push("<img src='" + val.user.profile_image_url + "' class='profile'>");
			});
		

		/////////////////////////////////////////////////////////////////////
		// Output Tweets

		var placeCount = 0;
		var toGo = 0;
		
		setInterval(function() {
			
			$("#tweetsBody").fadeOut("slow");
			
			if(placeCount == tweetItems.length)
				placeCount = 0;
			
			if(placeCount + 5 > tweetItems.length )
					toGo = tweetItems(length) - placeCount;
			else
					toGo = 5;
			
			//$("#tweetsBody").(display, none);
			$("#tweetsBody").empty();
			for (var i = 0; i < toGo; i++) {			
				$("#tweetsBody").append("<div class='panel panel-default'><div class='panel-body'>" + profileImages[placeCount] + tweetItems[placeCount] + "</div></div>"); //output tweets
				++placeCount;
			}
			
			$("#tweetsBody").fadeIn("slow");
		}, 3000);

		
		/////////////////////////////////////////////////////////////////////////////////////
		// Output Hashtags

		
		var counter2 = 0;
		for (var i = 0; i < hashtagItems.length; i++) {
				
			$("#topHash").append("<div class='panel panel-default'><div class='panel-body'>" + hashtagItems[i] + "</div></div>");
			++counter;
		}
		
		});
		
});

