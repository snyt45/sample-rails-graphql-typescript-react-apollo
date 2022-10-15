# frozen_string_literal: true

namespace :graphql do
  namespace :schema do
    desc 'generate schema.graphql'
    task dump: :environment do
      dump(ApiSchema, "gen/schema.graphql")
    end
  end
end

def dump(schema, path)
  schema_defn = schema.to_definition
  File.write(Rails.root.join(path), schema_defn)
  puts "Updated #{path}"
end
