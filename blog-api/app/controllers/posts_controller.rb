class PostsController < ApplicationController

  def index
    render json: Post.all, except: :comments
  end

  def show
    render json: Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(params.require(:post).permit(:title, :body))
      head :no_content
    else
      render json: @post.errors, status: :unprocessable_entity
    end  end

end
