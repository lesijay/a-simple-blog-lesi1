$(document).ready(function(){

    $( "#createblog" ).click(function( event ) {
        event.preventDefault();         
        var posttitle = $("#nameofarticle").val()
        var postsubtitle = $("#subheading").val()
        var postbody = $("#blogpost").val()
        let blogdata = {posttitle,postsubtitle,postbody}
        if (posttitle && postsubtitle && postbody){
            $.ajax({
                method: "POST",
                url: "http://localhost:3000/blogposts",
                // dataType: "json",
                data: blogdata,
                success: function(response) {
                    alert('database updated');
                },
                error: function(error){
                    alert(error);
                }
              })
              $.ajax({
                method: "GET",
                url: "http://localhost:3000/blogposts",
                // dataType: "json",
                data: blogdata,
                success: function(response) {
                    alert('data gotten');
                },
                error: function(error){
                    alert(error);
                }
            })
        }

    })
          
  
});

