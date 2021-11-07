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
FactoryBot.define do
  factory :task do
    title { 'MyString' }
    status { 1 }
  end
end
