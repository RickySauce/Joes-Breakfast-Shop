class Order < ApplicationRecord
  belongs_to :ta, foreign_key: "transaction_id", class_name: "Transaction", inverse_of: :orders
  has_many :item_quantities, inverse_of: :order

  accepts_nested_attributes_for :item_quantities

  def type_and_quantity
    tq = {}
    self.item_quantities.each do |iq|
      name = Item.find(iq.item_id).type_name
      tq[name] = iq.quantity
    end
    tq
  end

end
