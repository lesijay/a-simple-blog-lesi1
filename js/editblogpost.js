$(document).ready(function(){
    var displayEditablePost =window.location.search.substring(1);
    //let postsubtitle = $(".articleName").val('input.nameof')
    console.log(displayEditablePost);
    $.ajax({
        method:'GET',
        dataType:'json',
        url: 'http://localhost:3000/blogposts/'+displayEditablePost
        }).done(function(data){
            alert('hey')
           console.log(`${data.posttitle}`)
           console.log(`${data.postsubtitle}`)
           
     //$("#name").val(`${data.posttitle}`)
           //$("#name").val(`${data.posttitle}`)
            $('#updateblogposts').append(`<form>
            <div class="form-group">
                  <labelfor="nameofarticle">Name of Article</label>
                  <input type="text" class="form-control articleName"  value="${data.posttitle}" id="name" required>
            </div>
            <div class="form-group">
                  <label for="subheeading">Sub Heading</label>
                  <input type="text" class="form-control" value="${data.postsubtitle}" id="subheading" required>
            </div>
            <div class="form-group">
                  <label for="date">Date</label>
                  <input type="date" class="form-control"  value="${data.date}" id="dateofpost" required>
            </div>
            <div class="form-group">
                  <label for="blogpost">Write your blog post</label>
                  <textarea class="form-control" id="blogpost" rows="10" required>${data.postbody}</textarea>
            </div>
              <button type="button" class="btn btn-primary" id="updateblog" >Update blog Post</button>
              <button type="button" class="btn btn-primary" id="cancelblog" >Cancel</button>
              <button type="button" class="btn btn-primary" id="saveblog" >Save</button>
        </form>
        `)

    })

})
