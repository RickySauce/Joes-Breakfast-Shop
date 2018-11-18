class Transaction < ApplicationRecord
  belongs_to :store
  belongs_to :customer
  has_many :orders 
end
