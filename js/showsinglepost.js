$(document).ready(function(){
    var displaysinglepost =window.location.search.substring(1);
      $.ajax({
        method:'GET',
        dataType:'json',
        url: 'http://localhost:3000/blogposts/'+displaysinglepost
        }).done(function(data){
            $('#displaysinglepost').append(`<header class="masthead" style="background-image: url('img/post-bg.jpg')">
            <div class="overlay"></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <div class="post-heading">
                    <h1>${data.posttitle}</h1>
                    <h2 class="subheading">${data.postsubtitle}</h2>
                    <span class="meta">Posted on ${data.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <article>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  ${data.postbody}
                </div>
              </div>
            </div>
          </article>
        `)


        })

})

