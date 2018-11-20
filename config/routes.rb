Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :customers, only: [:create, :index]
  resources :store, only: [:index]
  resources :inventory, only: [:index]
  resources :transactions, only: [:create, :show, :index]
end
