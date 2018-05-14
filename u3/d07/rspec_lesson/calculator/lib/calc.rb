class Calculator
  def add(a, b)
    a + b
  end

  def subtract(a,b)
    a-b
  end

  def power(a,b)
    a**b
  end

  def sum(a)
  #a.inject(0, &:+)
  a.reduce(0, :+)
  #a.inject(0, :+)
  #a.inject(0){|sum,x| sum + x }
  #a.map(&:to_i).reduce(0, :+)
  end

  def multiply(*args)
 args.inject(:*)
 #args.reduce(:*)
 end

  def factorial(n)
    return nil unless n >= 0 #guard clause
    (1..n).reduce(1, :*)
    #(1..n).inject(1, :*)
    #(1..n).inject(:*) || 1
  end
end


