class StoreController < ApplicationController

  def index
    # app is only concerned with the one breakfast cart.
    #the stores name should be retrieved and displayed dynamically in case owner decides to change store information
    @store = Store.first
    render :json => @store, status: 200
  end

end
