class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :inventory_id
      t.integer :quantity
      t.timestamps
    end
  end
end
