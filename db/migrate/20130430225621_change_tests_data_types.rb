class ChangeTestsDataTypes < ActiveRecord::Migration
  def change
    change_column :tests, :html, :text, :limit => nil
    change_column :tests, :css, :text, :limit => nil
    change_column :tests, :js, :text, :limit => nil
  end
end
