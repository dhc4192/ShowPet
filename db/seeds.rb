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
    password: 'dhc4192'
  }
)
@user2 = User.create!(
  {
    username: 'DC',
    email: 'dc@gmail.com',
    password: 'dhc4192'
  }
)
@user3 = User.create!(
  {
    username: 'D',
    email: 'd@gmail.com',
    password: 'dhc4192'
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
  name: 'Simba',
  image: 'https://i.ibb.co/ZLGCm53/01-lion-populations-nationalgeographic-1777804.jpg',
  breed: 'Lion',
  age: 10,
  description: '.......',
  user: @user3,
  category: @other
)
Pet.create!(
  name: 'Fil-A',
  image: 'https://ibb.co/gTbXVRT',
  breed: 'Chicken',
  age: 3,
  description: 'Getting ready.',
  user: @user3,
  category: @bird
)
Pet.create!(
  name: 'Chip',
  image: 'https://i.ibb.co/XXDKqHZ/parakeet.jpg',
  breed: 'Parakeet',
  age: 2,
  description: 'Just chilling.',
  user: @user2,
  category: @bird
)
Pet.create!(
  name: 'Sonic',
  image: 'https://i.ibb.co/44Xc1RC/hedge.jpg',
  breed: 'Hedgehog',
  age: 1,
  description: "Doesn't seem too fast.",
  user: @user2,
  category: @exotic
)
Pet.create!(
  name: 'Mini Ham',
  image: 'https://i.ibb.co/10t2wkC/ham2.jpg',
  breed: 'Roborovski Dwarf Hamster',
  age: 1,
  description: 'So tiny.',
  user: @user2,
  category: @hamster
)
Pet.create!(
  name: 'Thief',
  image: 'https://i.ibb.co/rpcDD07/racoon.jpg',
  breed: 'Raccoon',
  age: 2,
  description: 'Just cruising around.',
  user: @user3,
  category: @other
)
Pet.create!(
  name: 'Ham',
  image: 'https://i.ibb.co/RQfVPsL/ham1.jpg',
  breed: 'Syrian Hamster',
  age: 1,
  description: 'WAIT!.',
  user: @user2,
  category: @hamster
)
Pet.create!(
  name: 'Damn',
  image: 'https://i.ibb.co/9Hs3dBS/fennec.jpg',
  breed: 'Fenec Fox',
  age: 3,
  description: 'Them ears though.',
  user: @user2,
  category: @exotic
)
Pet.create!(
  name: 'Boss',
  image: 'https://i.ibb.co/KVt2xmr/bluenose.jpg',
  breed: 'Bluenose Pit',
  age: 6,
  description: 'Look at that handsomeness',
  user: @user2,
  category: @dog
)
Pet.create!(
  name: 'Rush',
  image: 'https://i.ibb.co/ZBczLc5/russian.jpg',
  breed: 'Russian Blue',
  age: 4,
  description: 'What you looking at?',
  user: @user2,
  category: @cat
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
  image: 'https://i.ibb.co/ZNpHxWJ/Lam.jpg',
  breed: 'American Shorthair',
  age: 3,
  description: 'Getting her beauty sleep.',
  user: @user1,
  category: @cat
)
Pet.create!(
  name: 'Kid',
  image: 'https://i.ibb.co/XzHVLzG/Kid1.jpg',
  breed: 'Maltese',
  age: 6,
  description: 'Loves being on the baby swings.',
  user: @user1,
  category: @dog
)

p "#{Pet.count} pet(s) created"
