module Api
  module V1
    # Tasksコントローラー
    class TasksController < ApplicationController
      def index
        tasks = Task.all
        render json: tasks, each_serializer: TaskSerializer
      end

      def create
        task = Task.new(task_params)
        if task.save
          render json: { status: 'SUCCESS', data: task }
        else
          render json: { status: 'ERROR', data: task.errors }
        end
      end

      private

      def task_params
        params.require(:task).permit(:title)
      end
    end
  end
end
