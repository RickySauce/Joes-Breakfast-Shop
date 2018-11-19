class CustomersController < ApplicationController

  def new
  end

  def create
    @customer = Customer.create(name: params["customer"])
    render :json => @customer, status: 201 
  end

end
