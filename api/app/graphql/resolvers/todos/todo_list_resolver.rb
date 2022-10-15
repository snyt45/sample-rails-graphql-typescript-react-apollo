module Resolvers
  module Todos
    class TodoListResolver < Resolvers::Base
      type [Types::TodoType], null: true

      def resolve(**args)
        Todo.all
      end
    end
  end
end
