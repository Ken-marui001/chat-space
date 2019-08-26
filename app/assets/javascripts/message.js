$(function(){
  $('.form__box').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    for(item of formData){
      console.log(item);
    }

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