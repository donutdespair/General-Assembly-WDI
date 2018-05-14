kanye_records = [
{ year: 2016, title: "The Life of Pablo" },
{ year: 2013, title: "Yeezus" },
{ year: 2011, title: "Watch the Throne" },
{ year: 2010, title: "My Beautiful Dark Twisted Fantasy" },
{ year: 2008, title: "808s and Heartbreak" },
{ year: 2007, title: "Graduation" },
{ year: 2005, title: "Late Registration" },
{ year: 2004, title: "The College Dropout" }
]


#kanye_records.each do |record|
#  puts(record[:title])
#end

kanye_records.each {|x| puts x[:title]}
# print the name of every Kanye record

#kanye_records.each do |record|
#  puts(record[:year]).to_i
#end

kanye_records.each {|x| puts x[:year]}
# print the year every Kanye record was released

#kanye_records.push({year: 2017, title: "completely asinine"})
kanye_records.unshift({year: 2017, title: "completely asinine"})
puts kanye_records
# look into the future and add a forthcoming Kanye record into our array
# should be released in 2017 and have a title that is completely asinine


kanye_records.each {|x| puts x[:title] if x[:year] > 2007}

#kanye_records.each do |x|
#  if x[:year] > 2007
#    puts x[:title]
#  end
#end
# iterate through Kanye's record collection and print out the titles of all the
# records released after Kanye's ego exploded (this happened in 2007)
#{batman[:alter_ego]}

kanye_records.each do |x|
  puts "#{x[:title]} was released in #{x[:year]}."
end
# iterate through the collection. For each record, print out a sentence detailing
# each record. for example, " 'Graduation' was released in 2007"

kanye_records.each do |x|
  x[:label] = "Def Jam"
end
  puts kanye_records
#iterate through collection. add a key value pair to each record with the
#key as :label and the value as "def jam".

kanye_records.each do |x|
puts "#{x[:title]}...that's a long title" if x[:title].length > 15
end
# terate through the collection. if a record's title contains more than 15
# letters, print 'that's a long title' to the screen.

kanye_records.map do |x|
  puts x[:title].gsub("o", "0")
  end
# does not change array

  kanye_records.map do |x|
  x[:title].gsub!("o", "0")
  puts x[:title]
  end
#does change array

# iterate through the collection. replace the letter 'o' in each
# record title with the number 0.
