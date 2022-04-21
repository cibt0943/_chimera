module Api
  module V1
    # Tasksコントローラー
    class TasksController < PrivateController
      def index
        # p @auth_payload
        tasks = Task.where(user_id: current_user, status: params[:statuses]).order(id: :desc)
        render json: tasks, status: :ok, each_serializer: TaskSerializer
      end

      def create
        task = current_user.tasks.build(task_params)
        if task.save
          render json: task, status: :ok
        else
          render json: { errors: task.errors.as_json(full_messages: true) }, status: :bad_request
        end
      end

      def update
        task = find_task(params[:id])
        if task.update(task_params)
          render json: task, status: :ok
        else
          render json: { errors: task.errors.as_json(full_messages: true) }, status: :bad_request
        end
      end

      def destroy
        task = find_task(params[:id])
        if task.destroy
          render json: task, status: :ok
        else
          render json: { errors: task.errors }, status: :bad_request
        end
      end

      private

      # def search_params
      #   params.permit(:statuses)
      # end

      def task_params
        params.require(:task).permit(:title, :status, :memo, :due_date)
      end

      def find_task(id)
        Task.find_by(id: id, user_id: current_user)
      end
    end
  end
end
