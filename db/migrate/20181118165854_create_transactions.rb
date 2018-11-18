class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :store_id
      t.integer :customer_id
      t.timestamps
    end
  end
end
