class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :memo, null: true
      t.datetime :due_date, null: true
      t.integer :status, limit: 1, null: false, default: 0
      t.references :user, foreign_key: true
      t.timestamps
    end

    add_index :tasks, :status
  end
end
