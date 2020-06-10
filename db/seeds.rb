# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pet.destroy_all
Category.destroy_all
User.destroy_all

@user = User.create!(
  {
    username: 'Dae',
    email: 'dae@gmail.com',
    password: '123456'
  }
)
p "#{User.count} user(s) created"

@dog = Category.create!(name: 'Dog')
@cat = Category.create!(name: 'Cat')
@hamster = Category.create!(name: 'Hamster')
@bird = Category.create!(name: 'Bird')
@exotic = Category.create!(name: 'Exotic')
@other = Category.create!(name: 'Other')

p "#{Category.count} category created"

Pet.create!(
  name: 'Kid',
  image: 'https://i.ibb.co/wKBYhXQ/Kid1.jpg',
  breed: 'Maltese',
  age: 6,
  description: 'Playful, happy, loves the outdoors, and loves treats.',
  user: @user,
  category: @dog
)
p "#{Pet.count} pet(s) created"
