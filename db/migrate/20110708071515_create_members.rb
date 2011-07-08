class CreateMembers < ActiveRecord::Migration
  def self.up
    create_table :members do |t|
      t.string :first_name
      t.string :last_name
      t.string :andrew_id
      t.string :major
      t.string :officer_position
      t.string :committee
      t.string :phone
      t.string :email
      t.string :shirt_size
      t.integer :year
      t.timestamps
    end
  end

  def self.down
    drop_table :members
  end
end
