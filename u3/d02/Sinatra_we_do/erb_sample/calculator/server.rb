module Sinatra
  class Server < Sinatra::Base
    get "/" do
      erb :index
      #eval ruby before returning file
    end
    get "/add/:x/:y" do
      @x = params[:x]
      @y = params[:y]
      #@ can be passed to view
      # erb is embedded ruby file
      erb :add
    end
    get "/subtract/:x/:y" do
      @x = params[:x]
      @y = params[:y]
      #@ can be passed to view
      # erb is embedded ruby file
      erb :subtract
    end
    get "/multiply/:x/:y" do
      @x = params[:x]
      @y = params[:y]
      #@ can be passed to view
      # erb is embedded ruby file
      erb :multiply
    end
    get "/divide/:x/:y" do
      @x = params[:x]
      @y = params[:y]
      #@ can be passed to view
      # erb is embedded ruby file
      erb :divide
    end
  end
end

