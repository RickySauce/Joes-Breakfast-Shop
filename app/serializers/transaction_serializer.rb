class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :created_at, :total_type_and_quantity
  has_many :orders
end
