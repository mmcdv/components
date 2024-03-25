import { useState } from 'react'
import Accordian from './Accordion/'


const accordOptions = [
  {
    id: 1, 
    title: "How can I track my order?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
  },
  {
    id: 2,
    title: "How do I request a replacement?",
    desc: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
  },
  {
    id: 3,
    title: "Are you open on the weekends?",
    desc: "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
  },
];


function App() {

  return (
    <>
      <Accordian accordOptions={accordOptions} />
    </>
  )
}

export default App
