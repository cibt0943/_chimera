module Api
  module V1
    # Tasksコントローラー
    class TasksController < PrivateController
      def index
        # p @auth_payload
        tasks = Task.all
        render json: { status: :ok, data: tasks }, each_serializer: TaskSerializer
      end

      def create
        task = Task.new(task_params)
        if task.save
          render json: { status: :ok, data: task }
        else
          render json: { status: :bad_request, errors: task.errors }
        end
      end

      private

      def task_params
        params.require(:task).permit(:title)
      end
    end
  end
end
