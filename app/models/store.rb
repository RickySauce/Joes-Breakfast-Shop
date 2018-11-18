class Store < ApplicationRecord
  has_one :inventory
  has_many :transactions
  has_many :customers, through: :transactions
end
