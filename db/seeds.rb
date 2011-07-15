# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)


#Admin account
  Member.create(
    :andrew_id => 'admin', 
    :password => 'secret', 
    :first_name => 'John', 
    :last_name => 'Barnaby', 
    :email => 'admin@example.com', 
    :role => 'admin', 
    :major => 'N/A', 
    :year => 'N/A',
    :officer_position => 'N/A', 
    :committee => 'N/A', 
    :phone => 'N/A', 
    :shirt_size => 'N/A'
  )

#User account
  Member.create(
    :andrew_id => 'user', 
    :password => 'secret', 
    :first_name => 'N/A', 
    :last_name => 'N/A', 
    :email => 'user@example.com', 
    :role => 'user', 
    :major => 'N/A', 
    :year => 'N/A',
    :officer_position => 'N/A', 
    :committee => 'N/A', 
    :phone => 'N/A', 
    :shirt_size => 'N/A'
  )
