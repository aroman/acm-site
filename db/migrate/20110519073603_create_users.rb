class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_hash
      t.string :password_salt
      t.string :role
      t.timestamps
    end
  end

#create the admin
# User.create :username => "admin", :email => "admin@example.com", :password => "secret"

#create other board members

# User.create :username => "aweis", :email => "aweis@andrew.cmu.edu", :password => "secret", :role => "Administrator"

  def self.down
    drop_table :users
  end
end
