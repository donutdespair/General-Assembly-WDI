class Word < String
  def initialize(piggle)
    @piggle = piggle
  end

  def to_pig#latin
    if  @piggle.chars.first.match /([aeiou].*)/
        #letters are separated into an array
        #the first letter is matched against a RegEx of vowels
        @piggle<<"way"
        #add "way' to the end of the string if it begins with a vowel
    elsif @piggle.include?("y") && !@piggle.chars.last.match(/([y].*)/)
        #if the argument includes a "y" and does not end with one
      if  @piggle.chars.first.match(/([y].*)/)
        #if the argument starts with y
          @piggle.chars.drop(1).join<<@piggle[0]<<"ay"
        #separates each letter and pushes them into an array, drops the first
        #letter, joins the letters into one array, concats the first letter of the
        #original string, and concats "ay"
      else
          @piggle.split(/([y].*)/)[1]<<@piggle.split(/([y].*)/)[0]<<"ay"
        #this splits the string on "y" and leaves you with the part containing "y",
        #concats the first string with the next string that is made by
        #splitting on the "y" and returning the letters before "y", concats "ay"
      end
    elsif @piggle.chars.first.match /([qu].*)/
        #separates each letter and pushes them into an array,
        #the first letter are matched against a RegEx of "qu"
            @piggle.chars.drop(2).join<<@piggle.chars.first(2).join<<"ay"
        #if the string starts with "qu", each letter is again separated into an array,
        #drop the first two letters ("qu"), join the remaining letters, concats the remaining
        #letters and the first two letters from the next array to string, concats "ay"
    elsif @piggle.chars.first.match /([squ].*)/
        #pretty much the same as above
            @piggle.chars.drop(3).join<<@piggle.chars.first(3).join<<"ay"
        #also see above
    else @piggle.split(/([aeiou].*)/)[1]<<@piggle.split(/([aeiou].*)/)[0]<<"ay"
        #if the string does not start with a vowel, "qu", or "squ", the string is split
        #on the first vowel with the first vowel and following characters returned,
        #then concat the consonants (which are found by using the same RegEx
        #but returning the part before the vowels), concats "ay"
    end
  end
end


#http://stackoverflow.com/questions/28228435/how-does-this-regexp-split-on-the-first-vowel
#http://stackoverflow.com/questions/2353931/why-doesnt-this-ruby-code-compare-regex
#http://stackoverflow.com/questions/24826209/ruby-array-get-all-elements-from-second-to-last
