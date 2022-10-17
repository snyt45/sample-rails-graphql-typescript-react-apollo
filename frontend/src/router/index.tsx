import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { TodoEdit } from '../features/todos/edit/edit'

import TodoList from '../features/todos/index/index'

const SampleAppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="todos/edit/:id" element={<TodoEdit />} />
    </Routes>
  </BrowserRouter>
)

export default SampleAppRoutes
