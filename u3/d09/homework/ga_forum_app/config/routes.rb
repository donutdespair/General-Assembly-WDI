Rails.application.routes.draw do
  root to: "users#index"
  resources :users, only: [:index, :show, :create, :destroy]
  resources :comments, only: [:index, :show, :create, :destroy]
  resources :topics, only: [:index, :show, :create, :destroy]
  resources :courses, only: [:index, :show, :create, :destroy]
end
