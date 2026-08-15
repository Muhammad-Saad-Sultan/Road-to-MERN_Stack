import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import UserProfile from './components/UserProfile.jsx';

const cardData = [
  {
    title: "Laptop",
    description: "This is HP limited edition laptop."
  },
  {
    title: "Mobile",
    description: "This is Apple's limited edition mobile."
  },
  {
    title: "Car",
    description: "This is Bentley's limited edition car."
  }
];

const buttonData = [
  {
    label: "Delete",
    color: "red"
  },
  {
    label: "Submit",
    color: "green"
  }
];

const App = () => {
  return (
    <>
      <Header />
      <div className="cards">
        {cardData.map((card) => {
          return <Card title={card.title} description={card.description} />
        })}
      </div>
      <div className="buttons">
        {buttonData.map((button) => {
          return <Button label={button.label} color={button.color} />
        })}
      </div>
      <UserProfile name="Saad" email="saad@example.com" role="Software Engineer"/>
    </>
  )
}

export default App