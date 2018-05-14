require "faker"

names = []


for i in 1..20 do
   names.push(
    {
      name: Faker::Name.name,
      city: Faker::Address.city
    }
    )
end


=begin
(1..20).each do |i|
names.push(Faker::Name.name)
end
=end


puts names.sort! {|a,b| a[a:names] <=> b[b:names]}
