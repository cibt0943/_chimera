module Api
  module V1
    # Tasksコントローラー
    class TasksController < ApplicationController
      def index
        tasks = Task.all
        render :json => tasks
      end
    end
  end
end
