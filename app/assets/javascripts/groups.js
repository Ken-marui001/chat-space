$(function(){
  let search_result_list = $("#user-search-result");

  function addListHtml(user){
    let html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${user.name}</p>
    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
  </div>`

    search_result_list.append(html);
  }

  function addErrorHtml(message){
    let html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${message}</p>
  </div>`

    search_result_list.append(html);
  }

  function addMemberHtml(id, name){
    let html = `<div class='chat-group-user'>
    <input name='group[user_ids][]' type='hidden' value='${id}'>
    <p class='chat-group-user__name'>${name}</p>
    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
  </div>`

    $('.chat-group-users.js-add-user').append(html);
  }

  $('#user-search-field').on('keyup', function(){
    let input = $(this).val();
    
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
  });

  $('#user-search-result').on('click', '.chat-group-user__btn--add', function(){
    let index = $('.chat-group-user__btn--add').index(this);
    let name = $(this).attr('data-user-name');
    let id = $(this).attr('data-user-id');

    $($('.chat-group-user.clearfix')[index]).remove();

    addMemberHtml(id, name);
  });

  $('.chat-group-users.js-add-user').on('click', '.js-remove-btn', function(){
    let index = $('.js-remove-btn').index(this) + 1;

    $($('.js-add-user .chat-group-user')[index]).remove();

    addMemberHtml(id, name);
  });
});