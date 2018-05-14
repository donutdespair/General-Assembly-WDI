Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: "rocks#index" #homepage - if website hit without specific url

    resources :rocks
end
