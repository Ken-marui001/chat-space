class Group < ApplicationRecord
  has_mnany :users, through: :groups_users
  has_many :groups_users
end
