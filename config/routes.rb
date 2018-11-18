Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'application#home'  

  resources :users, only: [:new, :create]
  resources :inventories, only: [:show]
  resources :transactions, only: [:new, :create, :show, :index]
end
