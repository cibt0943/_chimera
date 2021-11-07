# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  status     :integer          default("active"), not null
#  title      :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_tasks_on_status  (status)
#
class Task < ApplicationRecord
  enum status: { active: 0, completed: 1 }

  validates :status, inclusion: { in: %w[active completed], message: '%<value> は無効です' }
  validates :title, presence: true, length: { maximum: 255 }
end
