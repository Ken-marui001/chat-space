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
##Usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|varchar(255)|null: false|
|email|varchar(255)|null: false, unique: true|
|password|varchar(255)|null: false|

###Association
- has_many :messages
- has_many :groups, through: groups_users

##Groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|varchar(255)|null: false, unique: true|
|password|varchar(255)||

###Association
- has_many :messages
- has_many :users, through: groups_users
- has_many :tags, through: groups_tags