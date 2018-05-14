class CheesesController < ApplicationController
      def index
    @cheeses = Cheese.all
  end

  def create
    cheese = params['cheese']
    Cheese.create(name: cheese['name'],
                milk_type: cheese['milk_type'],
                description: cheese['description'],
                image_url: cheese['image_url'],
                stank_level: cheese['stank_level'])
    redirect_to "/cheeses"
  end

  def destroy
    Cheese.destroy(params['id'])
    redirect_to(:back)
  end

  def show
@cheese = Cheese.find(params[:id])
  end

  def update
    cheese = params['cheese']
    Cheese.update(params[:id],
                name: cheese['name'],
                milk_type: cheese['milk_type'],
                description: cheese['description'],
                image_url: cheese['image_url'],
                stank_level: cheese['stank_level'])
    redirect_to "/cheeses"
  end
end



