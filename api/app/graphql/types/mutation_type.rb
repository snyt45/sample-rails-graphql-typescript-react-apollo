module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end

    field :create_todo, mutation: Mutations::Todos::CreateTodo
    field :update_todo, mutation: Mutations::Todos::UpdateTodo
    field :delete_todo, mutation: Mutations::Todos::DeleteTodo
  end
end
