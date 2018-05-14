#Given the following code, rewrite these methods using a proc!
#Hint - use the Proc.new keyword to make a proc, and call it with (&proc_name).
#You should be able to write one proc that will work for all both methods.

#people_one = [53, 28, 17, 87, 62, 12, 31, 9]
#people_two = [13, 45, 67, 76, 50, 29, 18, 21]

#over_eighteen = people_one.select { |age| age > 18 }

#under_eighteen = people_one.reject do |age|
#  age > 18
#end

#puts "over eighteen #{over_eighteen}"
#puts "under eighteen  #{under_eighteen}"

####################################################################
#blocks of code bound to a set of local variables
#can access variables outside scope

people_one = [53, 28, 17, 87, 62, 12, 31, 9]
people_two = [13, 45, 67, 76, 50, 29, 18, 21]

get_age = Proc.new { |age| age > 18}

over_eighteen = people_one.select(&get_age)

under_eighteen = people_one.reject(&get_age)
over_eighteen = people_two.select(&get_age)
under_eighteen = people_two.reject(&get_age)


puts "over eighteen #{over_eighteen}"
puts "under eighteen  #{under_eighteen}"
####################################################################

#For this problem create two procs. One called add, which adds 2 numbers together,
#and one called multiply, which multiplies two numbers together. Each proc should
#puts the result.

#Everything is set up in this problem other than the procs. Declare them before
#the doSomeMath method.

#def doSomeMath pass_a_proc, a, b
#  pass_a_proc.call(a,b)
#end

#doSomeMath(add, 1, 52) #=> should puts 53
#doSomeMath(multiply, 5, 2) #=> should puts 10
#####################################################################

 add = Proc.new { |a, b| puts a + b}
 multiply = Proc.new { |a, b| puts a * b}

 def doSomeMath pass_a_proc, a, b
  pass_a_proc.call(a,b)
end

doSomeMath(add, 1, 52)
doSomeMath(multiply, 5, 2)

###################################################################
#The yield keyword is another tool we can use to pass in a block of code to a method.
#Example:

#def print_once
#  yield
#end

#print_once { puts "HOLD THE DOOR" }
#We can also pass a proc in here instead of just a normal block. The yield keyword will
#run the proc as many times as we want, also.

#def print_five_times
#  yield
#  yield
#  yield
#  yield
#  yield
#end

#hodor = Proc.new { puts "HOLD THE DOOR" }
#print_five_times &hodor
#Create a new proc that will print true if a number is even and false if it is odd.
#Yield this proc inside a method called is_it_even. This method should take both the
#yielded block and a number as arguments.

########################################################################
def is_it_even (x)
  yield x
end

is_even = Proc.new { |n| p n.even?} #{ |x| p n % 2 == 0}

is_it_even 5, &is_even
is_it_even 4, &is_even
