class CreateMembers < ActiveRecord::Migration
  def self.up
    create_table :members do |t|
      t.string :andrew_id
      t.string :password_salt
      t.string :password_hash
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :major
      t.integer :year
      t.string :officer_position
      t.string :committee
      t.string :phone
      t.string :shirt_size
      t.string :role
      t.timestamps
    end
  end

  def self.down
    drop_table :members
  end
end
