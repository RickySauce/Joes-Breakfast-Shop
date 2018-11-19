Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :index]
  resources :store, only: [:index]
  resources :inventory, only: [:show]
  resources :transactions, only: [:new, :create, :show, :index]
end
