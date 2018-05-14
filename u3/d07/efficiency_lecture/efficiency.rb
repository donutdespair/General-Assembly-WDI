#Create a method for returning the frequency of an item in an array

arr = [1, 1, 2, 5, 7, 8, 7, 10, 5]
######################################################
frequency = arr.inject(Hash.new(0)) { |h,v| h[v] += 1; h}
puts frequency
# => {1=>2, 2=>1, 5=>2, 7=>2, 8=>1, 10=>1}


frequency = {}
arr.each { |i| frequency.include?(i) ? frequency[i] += 1 : frequency[i] = 1}
puts frequency
# => {1=>2, 2=>1, 5=>2, 7=>2, 8=>1, 10=>1}

