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

@user1 = User.create!(
  {
    username: 'Dae',
    email: 'dae@gmail.com',
    password: '123123'
  }
)
@user2 = User.create!(
  {
    username: 'DC',
    email: 'dc@gmail.com',
    password: '123123'
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
  description: 'Loves being on the baby swings.',
  user: @user1,
  category: @dog
)
Pet.create!(
  name: 'Kid',
  image: 'https://i.ibb.co/6N4dKxM/Kid2.jpg',
  breed: 'Maltese',
  age: 6,
  description: 'Rocking that Burberry trench coat.',
  user: @user1,
  category: @dog
)
Pet.create!(
  name: 'Lam',
  image: 'https://i.ibb.co/2Zj3vyB/Lam.jpg',
  breed: 'American Shorthair',
  age: 3,
  description: 'Getting her beauty sleep.',
  user: @user2,
  category: @cat
)

p "#{Pet.count} pet(s) created"
