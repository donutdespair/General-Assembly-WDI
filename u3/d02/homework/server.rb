module Sinatra
  class Server < Sinatra::Base

    get "/" do
      @question = "Who was the first man in space?"
      erb :index
      #eval ruby before returning file
    end

    get "/yuri_gagarin" do
      @question = "Correct. Who was the first man on the moon?"
      erb :index
    end

    get "/neil_armstrong" do
      @question = "Correct. Who wrote why's (poignant) Guide to Ruby?"
      erb :index
    end

    get "/why_the_lucky_stiff" do
      @question = "Correct. What game series was Shigesato Itoi lead designer for?"
      erb :index
    end

    get "/mother" do
      @question = "Correct. No more questions."
      erb :index
    end

    get "/name/:name" do
      @name = params[:name]
      #@ can be passed to view
      # erb is embedded ruby file
      erb :name
    end

    get "/chunkybacon/:name1/:name2" do
      @name1 = params[:name1]
      @name2 = params[:name2]
      erb :chunkybacon
    end

    get "/battle/:name1/:name2" do
      @name1 = params[:name1]
      @name2 = params[:name2]
      @names = [@name1, @name2].shuffle.each_slice(1).to_a
      @battler1 = @names[0].join.capitalize
      @battler2 = @names[1].join.capitalize
      erb :battle
    end

  end
end
