$(function(){
  let search_result_list = $("#user-search-result");

  function addListHtml(user){
    let html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${user.name}</p>
    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="9" data-user-name="ken">追加</a>
  </div>`

    search_result_list.append(html);
  }

  function addErrorHtml(message){
    let html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${message}</p>
  </div>`

    search_result_list.append(html);
  }

  $('#user-search-field').on('keyup', function(){
    let input = $(this).val();
    
    console.log(input);
    
    $.ajax({
      url: '/users',
      type: 'get',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      search_result_list.empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          addListHtml(user);
        });
      }
      else {
        addErrorHtml("見つかりません");
     }
    }).fail(function(){
      alert('server error');
    });
  })
});