class ItemSerializer < ActiveModel::Serializer
  attributes :id, :type_name, :quantity
end
