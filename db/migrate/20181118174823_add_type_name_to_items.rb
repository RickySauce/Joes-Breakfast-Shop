class AddTypeNameToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :type_name, :string
  end
end
