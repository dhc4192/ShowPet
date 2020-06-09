# frozen_string_literal: true

Rails.application.routes.draw do
  resources :categories
  resources :pets
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
end
