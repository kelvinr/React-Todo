class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :content
      t.integer :todo_list_id, null: false

      t.timestamp null: false
    end
  end
end
