let myData = [];
function createBlog(){
     // Gets the blog data from the admin dashboard and posts to JSON server
     $( "#createblog" ).click(function( event ) {
        event.preventDefault();         
        var posttitle = $("#nameofarticle").val()
        var postsubtitle = $("#subheading").val()
        var postbody = $("#blogpost").val()
        var date = $("#dateofpost").val()
        let blogdata = JSON.stringify({posttitle,postsubtitle,date,postbody})
        if (posttitle && postsubtitle && postbody){
            $.ajax({
                method: "POST",
                url: "http://localhost:3000/blogposts",
                dataType: "json",
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
}
$(document).ready(function(){   
    
    //Displays post preview on the homepage
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

    //Displays each post on the admin postlisting area
   $.ajax({
    method:'GET',
    dataType:'json',
    url: 'http://localhost:3000/blogposts'
  }).done(function(data){
      myData = data;
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
        <button type="submit" class="btn btn-primary" id="editpost${blogs.id}" >Edit</button>
        <button type="submit" class="btn btn-primary" id="${blogs.id}" >Delete</button>
        <hr>`);

    })
    deleteBlockPost();
    createBlog();
})


    //Deletes post
    function deleteBlockPost(){
       // console.log(myData)
        myData.forEach((item, i) => {
            // let id = i + 1;
            // console.log(item.id)
            $( `#${item.id}` ).click(function( event ) {
                // let blogpostid =window.location.search.substring(1);
                 $.ajax({
                     method: "DELETE",
                     url: `http://localhost:3000/blogposts/${item.id}`,
                     dataType: "json",
                     }).done(data => alert('data deleted', data))
                 // console.log('you clikc me ', item.id)
                     
             })

        })
        
    }


});

