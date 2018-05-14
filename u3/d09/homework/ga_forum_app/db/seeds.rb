Comment.delete_all
Topic.delete_all
Course.delete_all
User.delete_all


    Course.create(course_name: Faker::Hipster.word,
              class_name: Faker::Book.genre
              )
  name = Faker::App.author
  User.create(name: Faker::App.author,
              email: Faker::Internet.email(name), course_id: 1
              )

  Topic.create(title: Faker::Superhero.name,
              content: Faker::Team.creature, user_id: 1
              )

  Comment.create(content: Faker::StarWars.quote, topic_id: 1, user_id: 1
              )
