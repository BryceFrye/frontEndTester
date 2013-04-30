class AddIsNewToTests < ActiveRecord::Migration
  def change
    add_column :tests, :is_new, :boolean, default: true
  end
end
