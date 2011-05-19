class CreateArticles < ActiveRecord::Migration
  def self.up
    create_table :articles do |t|
      t.date :date
      t.string :issue
      t.integer :volume
      t.string :link
      t.string :image
      t.text :description
      t.timestamps
    end
  end

  def self.down
    drop_table :articles
  end
end
