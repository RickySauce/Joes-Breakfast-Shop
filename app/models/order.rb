class Order < ApplicationRecord
  belongs_to :transaction
  has_many :inventory_quantities
  
end
