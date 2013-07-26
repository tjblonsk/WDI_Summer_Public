# Done in JS? Now do it in Ruby.

numbers = (1..100).to_a

numbers.each do |number|
  if number % 3 == 0
    puts "Fizz"
  elsif number % 5 == 0
    puts "Buzz"
  elsif number % 15 == 0
    puts "FizzBuzz"
  else
    puts number
  end
end

