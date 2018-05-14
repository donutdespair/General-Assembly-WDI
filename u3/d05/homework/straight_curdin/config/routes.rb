Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: "cheeses#index" #homepage - if website hit without specific url
    get "/cheeses/new", to: "cheeses#new" #get form to create new
    get "/cheeses/:id/edit", to: "cheeses#edit" #get form to update
    resources :cheeses, only: [:index, :show, :create, :destroy, :update]




end
