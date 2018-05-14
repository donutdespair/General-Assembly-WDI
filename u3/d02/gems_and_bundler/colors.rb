require 'colorize'
#puts "This is blue".colorize(:blue)


def rainbow_speak(sentence)
  colors = String.colors
  rand_num = 0
  previous_rand_num = 0

  sentence = sentence.split('')
  sentence.map { |letter|
while (rand_num == previous_rand_num)
  rand_num = rand(0..colors.length)
end
previous_rand_num = rand_num;
letter.colorize(colors[rand_num]);
  }.join('')


end

puts rainbow_speak("this string is nao rainbow")

#colors.sample

