$(document).ready(function(){

    $( "#createblog" ).click(function( event ) {
        event.preventDefault();         
        var posttitle = $("#nameofarticle").val()
        var postsubtitle = $("#subheading").val()
        var postbody = $("#blogpost").val()
        var date = $("#dateofpost").val()
        let blogdata = {posttitle,postsubtitle,date,postbody}
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
    
    
    $.ajax({
        method:'GET',
        dataType:'json',
        url: 'http://localhost:3000/blogposts'
      }).done(function(data){
          $.map(data, function(blogs,i){
            $('#postpreview').append(`<a href="post.html?${blogs.id}">
            <h2 class="post-title">
              ${blogs.posttitle}
            </h2>
            <h3 class="post-subtitle">
              ${blogs.postsubtitle}
            </h3>
          </a>
          <p class="post-meta">Posted on ${blogs.date}</p>`);
          })
   })

   $.ajax({
    method:'GET',
    dataType:'json',
    url: 'http://localhost:3000/blogposts'
  }).done(function(data){
      $.map(data, function(blogs,i){
        $('#createpostlisting').append(`
        <div class="post-preview">
             <h3 class="post-title">
                 ${blogs.posttitle}
            </h3>
            <h4 class="post-subtitle">
                 ${blogs.postsubtitle}
             </h4>
             <p class="post-meta">Posted on ${blogs.date} </p>
        </div>
        <button type="submit" class="btn btn-primary" id="editblogpost" >Edit</button>
        <button type="submit" class="btn btn-primary" id="deleteblogpost" >Delete</button>
        <hr>`);

    })
})




});

