import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useCreateTodoMutation, CreateTodoMutationVariables } from '../graphql/create_todo.generated';

export type ValidationErrors = {
  message: string;
}[]

export const useCreateTodo = () => {
  const [ errors, setErrors ] = useState<ValidationErrors>([])
  const navigate = useNavigate()

  const [createTodoMutation] = useCreateTodoMutation(
    {
      onError: (error) => {
        setErrors(error.graphQLErrors.map((e) => ({ message: e.message })))
      },
      onCompleted: () => {
        navigate('/')
      }
    }
  )

  const onCreateTodo = (
    variables: CreateTodoMutationVariables
  ) => createTodoMutation({ variables })

  return {
    errors,
    onCreateTodo: onCreateTodo,
  }
}
