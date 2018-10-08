$('#postBtn').click(function(){
        swal({
          title: "Post added to feed",
          icon: "success",
          dangerMode: false,
        });
        
    });
    
$('.deleteBtn').click((function(){
  
    swal({
    title: "Are you sure?",
    text: "This post will be deleted!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("The post has been deleted!", {
        icon: "success",
      });
      document.getElementById("deletePost").submit();
    }
  });
  
})
);