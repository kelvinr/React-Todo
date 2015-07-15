class TodoListsController < ApiController
  def index
    @todos = TodoList.all
    render json: @todos
  end
end
