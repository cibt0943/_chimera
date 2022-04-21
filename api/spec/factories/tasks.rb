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
FactoryBot.define do
  factory :task do
    title { 'MyString' }
    status { 1 }
  end
end
