class Transaction < ApplicationRecord
  belongs_to :store
  belongs_to :customer
  has_many :orders, inverse_of: :ta
  accepts_nested_attributes_for :orders

end
