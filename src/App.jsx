import { TodoList } from "./components/TodoList"


function App() {

  return (
    <>
      <div className='flex flex-col justify-start w-1/2 my-12 mx-auto min-h-screen text-center bg-white shadow-md rounded-lg pb-8'>
      <TodoList/>
    </div>
    </>
  )
}

export default App
