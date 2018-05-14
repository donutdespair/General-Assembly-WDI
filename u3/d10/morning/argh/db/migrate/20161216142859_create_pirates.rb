class CreatePirates < ActiveRecord::Migration[5.0]
  def change
    create_table :pirates do |t|
      t.string :name
      t.string :sea
      t.string :ship_name
      t.integer :limbs
      t.boolean :is_left_eye_present
    end
  end
end
