class ChangeStankLevelTo0 < ActiveRecord::Migration[5.0]
  def change
      change_column :cheeses, :stank_level, :integer, :default => 0
  end
end
