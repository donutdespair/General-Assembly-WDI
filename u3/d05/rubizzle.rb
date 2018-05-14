#1. Create a Ruby class called Cars

#It's initialize method should ask for the make, model, year, and color
#Miles should have a default value of 0 for every new car
#Make these values readable and writable
#Go ahead and make your first car!


class Cars
  attr_accessor :make, :model, :year, :color, :miles

  def initialize(make, model, year, color)
    @make = make
    @model= model
    @year = year
    @color = color
    @miles = 0
  end

  def seen_another_year
    @miles += 15000
  end

#2. Write a method called seen_another_year inside of the Cars class that will increase the miles by 15000
#call seen_another_year on your new car, then check to make sure the value has changed

  def details
    msg = "This #{year} #{make} #{model} has #{miles} miles on it."
    old_car_msg = " And that #{color} paint is really fading."
    @miles <= 50000 ? msg : msg + old_car_msg
  end

#3. Write a method called details inside of the car class
#This method should print a string about the details of the car.
#For example: "This 1982 Cadillac Fleetwood Brougham has 15,000 miles on it"
#If the car has more than 50,000 miles, add something like this to the string
#{}", and that blue paint is really fading"

  def new_paint(color)
    @color = color
    ahh_fresh_paint
  end
#4. Time for some new paint!
#Write a method that will change the color of the car
#This method should call another method called ahh_fresh_paint that prints
#"The new white color was a good choice"
  def ahh_fresh_paint
    paint_msg = "The new #{color} color was a good choice"
  end

end

c1 = Cars.new("Honda", "Accord", 2016, "black")
p c1.details
4.times{c1.seen_another_year}
p c1.details
c1.new_paint("red")
p c1.details

#5. Try it all together!
#create a new car
#run the details method
#run the seen_another_year method 4 times
#give your car a new color
