module Api
  module V1
    # Tasksコントローラー
    class TasksController < PrivateController
      def index
        # p @auth_payload
        tasks = Task.all.order(id: :desc)
        render json: tasks, status: :ok, each_serializer: TaskSerializer
      end

      def create
        task = Task.new(task_params)
        if task.save
          render json: task, status: :ok
        else
          render json: { errors: task.errors.as_json(full_messages: true) }, status: :bad_request
        end
      end

      def update
        task = Task.find(params[:id])
        if task.update(task_params)
          render json: task, status: :ok
        else
          render json: { errors: task.errors }, status: :bad_request
        end
      end

      def destroy
        task = Task.find(params[:id])
        if task.destroy
          render json: task, status: :ok
        else
          render json: { errors: task.errors }, status: :bad_request
        end
      end

      private

      def task_params
        params.require(:task).permit(:title, :status)
      end
    end
  end
end
