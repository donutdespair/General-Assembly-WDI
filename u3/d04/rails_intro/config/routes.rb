Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: "articles#index" #homepage - if website hit without specific url

    resources :articles, only: [:index, :show]

    #or resources :users, except: [:destroy, :update]
    # this shit fucking creates everything

  #get "/articles", to: "articles#index"
  #get "/articles/:id", to: "articles#show"
  #post "/articles", to: "articles#create"
  #put "/articles/:id", to: "articles#update"
  #delete "/articles/:id", to: "articles#destroy"

  #get "/articles/new", to: "articles#new" #get form to create new
  #get "/articles/:id/edit", to: "articles#edit" #get form to update


end
