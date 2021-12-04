# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  status     :integer          default("new"), not null
#  title      :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_tasks_on_status  (status)
#
class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :status

  def status
    Task.statuses[object.status]
  end
end
