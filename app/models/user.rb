class User < ActiveRecord::Base
  attr_accessible :name, :first_place, :second_place, :third_place, :fourth_place
end
