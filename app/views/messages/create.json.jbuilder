json.text @message.text
json.image @message.image
json.timestamp @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name @message.user.name
json.id @message.id