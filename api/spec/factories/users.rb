# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  sub        :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :user do
    sub { "MyString" }
  end
end
