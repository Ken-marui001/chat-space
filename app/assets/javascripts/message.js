$(function(){
  let messages_list = $('.messages');

  function addMessageHtml(message){
    let text_and_image = "";
    
    if (message.text != "") {
      text_and_image += `<p class="message__list__box__text">
      ${message.text}
      </p>`
    }
    if (message.image.url != null) {
      text_and_image += `<img src=${message.image.url} alt=" lz5lk5v 400x400">`
    }
    
    let html =`<div class="message" data-id='${message.id}'>
    <ul class="message__list">
    <li class="message__list__info">
    <p class="message__list__info__name">
    ${message.user_name}
    </p>
    <p class="message__list__info__date">
    ${message.timestamp}
    </p>
    </li>
    ${text_and_image}
    </li>
    </ul>
    </div>`
    return html;
  }

  function scrollBottom(base){
    base.animate({
      scrollTop: base[0].scrollHeight
    });
  }

  let reloadMessages = function() {
    if (location.pathname.match(/messages$/) == null) {
      return;
    }

    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message').last().data('id');
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      let insertHTML = '';
      // console.log('done');

      $.each(messages, function(message){
        insertHTML += addMessageHtml(message);
      });

      messages_list.append(insertHTML);
      scrollBottom(messages_list);
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    });
  };
  
  $('.form__box').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      type: 'post',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      messages_list.append(addMessageHtml(message));
      scrollBottom(messages_list);
    })
    .fail(function(){
      alert('送信に失敗しました')
    });

    return false;
  });

  setInterval(reloadMessages, 5000);
});
