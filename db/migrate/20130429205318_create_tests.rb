class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :uid, unique: true, default: ""
      t.string :html, default: ""
      t.string :css, default: ""
      t.string :js, default: ""
      t.timestamps
    end
    add_index :tests, :uid
  end
end
