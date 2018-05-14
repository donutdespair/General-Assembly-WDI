# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pirate.delete_all

25.times do
  name = Faker::Superhero.name
  Pirate.create(name: name,
    sea: Faker::StarWars.planet,
    ship_name: Faker::Hipster.words,
    limbs: Faker::Number.between(1, 4),
    is_left_eye_present: Faker::Boolean.boolean)
end
