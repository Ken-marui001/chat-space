$(function(){
  $('#user-search-field').on('keyup', function(){
    input = $('#user-search-field').val();
    
    $.ajax({
      url: '/users',
      type: 'get',
      data: {keyword: input},
      dataType: 'json'
    }).done(function(){}).fail(function(){});
  })
});