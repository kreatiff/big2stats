class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :name
      t.integer :first_place
      t.integer :second_place
      t.integer :third_place
      t.integer :fourth_place
      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end