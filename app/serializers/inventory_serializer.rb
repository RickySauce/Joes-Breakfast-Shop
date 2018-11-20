class InventorySerializer < ActiveModel::Serializer
  attributes :id
  has_many :items 
end
