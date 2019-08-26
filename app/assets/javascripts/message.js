$(function(){
  let messages_list = $('.messages');
  function addMessageHtml(message){
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
    <li class="message__list__box">
    <p class="message__list__box__text">
    ${message.text}
    </p>
    
    </li>
    </ul>
    </div>`

    messages_list.append(html);
  }
  
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
      addMessageHtml(message);
    })
    .fail(function(){

    });
  });
});