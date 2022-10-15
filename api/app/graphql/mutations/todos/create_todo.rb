module Mutations
  module Todos
    class CreateTodo < BaseMutation
      field :todo, ::Types::TodoType, null: false

      argument :title, String, required: true

      def resolve(title:)
        todo = Todo.new(title: title)
        todo.save!
        { todo: todo }
      rescue ActiveRecord::RecordInvalid => e
        raise GraphQL::ExecutionError, e.record.errors.full_messages.join(", ")
      end
    end
  end
end
