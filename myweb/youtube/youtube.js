(function(){
    var params = {
        q:"피파4",
        part:"snippet",
        key:"AIzaSyCTIBl8Z_roc-LZUvZlowaJUS6FXAoknw4",
        type:"video",
        maxResults:4,
        regionCode:"KR",
    };
    params.q = encodeURI(params.q);
    var url="https://www.googleapis.com/youtube/v3/search?";

    for(var param in params){
        url+=param+"="+params[param]+"&";
    }
    url=url.substr(0, url.length -1);
    
    $.ajax({
        url: url,
        type: "GET",
        cache: false,
        success: function(data, status){
            if(status == "success"){
                parseJSON(data);
            } 
        }
    });
    
})();

function parseJSON(jsonObj){
    var datas = jsonObj.items;
    var iframe1 = "<iframe width='300' height='200' src='https://www.youtube.com/embed/";
    var iframe2 = "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    for(var content in datas){
        var iframe_full = iframe1+datas[content].id.videoId+iframe2;
        console.log(datas[content].snippet.title+"\n"+iframe_full);
        iframe_ele = $(iframe_full);
        iframe_ele.appendTo("div#youtube-list");
        
    }
    
}