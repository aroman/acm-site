class App < ActiveRecord::Base
  attr_accessible :name, :link, :image, :description
end
