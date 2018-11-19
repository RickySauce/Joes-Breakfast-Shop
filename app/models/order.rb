class Order < ApplicationRecord
  belongs_to :ta, foreign_key: "transaction_id", class_name: "Transaction", inverse_of: :orders
  has_many :item_quantities, inverse_of: :order

  accepts_nested_attributes_for :item_quantities
end
