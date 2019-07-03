$(document).ready(function(){
    var displayEditablePost =window.location.search.substring(1);
    //let postsubtitle = $(".articleName").val('input.nameof')
    $.ajax({
        method:'GET',
        dataType:'json',
        url: 'http://localhost:3000/blogposts/'+displayEditablePost
        }).done(function(data){
            //alert('hey')
           //console.log(`${data.posttitle}`)
           //console.log(`${data.postsubtitle}`)
           
     //$("#name").val(`${data.posttitle}`)
           //$("#name").val(`${data.posttitle}`)
            $('#updateblogposts').append(`<form>
            <div class="form-group">
                  <labelfor="nameofarticle">Name of Article</label>
                  <input type="text" class="form-control articleName"  value="${data.posttitle}" id="nameofarticle" required>
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
              
        </form>
        `)

    })

    $( '#updateblogpost').click(function( event ) {
      //event.preventDefault();
      //alert("done");
      var posttitle = $("#nameofarticle").val()
        var postsubtitle = $("#subheading").val()
        var postbody = $("#blogpost").val()
        var date = $("#dateofpost").val()
        let blogdata ={posttitle,postsubtitle,date,postbody};
      $.ajax({
       method:'PUT',
       dataType:'json',
       url: 'http://localhost:3000/blogposts/'+displayEditablePost,
       data: blogdata,
       success: function(response) {
            alert('database updated');
       },
       error: function(error){
            alert(error);
       }
       })

})


})
