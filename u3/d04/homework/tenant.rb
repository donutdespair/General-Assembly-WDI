# tenant class to store tenant data and behavior
class Tenant
  def initialize(f_name, l_name, born_on, gender)
    @f_name = f_name
    @l_name = l_name
    @born_on = born_on
    @gender = gender
  end
  #getter method
  attr_reader :f_name, :l_name, :born_on, :gender, :nickname, :occupation

  # setter methods
  def set_nickname(nm)
    @nickname = nm
  end

  def set_occupation(oc)
    @occupation = oc
  end
#A tenant should have a full_name method that returns a string of their first name, last name and nickname (if they have one).
  def fullname
     "#{f_name} #{!nickname.nil? ? "'#{nickname}' " : nil}#{l_name}"
#Ternary method for tenant without nickname.
#The bang operator forces nickname to become a boolean that I can attach the nil boolean to and then
#use the ternary operator to check if there is a nickname method called for a tenant.
#http://stackoverflow.com/questions/13554780/how-to-include-a-condition-inside-a-string-in-ruby
  end
end

=begin
p1 = Tenant.new("Calvin", "Clifford", "male", "December 21st, 1929")
p1.set_nickname("Bud")
p1.set_occupation("Office Drone")
puts p1.nickname
puts p1.f_name
puts p1.l_name
puts p1.occupation
puts p1.fullname


p2 = Tenant.new("Rilo", "Kinney", "neither", "April 21, 1980")
puts p2.f_name
puts p2.l_name
puts p2.fullname
=end
