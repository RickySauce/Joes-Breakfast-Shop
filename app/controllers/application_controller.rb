class ApplicationController < ActionController::Base

  def home
    @store = Store.first 
    render '/home'
  end

end
