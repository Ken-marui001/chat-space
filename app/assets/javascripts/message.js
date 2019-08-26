$(function(){
  let messages_list = $('.messages');

  function addMessageHtml(message){
    let text_and_image = "";

    if (message.text != "") {
      text_and_image += `<p class="message__list__box__text">
      ${message.text}
      </p>`
    }
    if (message.image != "") {
      text_and_image += `<img src=${message.image.url} alt=" lz5lk5v 400x400">`
    }
    
    let html =`<div class="message">
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

    messages_list.append(html);
  }
  
  $('.form__box').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    for(item of formData){
      console.log(item);
    }
    $.ajax({
      type: 'post',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      addMessageHtml(message);
    })
    .fail(function(){
      alert('送信に失敗しました')
    });
  });
});