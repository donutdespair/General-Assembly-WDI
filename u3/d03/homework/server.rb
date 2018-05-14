module Sinatra
  class Server < Sinatra::Base


compliments = [
  "Your posture during breaks effectively masks your exhaustion.",
  "Your commit messages are an inspiration to us all.",
  "Your fingers are magic on the keys.",
  "You are the moon of my life...my sun and stars.",
  "Your Slack gifs are always relevant.",
  "I starred your project repo.",
  "Your lunch always looks really good.",
  "You have the best laptop stickers.",
  "You never put the empty milk carton back in the fridge.",
  "You carry your bike up the stairs so gracefully.",
  "You create useful, functional, usable apps.",
  "May your coffee temperature always be as optimal as the state of your code.",
  "We should clone you. Imagine what we could do with two or three instances of you."
]

 colors = ['#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#ffff00', '#ff0000', '#0000ff', '#7920FF', '#FD0987', '#FF3300', '#32CD32', '#FF8300', '#7fff00', '#ff1493' ]

    get "/" do
      @anon = "you!"
      @compliment = compliments.shuffle[0]
      @color = colors.shuffle[0]
      erb :index
    end

    get "/:name" do
      @name = params[:name].capitalize
      @compliment = compliments.shuffle[0]
      @color = colors.shuffle[0]
      erb :index
    end
  end
end

#https://www.blackbytes.info/2015/03/ruby-random/
#http://stackoverflow.com/questions/1816378/how-to-randomly-sort-scramble-an-array-in-ruby

