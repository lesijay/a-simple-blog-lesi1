$(document).ready(function(){

    $( "#addcomment" ).click(function( event ) {
        event.preventDefault();         
        let username = $("#nameofuser").val()
        let comment = $("#usercomment").val()
        let blogpostid =window.location.search.substring(1)
        let commentdata ={blogpostid,username,comment}
        if (comment && username){
            $.ajax({
                method: "POST",
                url: "http://localhost:3000/comments",
                // dataType: "json",
                data:commentdata,
                success: function(response) {
                    //empty the formfields after submit
                    $("#nameofuser").val('');
                    $("#usercomment").val('')
                    $("#showcomment").append(response);

                }
                /*
                error: function(error){
                    alert(error);
                }*/
              })
              $.ajax({
                method: "GET",
                url: "http://localhost:3000/comments",
                // dataType: "json",
                data:commentdata,
                /*success: function(response) {
                    alert('data gotten');
                },
                error: function(error){
                    alert(error);
                }*/
            })
        }

    })
    

    let blogpostid =window.location.search.substring(1);
    $.ajax({
        method:'GET',
        dataType:'json',
        url: 'http://localhost:3000/comments'
      }).done(function(data){
             $.map(data, function(blogs,i){
                if(blogpostid===blogs.blogpostid){
                    $('#showcomment').append(`<p style="font-style:italic; font-size:0.8em">${blogs.username}:<br> ${blogs.comment}</p><hr>`);
                }
             })
    
        })
  
});
