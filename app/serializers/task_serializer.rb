class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :status

  def status
    Task.statuses[object.status]
  end
end
