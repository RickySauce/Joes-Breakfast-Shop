class OrderSerializer < ActiveModel::Serializer
  attributes :id, :type_and_quantity
  has_many :item_quantities
end
