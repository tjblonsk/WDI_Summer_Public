require 'pry'

class Person
  attr_accessor :name, :age, :gender, :apartment
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def to_s
    return "#{@name} is a #{@age} year old #{@gender}"
  end
end

class Building
  attr_accessor :address, :style,
                :has_doorman, :is_walkup,
                :num_floors, :apartments

  def initialize(address, style, has_doorman, is_walkup, num_floors)
    @address = address
    @style = style
    @has_doorman = has_doorman
    @is_walkup = is_walkup
    @num_floors = num_floors
    @apartments = {}
  end

  def to_s
    "This building has #{@apartments.count} apartments."
  end
end

class Apartment
  attr_accessor :name, :rent, :sqft, :num_bedrooms, :num_bathrooms, :renters
  def initialize(name, rent, sqft, num_bedrooms, num_bathrooms)
    @name = name
    @rent = rent
    @sqft = sqft
    @num_bedrooms = num_bedrooms
    @num_bathrooms = num_bathrooms
    @renters = []
  end

  def is_occupied?
    @renters.any?
  end

  def to_s
    "#{@name} has #{@sqft} sqft and #{@renters.count} renters at #{@rent}/month."
  end
end

mckibben_lofts = Building.new("38 McKibben St", "loft", false, false, 7)
mckibben_lofts.apartments[:unit_a] = Apartment.new("A", 3200, 200, 1, 2)
mckibben_lofts.apartments[:unit_b] = Apartment.new("B", 2800, 300, 1, 1)
mckibben_lofts.apartments[:unit_a].renters << Person.new("David", 30, "male")
mckibben_lofts.apartments[:unit_a].renters << Person.new("Samantha", 20, "female")

puts mckibben_lofts
puts mckibben_lofts.apartments[:unit_a]
mckibben_lofts.apartments[:unit_a].renters.each {|renter| puts renter}

# Make another building (2 total buildings)
# Add at least 2 apartments to each building (4 total apartments)
# Add at least one tenent in each apartment (4+ total tenents)
# Output a summary of each building
# Add two attributes in total