class UsersController < ApplicationController
  def index
    @users = User.all
  end
  def show
    @user = User.find_by(id: params[:id])
  end
  def create
    User.create(first_name: params[:first_name],
      last_name: params[:last_name],
      age: params[:age],
      email: params[:email])
    redirect_to "/users"
  end
  def destroy
    User.destroy(params[:id])
    redirect_to "/users"
  end
end

