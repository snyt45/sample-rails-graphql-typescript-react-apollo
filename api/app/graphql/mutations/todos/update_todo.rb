module Mutations
  module Todos
    class UpdateTodo < BaseMutation
      field :todo, ::Types::TodoType, null: false

      argument :id, String, required: true
      argument :title, String, required: true
      argument :status, String, required: true

      def resolve(id:, title:, status:)
        todo = Todo.find(id)
        todo.update!(title: title, status: status)
        { todo: todo }
      rescue ActiveRecord::RecordNotFound, ArgumentError => e
        raise GraphQL::ExecutionError, e.message
      rescue ActiveRecord::RecordInvalid => e
        raise GraphQL::ExecutionError, e.record.errors.full_messages.join(", ")
      end
    end
  end
end
