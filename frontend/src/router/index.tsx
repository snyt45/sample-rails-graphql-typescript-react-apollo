import { Route, Routes, BrowserRouter } from 'react-router-dom'

import TodoList from '../features/todos/index/index'

const SampleAppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoList />} />
    </Routes>
  </BrowserRouter>
)

export default SampleAppRoutes
