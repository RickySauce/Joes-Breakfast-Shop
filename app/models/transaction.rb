class Transaction < ApplicationRecord
  belongs_to :store
  belongs_to :customer
  has_many :orders, inverse_of: :ta
  accepts_nested_attributes_for :orders

  def self.find_transactions_by_date(date)
    date = DateTime.parse(date)
    results = Transaction.where("created_at BETWEEN ? AND ?", date, date + 1)
  end

end
