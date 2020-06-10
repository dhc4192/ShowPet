# frozen_string_literal: true

Rails.application.routes.draw do
  resources :categories, only: :index
  resources :pets
  post '/auth/signin', to: 'authentication#signin'
  get '/auth/verify', to: 'authentication#verify'
  get '/categories/:catgory_id/pets/:id', to: 'pets#pet_to_category'
  resources :users
end
