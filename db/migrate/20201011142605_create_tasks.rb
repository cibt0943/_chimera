class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :status, limit: 1, null: false, default: 0

      t.timestamps
    end

    add_index :tasks, :status
  end
end
