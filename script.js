$(document).ready(function() {
	$("#search").on("click",function() {
		var searchTerm = $("#srch-term").val();
		var api = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=jsonfm&srsearch=" + searchTerm;
		$.getJSON( api, {
    	format: "json"
  	})
    .done(function( data ) {
			var items = data.query.search;
			for(var i = 0; i < items.length; i++){
				var title = items[i].title;
				var snippet = items[i].snippet
				var linkTo = "https://en.wikipedia.org/wiki/" + title;
				var listContent = '<li class="result-content"><a class="result-link" target="_blank" href="'+linkTo+'"><p class="title">'
					+title+'</p><p class="content">'+snippet+'</p></a></li>';
				$(".result-panel").prepend(listContent);
			}
		});
		$("#srch-term").val("");
	});
});