class ItemQuantity < ApplicationRecord
  belongs_to :order, inverse_of: :item_quantities
  belongs_to :item
  validates :quantity, :inclusion => 1..10

end
