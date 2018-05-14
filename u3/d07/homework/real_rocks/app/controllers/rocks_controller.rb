class RocksController < ApplicationController
  def index
    @rocks = Rock.all
  end
  def show
    @rock = Rock.find_by(id: params[:id])
  end

 def edit
     @rock = Rock.find(params[:id])
   end

  def update
    @rock = Rock.find(params[:id])
    rock = params['rock']
    Rock.update(params[:id],
                name: rock['name'],
                description: rock['description'],
                image: rock['image'])
    redirect_to @rock
  end

  def create
    rock = params['rock']
    Rock.create(name: rock['name'],
      description: rock['description'],
      image: rock['image'])
    redirect_to "/rocks"
  end

  def destroy
    Rock.destroy(params[:id])
    redirect_to "/rocks"
  end

end
