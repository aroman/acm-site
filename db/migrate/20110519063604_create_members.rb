class CreateMembers < ActiveRecord::Migration
  def self.up
    create_table :members do |t|
      t.string :name
      t.string :andrew_id
      t.integer :year
      t.string :title
      t.timestamps
    end
  end

  def self.down
    drop_table :members
  end
end
