class TodoListsController < ApiController
  def index
    @todo_lists = TodoList.all
    render json: @todo_lists
  end

  def show
    @todo_list = TodoList.find(params[:id])
    render json: [@todo_list, @todo_list.todo_items]
  end

  def create
    @todo_list = TodoList.new(todo_list_params)

    if @todo_list.save
      render json: @todo_list
    else
      render json: @todo_list.errors.full_messages
    end
  end

  def update
    todo_list = TodoList.find(params[:id])

    if todo_list.update(todo_list_params) 
      render json: todo_list
    else
      render json: todo_list.errors.full_messages
    end
  end

  def destroy
    todo_list = TodoList.find(params[:id])
    render json: todo_list.id if todo_list.delete
  end

  private

  def todo_list_params
    params.require(:todo_list).permit(:title, :description)
  end
end
