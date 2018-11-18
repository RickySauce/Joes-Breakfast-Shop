# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@store = Store.create(name: "Joes Breakfast Cart")
@inventory = Inventory.create(store_id: @store.id)
@inventory.items.build([{type_name: 'bacon'}, {type_name: 'egg'}, {type_name: 'cheese'}])
