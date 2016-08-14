$(document).ready(function(){
	
var app = { };

app.addContent = function(title, url, desc, image){
	
	var theImage = '<div class="circular each-image">' + '<img src="' + image + '" />' + '</div>';
	var theUrl = '<a href="' + url + '">';
	var theTitle = '<h3>' + title + '</h3>';
	var theDesc = '<p class="description">' + desc + '</p>';
	var section = '<section>' + theTitle + theDesc + '</section></a>';
	var content = '<article>' + theUrl + theImage + section + '</article>';
	$('.site-content').append(content);	
}



app.init = function(){
	$.ajax({
		url: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=845bbc010df74c9fb1822a542b8b2310',
		success: function(response){
			
				var allArticles = response.articles;
				allArticles.forEach(function(value, index){
					console.log(value.urlToImage);
					app.addContent(value.title, value.url, value.description, value.urlToImage);
					
				});
			}
    	});
	}


app.init();


$('.site-content').on('click', 'article a', function(event){
	event.preventDefault();
	var $this = $(this)[0].href;
	var theurl = $this;
    
        $('.article-content').load('js/test.php .article-entry',{'string': theurl}, function(response, status, xhr) {
            if (status == 'error') {
                var msg = "Sorry but there was an error: ";
                $(".content").html(msg + xhr.status + " " + xhr.statusText);
            }
        });
        $('.article-container').fadeIn('slow');
    });
	$('.close').click(function(){
		$('.article-container').fadeOut('fast');
	});

});
// http://www.reddit.com/r/subreddit/new.json?sort=new
//https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=845bbc010df74c9fb1822a542b8b2310 