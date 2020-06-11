class DropCategoriesPetsJoinTable < ActiveRecord::Migration[6.0]
  def change
    drop_join_table :categories, :pets
  end
end
