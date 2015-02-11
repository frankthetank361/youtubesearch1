$(document).ready(function(){});
$(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyC7oHGfvlIMoEnboos6LZ2b2h_KpPu0u1Q',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}


function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
    //show thumbnail
  });
  $('#search-results').html(html);
}