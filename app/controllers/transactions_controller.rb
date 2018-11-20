class TransactionsController < ApplicationController

  def create
    orders_attributes = params["transaction"].map  do |order|
      order.each do |key_value|
        key_value
      end
    end

    #prevent the addition of a new item_hash if the quantity is less than or equal to 0 and if the item quantity
    orders_attributes = orders_attributes.map do |order|
         {item_quantities_attributes: order.map do |item|
           if (item[1].to_i > 0) && ((Item.find_by(type_name: item[0]).quantity - item[1].to_i) >= 0)
             {item_id: Item.find_by(type_name: item[0]).id, quantity: item[1].to_i}
           end
         end.compact
       }
    end.delete_if{|order| order[:item_quantities_attributes].empty? == true}

    @transaction = Transaction.create(store_id: Store.first.id,
      customer_id: params["customer_id"],
      orders_attributes: orders_attributes
       )

      binding.pry
  end



  # params = { name: 'Alcatraz', criminals_attributes: [{ name: 'Al Capone' }] }
  # # => {:name=>"Alcatraz", :criminals_attributes=>[{:name=>"Al Capone"}]}
  # Prison.create(params)
end
