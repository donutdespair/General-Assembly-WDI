class CoursesController < ApplicationController
  def index
    @courses = Course.all
  end
  def show
    @courses = Course.find_by(id: params[:id])
  end
  def create
    Course.create(course_name: params[:course_name],
      class_name: params[:class_name])
    redirect_to "/courses"
  end
  def destroy
    Course.destroy(params[:id])
    redirect_to "/courses"
  end
end
