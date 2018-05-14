# 1
#print "Hello World"
#variable_declarations = "In ruby, we don't need to use the var keyword to assign variables!"
#puts variable_declarations
#prints "Hello World" to single line
#puts "In ruby, we don't need to use the var keyword to assign variables!" on line
#with new line after



# 2
#the_word = "Bird"

#3.times do
#  print the_word
#end
#prints BirdBirdBird single line
#print "#{the_word} is the word"
#prints Bird is the word


# 3
#h = { "n" => 100, "m" => 100, "y" => 300, "d" => 200, "a" => 0 }
#h.shift
# ["n", 100] - similar to .pop in js; n is key, 100 is value



# 4
#CHANGE = "I am a constant!"
#puts CHANGE

#CHANGE = "If you try to change me, I'll throw a warning!"
#puts CHANGE

#throws warning since constants should not be changed after being initialized


=begin
# 5
one = 2 - 1
apple = "apple"

if one > 0 # 2-1 > 0 - numbers are truthy in both ruby and js
  puts "numbers are truthy in both ruby and js"
end

if apple #strings are truthy values in ruby, just like in js
  puts "strings are truthy values in ruby, just like in js"
end

if 1 == "1"
  puts "this won't print" #does not print
elsif 1 == one
  puts "scrict equalilty is done with 2 equal signs in ruby, rather than 3 in js!"
end # scrict equalilty is done with 2 equal signs in ruby not 3
=end

=begin
# 6
numbers = [1,2,3,4,5]
numbers.each do |number|
  puts number
end
# prints each number on a new line - print would print to same line
=end



=begin
# 7
numbers = [1,2,3,4,5]
doubles = numbers.map do |num|
  num * 2
end
puts doubles
# prints num*2 for each number on a new line - print would print to same line
=end

=begin
# 8
numbers = [1,2,3,4,5]
evens = numbers.select do |num|
  num % 2 == 0
end
puts evens
#prints number if it is divisble by 2 with no remainder
=end


=begin
# 9
class DOG
  def bark
    puts "BARK!"
  end

  def bark_phrase(words)
    puts words
  end

  def no_parenthesis words
    puts words
  end

end

alfred = DOG.new
alfred.bark
#BARK!
alfred.bark_phrase("In ruby, dogs can talk")
#In ruby, dogs can talk
alfred.no_parenthesis "In ruby, humans don't need to use parenthesis all the time!"
#In ruby, humans don't need to use parenthesis all the time!
=end


# 10
list_of_numbers = (1..10).to_a
# range

puts "Tacocat".reverse
# prints tacocaT

puts "the list of numbers is: #{list_of_numbers.join ', '}"
# the list of numbers is: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

puts list_of_numbers.reject! { |num| num % 2 == 0 }
puts list_of_numbers
# prints each odd number on a new line
# http://stackoverflow.com/questions/612189/why-are-exclamation-marks-used-in-ruby-methods
# ! - bang operator mutates original array
# without bang, original numbers and odd would be printed
hashling = { "a" => 100, "b" => 200 }
puts hashling.each {|key, value| puts "#{key} is #{value}" }
# a is 100
# b is 200
h = { "a" => 100, "b" => 200 }
h.fetch("z", "not found")



