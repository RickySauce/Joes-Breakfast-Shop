class InventoryController < ApplicationController

  def index
    @inventory = Inventory.first
    render :json => @inventory, status: 200
  end

end
