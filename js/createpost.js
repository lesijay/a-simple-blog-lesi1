$(document).ready(function(){
    $('#createblogpost').click(function(event){
        event.preventDefault();         
        var postTitle = $("#nameofarticle").val()
        var postSubtitle = $("#subheading").val()
        var postBody = $("#blogpost").val()
        var dateOfpost =$("#dateofpost").val()
        let blogData = {postTitle,postSubtitle,dateOfpost,postBody}
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
})  