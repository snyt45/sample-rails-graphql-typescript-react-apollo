module Resolvers
  module Todos
    class TodoResolver < Resolvers::Base
      type Types::TodoType, null: true

      argument :id, String, required: true

      def resolve(**args)
        Todo.find(args[:id])
      rescue ActiveRecord::RecordNotFound => e
        raise GraphQL::ExecutionError, e.message
      end
    end
  end
end
