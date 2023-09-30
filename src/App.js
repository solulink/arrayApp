
import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const data = [1,2,3,4,5];
  const [leftData, setLeftData]= useState(data);
  const [rightData, setRightData] = useState([]);
  const [checkedItems, setCheckItems] = useState([])

  const remainder = (a,b) => {
    return a.filter((item)=> b.indexOf(item) === -1);
  }

  const handleToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];
    console.log(currentIndex)
    if(currentIndex === -1){
      newCheckedItems.push(item);
    } else{
      newCheckedItems.splice(currentIndex, 1);
    }
    setCheckItems(newCheckedItems);

  }
  const rightTransfer = () =>{
     setRightData(rightData.concat(checkedItems).sort());
     setLeftData(remainder(leftData,checkedItems).sort());
     setCheckItems([]);
  }
  const leftTransfer = () =>{
    setLeftData(leftData.concat(checkedItems).sort());
    setRightData(remainder(rightData,checkedItems).sort());
    setCheckItems([]);
 }
  return (
    <div className='appContainer'>
      <List props={leftData} handleToggle={handleToggle}/>
      <div className='actions'>
        <button onClick={rightTransfer}>&gt;</button>
        <button onClick={leftTransfer}>&lt;</button>
      </div>
      <List props={rightData} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
