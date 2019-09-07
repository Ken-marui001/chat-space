$(function(){
  function addListHtml(user){
    let html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${user.name}</p>
    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
  </div>`

    $("#user-search-result").append(html);
  }

  function addErrorHtml(message){
    let html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${message}</p>
  </div>`

    $("#user-search-result").append(html);
  }

  function addMemberHtml(place,id, name){
    let html = `<div class='chat-group-user'>
    <input name='group[user_ids][]' type='hidden' value='${id}'>
    <p class='chat-group-user__name'>${name}</p>
    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
  </div>`

    place.append(html);
  }

  $(document).on('keyup', '#user-search-field', function(){
    let input = $(this).val();
    
    $.ajax({
      url: '/users',
      type: 'get',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          let check = true;
          $('.js-add-user .chat-group-user input').each((index, element) => {
            if($(element).attr('value')===(user.id).toString()){check = !check;}
            
          })
          if(check){addListHtml(user);}
        });
      }
      else {
        addErrorHtml("見つかりません");
     }
    }).fail(function(){
      alert('server error');
    });
  });

  $(document).on('click', '.chat-group-user__btn--add', function(){
    let index = $('.chat-group-user__btn--add').index(this);
    let name = $(this).attr('data-user-name');
    let id = $(this).attr('data-user-id');

    $($('.chat-group-user.clearfix')[index]).remove();

    addMemberHtml($('.chat-group-users.js-add-user'), id, name);
  });

  $(document).on('click', '.js-remove-btn', function(){
    let index = $('.js-remove-btn').index(this) + 1;
    console.log(this);
    let user = {"name": "", "id": ""};
    user.name = $($('.js-add-user .chat-group-user p')[index]).text();
    user.id = $($('.js-add-user .chat-group-user input')[index]).attr('value');
    let input = new RegExp($('#user-search-field').val());

    $($('.js-add-user .chat-group-user')[index]).remove();

    if(user.name.match(input)){addListHtml(user);}
  });
});