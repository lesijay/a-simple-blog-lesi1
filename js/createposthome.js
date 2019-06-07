$(document).ready(function(){
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
});