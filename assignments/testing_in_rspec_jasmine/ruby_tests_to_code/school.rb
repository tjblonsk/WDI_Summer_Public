class School
  attr_accessor :name, :students

<<<<<<< HEAD

=======
>>>>>>> c73c1a9bf3b4fc25cc81725478d021fc3619f337
  def initialize(name)
    @name = name
    @students = {}
  end

<<<<<<< HEAD

=======
>>>>>>> c73c1a9bf3b4fc25cc81725478d021fc3619f337
  def enroll_student(name, gpa)
    @students[name] = gpa
  end

<<<<<<< HEAD

def grade(name,gpa)
  @students[name] = gpa
end


def average_gpa
  @students.values.reduce(:+).to_f / @students.count
end


def withdraw_student(name)
  @students.delete(name)
end
=======
  def grade(name, gpa)
    @students[name] = gpa
  end

  def average_gpa
    @students.values.reduce(:+).to_f / @students.count
  end

  def withdraw_student(name)
    @students.delete(name)
  end
>>>>>>> c73c1a9bf3b4fc25cc81725478d021fc3619f337

end
