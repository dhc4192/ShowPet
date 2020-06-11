# frozen_string_literal: true

Rails.application.routes.draw do
  resources :categories, only: :index
  resources :pets
  post '/auth/signin', to: 'authentication#signin'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
end
