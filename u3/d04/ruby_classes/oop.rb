=begin
class King
    def value_blackjack
        10
    end

    def suit
        "heart"
    end
end

king_of_hearts = King.new

puts king_of_hearts
puts king_of_hearts.suit
puts king_of_hearts.value


class Dog
    def breed
        "Shiba Inu"
    end

    def name
        "Carrie"
    end

    def nickname
        "Cuckoo Bear"
    end

    def bark1
        puts "Bark Bark Bark!"
    end

    def bark2
        puts "Shriek howl!"
    end
end

carrie = Dog.new
p carrie
puts carrie.breed
puts carrie.name
puts carrie.nickname
carrie.bark1
carrie.bark2




class Dog2
  def breed=(value)
    #or attr_accessor :breed
    @breed = value
  end

  def breed
    @breed
  end
end

carrie = Dog2.new
carrie.breed = "horse"
puts carrie.breed


class Cat
  attr_accessor :name, :color, :expert_hunter
    alias :expert_hunter? :expert_hunter
end

new_cat = Cat.new
new_cat.name = "Charles"
new_cat.color = "Calico"
new_cat.expert_hunter = true

this_cat = Cat.new
this_cat.name = "Speckles"
this_cat.color = "Orange"
new_cat.expert_hunter = false

p new_cat.name
p new_cat.color

p this_cat.name
p this_cat.color

puts new_cat.expert_hunter


class Dog
    attr_accessor :name, :nickname, :breed
    attr_reader :bark1, :bark2

    def initialize(name, nickname, breed, bark1)
        @name = name
        @nickname = nickname
        @breed = breed
        @bark1 = bark1
        @bark2 = "whats up"
    end

end

my_dog = Dog.new("Carrie", "Cuckoo Bear", "Shiba Inu", "Gorp")

p my_dog

p my_dog.name
p my_dog.nickname
p my_dog.breed

my_dog.bark1
my_dog.bark2




class Cat2
  attr_accessor :name, :color, :fav_kibble, :expert_hunter
    alias :expert_hunter? :expert_hunter
  attr_reader :meow1, :meow2

  def initialize (name, color, fav_kibble, expert_hunter, meow1)
      @name = name
      @color = color
      @fav_kibble = fav_kibble
      @expert_hunter = expert_hunter
      @meow1 = meow1
      @meow2 = "Bork"
    end
end

another_cat = Cat2.new("Chauncey", "Magenta", "Kibbles n' Bits", true, "Mrreeeow")



class Student
  attr_accessor :first_name, :last_name, :age, :favorite_food, :is_tired
    alias :is_tired? :is_tired
  def initialize (first_name, last_name, age, favorite_food, is_tired)
      @first_name = first_name
      @last_name = last_name
      @age = age
      @favorite_food = favorite_food
      @is_tired = is_tired
  end
end

carson = Student.new("Carson", "Hyde", 30, "Mushroom Pizza", true)

p carson
p carson.first_name
p carson.last_name
p carson.age
p carson.favorite_food
p carson.is_tired

=end


class Card
  attr_accessor :suit, :value

def initialize (suit)
    @suit = suit
  end
end

class FaceCard < Card
  def initialize (suit, value)
    @suit = suit
    @value = value
  end
end

class Ace < Card
  def initialize (suit)
    @suit = suit
    @value = 11
  end
end

spade_10 = FaceCard.new("Spade", 10)
p spade_10.value
p spade_10.suit

spade_ace = Ace.new("Spade")
p spade_ace.value
p spade_ace.suit








