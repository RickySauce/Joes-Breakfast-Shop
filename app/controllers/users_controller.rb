class UsersController < ApplicationController

  def new
  end

  def create
    User.create(name: params["name"])
  end

end
