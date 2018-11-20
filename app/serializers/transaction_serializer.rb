class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :customer_id
  has_many :orders 
end
