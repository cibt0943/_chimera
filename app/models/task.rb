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
class Task < ApplicationRecord
  enum status: { new: 0, done: 1, doing: 2, canceled: 3, pending: 4 }, _prefix: true

  validates :status, inclusion: { in: %w[new done doing canceled pending], message: '%<value> は無効です' }
  validates :title, presence: true, length: { maximum: 255 }
end
