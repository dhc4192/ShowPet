class AddCategoryToPets < ActiveRecord::Migration[6.0]
  def change
    add_reference :pets, :category, null: false, foreign_key: true
  end
end
