# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(first_name: 'Carson', last_name:'Hyde', age:30, email:'carson@ex.com')
user2 = User.create(first_name: 'Guy', last_name:'Example', age:30, email:'guy@ex.com')

#p1 = Project.create(name: 'Project 1', url: 'http://www.project1.com', user_id: user1.id)
#p1 = Project.create(name: 'Project 2', url: 'http://www.project2.com', user_id: user2.id)
