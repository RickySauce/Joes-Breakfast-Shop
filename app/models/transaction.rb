class Transaction < ApplicationRecord
  belongs_to :store
  belongs_to :customer
  has_many :orders, inverse_of: :ta
  accepts_nested_attributes_for :orders

  def self.find_transactions_by_date(date)
    date = DateTime.parse(date)
    results = Transaction.where("created_at BETWEEN ? AND ?", date, date + 1)
  end

  def total_type_and_quantity
    ttq = {}
    self.orders.each do |order|
      order.type_and_quantity.each do |key,value|
        ttq[key] ? ttq[key] += value : ttq[key] = value
      end
    end
    ttq
  end

end
