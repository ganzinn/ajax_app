Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get 'posts', to: 'posts#index'
  root to: 'posts#index'
  # get 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
  patch 'posts/:id', to: 'posts#checked'
end
