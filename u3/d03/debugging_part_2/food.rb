require "byebug"

class Food
  def editable
    response = true
    puts "editable? - #{response}"
  end
end

class HotFood < Food
  def temp
    puts "hot"
  end
end

class Array
  def saythings
    self.each do |x|
      puts x
    end
  end
end

casserole = Food.new
casserole.editable
hotdog = HotFood.new
hotdog.temp
# Food.editable - do not call method on class but on new instance

[1,3,4].saythings


