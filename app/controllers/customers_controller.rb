class CustomersController < ApplicationController

  def create
    #the app is not concerned with a customers name, only whether they've purchased something before
    #while it would be nice for the store to become acquainted with all of their customers on a personal level
    # it is not a requirement.
    fields = !params["customer"].blank? ? {name: params["customer"]} : nil
    @customer =  Customer.create(fields)
    render :json => @customer, status: 201
  end

  def index
    @customers = Customer.all
    render :json => @customers, status: 200
  end

end
