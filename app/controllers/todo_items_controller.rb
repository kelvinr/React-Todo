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

  def update
    todo_list = TodoList.find(params[:todo_list_id])
    todo_item = todo_list.todo_items.find(params[:id])
    
    if todo_item.update(todo_item_params)
      render json: todo_item
    else
      render json: todo_items.errors.full_messages
    end
  end

  def destroy 
    todo_list = TodoList.find(params[:todo_list_id])
    todo_item = todo_list.todo_items.find(params[:id])
    render json: todo_item.id if todo_item.delete
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:content)
  end
end
