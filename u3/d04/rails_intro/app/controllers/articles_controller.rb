class ArticlesController < ApplicationController
  def index
    @articles = Article.all #model must be singular
  end
  def show
    @id = params[:id]
    @article = Article.find(@id)
  end
end
