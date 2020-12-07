class PostsController < ApplicationController
  # Token検証を無効にする場合付ける
  # protect_from_forgery

  def index
    @posts = Post.all.order(id: "DESC")
  end

  # 削除
  # def new
  # end

  def create
    # binding.pry
    post = Post.create(content: params[:content], checked: false)
    # redirect_to action: :index
    render json:{ post: post }
  end

  def checked
    # binding.pry
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end
end
