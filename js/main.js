$(document).ready(function(){
	
var app = { };	

app.init = function(){
	$.ajax({
		url: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=845bbc010df74c9fb1822a542b8b2310',
		success: function(response){
				// console.log(response);
				var allArticles = response.articles;
				allArticles.forEach(function(value, index){
					console.log(value);
				})
			}
    	});
	}

app.init();

});
// http://www.reddit.com/r/subreddit/new.json?sort=new