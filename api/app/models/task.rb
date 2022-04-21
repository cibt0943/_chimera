# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  due_date   :datetime
#  memo       :text(65535)
#  position   :integer
#  status     :integer          default("new"), not null
#  title      :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_tasks_on_status   (status)
#  index_tasks_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Task < ApplicationRecord
  acts_as_list
  enum status: { new: 0, done: 1, doing: 2, canceled: 3, pending: 4 }, _prefix: true

  validates :title, presence: true, length: { maximum: 255 }
  validates :status, inclusion: { in: %w[new done doing canceled pending], message: I18n.t('errors.messages.invalid') }
  # validates :memo
  validates :due_date, date: true
end
