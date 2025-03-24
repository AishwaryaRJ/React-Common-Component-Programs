import { useState } from 'react';
import './App.css';
import WorkTile from './components/WorkTile';
import ParentComponent from './reactExamples';
import ToDoList from './ToDo/ToDoList';
import Products from './components/products';
import Timer from './components/Timer';
import CallBackEx from './components/callBackEx';
import Form from './components/form';
import ThemeProvider from './ThemeProvider';
import ThemedComponent from './ThemedCoomponent';
import ListWithAlert from './components/listWithAlert';
import Counter from './components/counterComponent/Counter';
function App() {

  const [title, setTitle] = useState(null)
  const [workList, setWorkList] = useState([])
  const handleSave = () => {
    console.log('called')
    setWorkList((prev) => [...workList, title])
    setTitle('')
  }

  const handleInputChange = (e) => {
    setTitle((prev) => e.target.value)
  }
  
  const handlepreventDefault = e => {
    e.preventDefault();
    console.log("clicked on preventDefault")
}
const handlestopPropagation = e => {
    e.stopPropagation();
    console.log("clicked on stopPropagation")
}

const insideDiv = (e) => {
    e.stopPropagation();
    console.log("clicked on Div")
}

  return (
    <div className="App">
         <form>
                Type anything: <input />
                <button type="submit"
                    onClick={handlepreventDefault}>
                    preventDefault()
                </button>
                <span onClick={handlestopPropagation}>
                    stopPropagation()
                    <span onClick={insideDiv}> Inside div</span>
                </span>
                <button type="submit">submit</button>
 
            </form>
      {/* <Timer />
      <CallBackEx /> */}
      {/* <h2>ToDo List</h2>
      {console.log('workList', workList)
      }
      <input type='text' value={title} onChange={(e) => handleInputChange(e)} />
      <input type='submit' text='Submit' onClick={handleSave} className='tileButton' />
      {workList.map((item) => {
        return (
          <WorkTile title={item} workList={workList} setWorkList={setWorkList} />
        )
      })
      } */}
      {/* <ToDoList /> */}
      {/* <ParentComponent /> */}
      {/* <Products /> */}
      {/* <ListWithAlert />
      <Form /> */}
      <Counter />
    </div>
  );
}

export default App;