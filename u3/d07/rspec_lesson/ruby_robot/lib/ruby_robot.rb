class RubyRobot
  def introduce_yourself
    "Hi. I am Ruby Robot. Matz is nice, so then I am nice."
  end

=begin
  def say_back(*args)#*args WILDCARD - will accept any number of args
    args.each do |phrase|
      phrase.upcase!#bang modifies original
    end
    "#{args.join(" ")}!"
  end
=end

  def say_back(*args)
    "#{args.join(" ").upcase}!"
  end
end
