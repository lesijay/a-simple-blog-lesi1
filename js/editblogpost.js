$(document).ready(function(){
    var displaysinglepost =window.location.search.substring(1);
      $.ajax({
        method:'GET',
        dataType:'json',
        url: 'http://localhost:3000/blogposts/'+displaysinglepost
        }).done(function(data){
            $('#').append(`<form>
            <div class="form-group">
                  <labelfor="nameofarticle">Name of Article</label>
                  <input type="nameofarticle" class="form-control" id="nameofarticle" required>
            </div>
            <div class="form-group">
                  <label for="subheeading">Sub Heading</label>
                  <input type="subheading" class="form-control" id="subheading" required>
            </div>
            <div class="form-group">
                  <label for="date">Date</label>
                  <input type="date" class="form-control" id="dateofpost" required>
            </div>
            <div class="form-group">
                  <label for="blogpost">Write your blog post</label>
                  <textarea class="form-control" id="blogpost" rows="10" required></textarea>
            </div>
              <button type="submit" class="btn btn-primary" id="createblog"  style="display: none;" >Create blog post</button>
              <button type="button" class="btn btn-primary" id="updateblog" >Update blog Post</button>
        </form>
        `)

    })

})
