module Sinatra
  class Server < Sinatra::Base
    get "/" do
      erb :index
      #eval ruby before returning file
    end
    get "/users/:user" do
      @user = params[:user]
      #@ can be passed to view
      # erb is embedded ruby file
      erb :user
    end
  end
end
