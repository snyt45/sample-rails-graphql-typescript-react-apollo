class Todo < ApplicationRecord
  enum status: {
    waiting: 1,
    completed: 2
  }, _prefix: true

  validates :title, presence: true
end
