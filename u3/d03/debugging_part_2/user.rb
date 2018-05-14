require "byebug"
def print_name(first_name, last_name)
  p combine_names(first_name, last_name)
end

def combine_names(first_name, last_name)
  if first_name && last_name
    #name = first_name + " " + last_name
    name = "#{first_name} #{last_name}"
  end

  name.upcase
end

puts "What is your first name?"
first_name = gets.chomp

puts "What is your last name?"
last_name = gets.chomp


print_name(first_name, last_name)
