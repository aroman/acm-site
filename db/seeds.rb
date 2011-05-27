# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)


#Admin account
  User.create(:username => 'admin', :email => 'admin@example.com', :password => 'secret', :role => 'administrator')

#User account
  User.create(:username => 'user', :email => 'user@example.com', :password => 'secret', :role => 'user')
