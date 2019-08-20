# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

DB
=====================================
## Usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|varchar(255)|null: false|
|email|varchar(255)|null: false, unique: true|
|password|varchar(255)|null: false|

### Association
- has_many :messages
- has_many :groups, through: groups_users

## Groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|varchar(255)|null: false, unique: true|
|password|varchar(255)||

### Association
- has_many :messages
- has_many :users, through: groups_users
- has_many :tags, through: groups_tags

## Messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|user_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|
|text|text||
|image|text||
|send_at|datetime|null: false|

### Association
- belongs_to :user
- belongs_to :group

## Tagsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|varchar(255)|null: false, unique: true|


### Association
- has_many :groups

## Groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|user_id|integer|null:false, foreign_key: true|
|group_id|ubteger|null:false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## Groups_tagsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|tag_id|integer|null:false, foreign_key: true|
|group_id|ubteger|null:false, foreign_key: true|

### Association
- belongs_to :tag
- belongs_to :group
