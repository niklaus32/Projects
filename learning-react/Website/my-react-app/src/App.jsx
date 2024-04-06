import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import ExternalButton from './ExternalButton.jsx'
import ModuleButton from './Button/ModuleButton.jsx'
import InlineButton from './InlineButton.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {
//list component as props. can reuse lists
  const fruits = [{id: 1, name:"apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}];
  
  const vegetables = [{id: 6, name:"potatoes", calories: 110}, 
                  {id: 7, name: "celery", calories: 15}, 
                  {id: 8, name: "carrots", calories: 25}, 
                  {id: 9, name: "corn", calories: 63}, 
                  {id: 10, name: "broccoli", calories: 50}];
  return(
    <>
      <Header/>
      <UserGreeting isLoggedIn={true} username="username"/>
      {fruits.length > 0? <List items={fruits} category="Fruits"/> : null}
      <List items={vegetables} category="Vegetables"/>
      <Student name="Patrick" age={30} isStudent={false}/>
      <Student/>
      <Food/>
      <ExternalButton/>
      <ModuleButton/>
      <InlineButton/>
      <Footer/>
      <Card/>
      <Card/>
      
      
    </>
  );
}

export default App
