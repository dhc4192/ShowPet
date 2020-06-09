# frozen_string_literal: true

class Category < ApplicationRecord
  has_many :pets, class_name: 'pet', foreign_key: 'pet_id'
end
