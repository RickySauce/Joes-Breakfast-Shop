class TransactionsController < ApplicationController

  def create
    # a transaction must build out its associations and nested associations
    # a transaction should not persist if it does not have atleast one order persist
    # an order should not persist if it does not have at least one item_quantity persist
    # an item_quantity should not persist if the quantity column is less than or greater than 0
    # an item_quantity should not persist if the difference between an item's quantity and the IQ's quantity is less than 0
    orders_attributes = params["transaction"].map  do |order| #remove hashes from params, easier to operate with and iterate over.
      order.each do |key_value|
        key_value
      end
    end
    #--------- TEMPORARY SOLUTION --------------
    orders_attributes = orders_attributes.map do |order| #further break down the array
         {item_quantities_attributes: order.map do |item| #each order needs an item_quantities_attributes key
           @item = Item.find_by(type_name: item[0]) #run an item search with the first index of the item array: "item name"
           quantity = item[1].to_i
           # do not map if the quantity is less 0 than or @item does not update
           if (quantity > 0) && (@item.update(quantity: @item.quantity - quantity))
             {item_id: @item.id, quantity: quantity}
           end
         end.compact #remove the nil values that will populate the array if the conditional is not passed
       }
    end.delete_if{|order| order[:item_quantities_attributes].empty? == true} #remove any item_quantities_attributes hashes that are empty

    #-------------------------------------------------------------------------
    @transaction = Transaction.new(store_id: Store.first.id,
      customer_id: params["customer_id"],
      orders_attributes: orders_attributes)
       # will not build out associations if one of them is invalid.
       # how do we not create the invalid associations and persist the valid ones
       # how do we check to see if a transaction or order has atleast one valid association
    if !@transaction.orders.empty?
      @transaction.save
      render :json => @transaction, include: 'orders.item_quantities', status: 201
    else
      binding.pry
      render :json => @transaction, status: 422
    end

  end

end
