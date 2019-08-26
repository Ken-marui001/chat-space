$(function(){
  $('.form-box').on('submit', function(e){
    e.preventDefaul();
    let formData = new FormData(this);

    $.ajax({
      type: 'post',
      url: '',
      data: '',
      dataType: 'json'
    })
    .done(function(){

    })
    .fail(function(){

    });
  });
});