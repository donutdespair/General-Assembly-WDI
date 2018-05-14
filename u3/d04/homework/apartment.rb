class Apartment
  attr_accessor :unit, :num_beds, :num_baths
  def initialize (unit, num_beds, num_baths)
    @unit = unit
    @num_beds = num_beds
    @num_baths = num_baths
    @tenants = [] #a collection
  end

  def price
    (num_beds * 1000) + (num_baths * 500)
  end
#An apartment's price should be dynamically calculated based on the number of beds
#($1000 per bed) and the number of bathrooms ($500 per bathroom).
  def studio?
     num_beds == 1
  end
#An apartment should have a predicate method to determine if it's a studio (has only one bedroom).
  def tenants
    @tenants
  end

 def move_in(tenant)
      full?  ? (puts "We're full! #{tenant.fullname} can't move in!") : @tenants << tenant
  end
#move_in should take a tenant object as an argument and add it to the list of tenants.

  def empty?
    @tenants.length == 0
  end
#empty? should return true if an apartment doesn't have any tenants and false if it has tenants.
  def full?
    @tenants.length == @num_beds
  end
end



a1 = Apartment.new("B", 2, 1)
a2 = Apartment.new("A", 1, 1)
puts a1.studio? #=> false
puts a2.studio? #=> true

a1 = Apartment.new("B", 1, 1)
p1 = Tenant.new("Fran", "Kubelik", "female", "May 8, 1935")
a1.move_in(p1)

puts p1.f_name
puts a1.tenants
puts a1.tenants.class
puts a1.tenants[0].class
puts a1.tenants.size
puts a1.empty?
puts a1.full?

b1 = Apartment.new("C", 2, 1)
puts b1.tenants
puts b1.tenants.size
puts b1.empty?

p2 = Tenant.new("Calvin", "Clifford", "male", "December 21st, 1929")
p2.set_nickname("Bud")
a1.move_in(p2)
