class TodoItemsController < ApiController
  def create
    todo_list = TodoList.find(params[:todo_list_id])
    todo_item = todo_list.todo_items.new(todo_item_params)

    if todo_item.save
      render json: todo_item
    else
      render json: todo_item.errors.full_messages
    end
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:content)
  end
end
