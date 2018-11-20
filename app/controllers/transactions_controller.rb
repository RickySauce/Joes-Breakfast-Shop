class TransactionsController < ApplicationController

  def create
    orders_attributes = params["transaction"].map  do |order|
      order.each do |key_value|
        key_value
      end
    end

    orders_attributes = orders_attributes.map do |order|
         {item_quantities_attributes: order.map {|item| {item_id: Item.find_by(type_name: item[0]).id, quantity: item[1]} unless item[1].to_i <= 0}}
    end
    binding.pry


    @transaction = Transaction.create(store_id: Store.first.id,
      customer_id: params["customer_id"],
      orders_attributes: orders_attributes
       )

     @transaction.orders.each do |order|

     end
  end



  # params = { name: 'Alcatraz', criminals_attributes: [{ name: 'Al Capone' }] }
  # # => {:name=>"Alcatraz", :criminals_attributes=>[{:name=>"Al Capone"}]}
  # Prison.create(params)
end
