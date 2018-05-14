  class PiratesController < ApplicationController
  def index
      # @courses = Course.all
      @pirates = Pirate.all
  end
  def show
    @id = params[:id]
    @pirate = Pirate.find(@id)
  end
  def new
    @pirate = Pirate.new
  end
  def create
    Pirate.create(name: params[:name],
      sea: params[:sea],
      ship_name: params[:ship_name],
      limbs: params[:limbs],
      is_left_eye_present: params[:is_left_eye_present])
    redirect_to "/pirates"
  end
  def edit
    render "edit"
  end
  def update
    @id = params[:id]
    Pirate.update(@id,
      name: params[:name],
      sea: params[:sea],
      ship_name: params[:ship_name],
      limbs: params[:limbs],
      is_left_eye_present: params[:is_left_eye_present])
    redirect_to(:back)
  end
  def destroy
    @id = params[:id]
    Pirate.destroy(@id)
  end
end
