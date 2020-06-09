# frozen_string_literal: true

class Pet < ApplicationRecord
  belongs_to :user
  belongs_to :category, class_name: 'category', foreign_key: 'category_id'
end
