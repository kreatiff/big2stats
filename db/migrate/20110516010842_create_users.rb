class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :name, :default => "Name"
      t.integer :first_place, :default => 0
      t.integer :second_place, :default => 0
      t.integer :third_place, :default => 0
      t.integer :fourth_place, :default => 0
      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end
