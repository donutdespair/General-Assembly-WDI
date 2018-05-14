students = [
  "James",
  "Puneet",
  "Jonathan",
  "Xinke",
  "Mazhar",
  "Bairon",
  "Laura",
  "Carson",
  "Miriam",
  "Vanice",
  "Justin",
  "Jayan",
  "Justin",
  "Bryan",
  "Emmanuel",
  "Taj",
  "Glenn",
  "Jennifer",
  "Ayo",
  "Taylor",
  "Leslie",
  "Fariha",
  "Daniel",
  "Nick",
  "Malik",
  "Matthew",
  "Kristi",
  "Marcela",
  "Hillary",
  "Connie",
  "Miko",
  "Michael",
  "Robert",
  "Danielle",
  "Michelle",
  "Marcos",
  "Dom"
]

 students.each do |student|
 puts student
   end

students.each do |student|
  puts student.chr
end

students.each do |student|
if (student.chr == "A" || student.chr == "E" ||student.chr == "I" || student.chr == "O" || student.chr == "U")
    vowel_first = []
    vowel_first.push(student)
    puts(vowel_first)
end
  end


