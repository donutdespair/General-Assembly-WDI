#Step 1

#Create a file called box_office.rb

#Perform each task and assign the outputs to sensibly named variables.

#Record your work in box_office.rb

#Transform the following string of ratings into an array of strings.

#{}"pg-thirteen,pg,r,pg,pg-thirteen,pg-thirteen,pg-thirteen,r,r,r,r,pg-thirteen,r,pg-thirteen,r,r,r,r,r,r,pg-thirteen,r,pg-thirteen,pg-thirteen,pg,r,r,pg,pg"
#Convert the following string of movie titles into an Array of movie titles.

#{}"the hunger games: mockingjay - part 1|penguins of madagascar|horrible bosses 2|big hero 6|interstellar|dumb and dumber to|the theory of everything|gone girl|the pyramid|birdman|nightcrawler|st. vincent|fury|beyond the lights|wild|foxcatcher|the homesman|whiplash|john wick|the equalizer|guardians of the galaxy|the judge|the maze runner|ouija|alexander and the terrible, horrible, no good, very bad day|rosewater|hector and the search for happiness|the book of life|the boxtrolls"
#Convert the following string of movie scores into an array of strings. Each string should contain two percentages separated by a comma.

#"65%, 76%*71%, 68%*34%, 60%*89%, 94%*73%, 87%*26%, 49%*81%, 84%*88%, 89%*7%, 39%*94%, 86%*95%, 87%*76%, 82%*78%, 88%*84%, 83%*92%, 80%*86%, 77%*79%, 53%*96%, 96%*85%, 82%*61%, 81%*90%, 94%*47%, 76%*63%, 73%*7%, 29%*62%, 65%*74%, 75%*36%, 67%*82%, 82%*75%, 68%"
# Before
#"65%, 76%*71%, 68%"
# After
#[ "65%, 76%", "71%, 68%"]

mpaa_rating = "pg-thirteen,pg,r,pg,pg-thirteen,pg-thirteen,pg-thirteen,r,r,r,r,pg-thirteen,r,pg-thirteen,r,r,r,r,r,r,pg-thirteen,r,pg-thirteen,pg-thirteen,pg,r,r,pg,pg".split(",")
#p mpaa_rating

movie_titles = "the hunger games: mockingjay - part 1|penguins of madagascar|horrible bosses 2|big hero 6|interstellar|dumb and dumber to|the theory of everything|gone girl|the pyramid|birdman|nightcrawler|st. vincent|fury|beyond the lights|wild|foxcatcher|the homesman|whiplash|john wick|the equalizer|guardians of the galaxy|the judge|the maze runner|ouija|alexander and the terrible, horrible, no good, very bad day|rosewater|hector and the search for happiness|the book of life|the boxtrolls".split("|")
#p movie_titles

movie_score = "65%, 76%*71%, 68%*34%, 60%*89%, 94%*73%, 87%*26%, 49%*81%, 84%*88%, 89%*7%, 39%*94%, 86%*95%, 87%*76%, 82%*78%, 88%*84%, 83%*92%, 80%*86%, 77%*79%, 53%*96%, 96%*85%, 82%*61%, 81%*90%, 94%*47%, 76%*63%, 73%*7%, 29%*62%, 65%*74%, 75%*36%, 67%*82%, 82%*75%, 68%".split("*")
#p movie_score

#Step 2
#Perform each of the following tasks with .each and again with .map

#Transform the array of ratings from above, replace "thirteen" with "13".

# Before
#"pg-thirteen"
# After
#"pg-13"


mpaa_rating_each = mpaa_rating.each do |s|
  s.gsub!("thirteen", "13")
end
#p mpaa_rating_each

mpaa_rating_map = mpaa_rating.map { |s| s.gsub("thirteen", "13") }
#p mpaa_rating_map

#Transform the above array of ratings so that each string is all uppercased.

# Before
#"pg-13"
# After
#"PG-13"

mpaa_rating_each.each(&:upcase!)
#p mpaa_rating_each

mpaa_rating_map.map!(&:upcase)
#p mpaa_rating_map

#Transform that array of movie titles so that every word in each string is capitalized.

# Before
#"alexander and the terrible, horrible, no good, very bad day"
# After
#"Alexander And The Terrible, Horrible, No Good, Very Bad Day"

movie_title_cap =
movie_titles.map do |movie|
  movie.split(" ").map(&:capitalize).join(" ")
end

#p movie_title_cap

movie_title_cap_each = movie_titles.each.to_s.split(&:capitalize!)
#p movie_title_each
#Transform the that array of strings into an array of hashes with a key of title and a value of the title.

# Before
#"The Hunger Games: Mockingjay - Part 1"
# After
#{:title => "The Hunger Games: Mockingjay - Part 1"}
movie_hash = movie_title_cap.map do |movie|
  {title: movie}
end
#p movie_hash

#Convert the above array of scores into an array of hashes where the key is :score and the value is the scores.

# Before
#[ "65%, 76%", "71%, 68%"]
# After
#[ {:scores => "65%, 76%"}, {:scores => "71%, 68%"} ]

score_hash = movie_score.map do |score|
  {score: score}
  end
#p score_hash



#Step 3

#Convert the above arrays of hashes of movie titles and scores into a single array of hashes with title and score keys.

# Before
#[
#    {:scores => "65%, 76%"},
#    {:scores => "71%, 68%"}
#]
#[
#    {:title => "The Hunger Games: Mockingjay - Part 1"},
#    {:title => "Penguins Of Madagascar" }
#]
# After
#[
#    {
#        :title  => "The Hunger Games: Mockingjay - Part 1",
#        :scores => "65%, 76%"
#    },
#    {
#        :title  => "Penguins Of Madagascar",
#        :scores => "71%, 68%"
 #   }
#]

titles_and_scores = movie_hash.each_with_index.map do |movie, index|
  {title: movie[:title], score: score_hash[index][:score]}
end

#p titles_and_scores


titles_and_scores.map do |movie|
  movie_score = movie[:score].split(", ")
  audience = movie[:score][0]
  critics = movie[:score][1]
  movie_score = {audience: audience, critics: critics}
end
#puts titles_and_scores

titles_and_scores.map do |movie|
  movie[:score] = {critics: movie[:score][0].to_f/100, audience: movie[:score][1].to_f/100}
end
puts titles_and_scores
