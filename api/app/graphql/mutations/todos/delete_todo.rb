module Mutations
  module Todos
    class DeleteTodo < BaseMutation
      field :result, String, null: false

      argument :id, String, required: true

      def resolve(id:)
        todo = Todo.find(id)
        todo.destroy!
        { result: true }
      rescue ActiveRecord::RecordNotFound => e
        raise GraphQL::ExecutionError, e.message
      end
    end
  end
end
