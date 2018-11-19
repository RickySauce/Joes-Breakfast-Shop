class TransactionsController < ApplicationController

  def create
    @transaction = Transaction.create!(store_id: Store.first.id, customer_id: Customer.first.id, orders_attributes:[{item_quantities_attributes:[{item_id: 1, quantity: 2}]}])
    binding.pry
    # params["transaction"].each do |order|
    #   binding.pry
    # end
  end


  # params = { name: 'Alcatraz', criminals_attributes: [{ name: 'Al Capone' }] }
  # # => {:name=>"Alcatraz", :criminals_attributes=>[{:name=>"Al Capone"}]}
  # Prison.create(params)
end
