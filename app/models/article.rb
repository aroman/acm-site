class Article < ActiveRecord::Base
  attr_accessible :date, :issue, :volume, :link, :image, :description
end
