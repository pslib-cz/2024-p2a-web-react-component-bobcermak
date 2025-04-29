import PercentView from "./PercentView"

//Stav se nemění narozdíl od hooks -> mimo Componentu
const makeColor = (percentNum: number): string => {
  const hue: number = (percentNum / 100) * 120
  return `hsl(${hue}, 100%, 35%)`
}
const App = () => {
  return (
    <>
      <PercentView value = {20} max = {100} makeColor={makeColor}/>
      <PercentView value = {20} max = {20} makeColor={makeColor}/>
      <PercentView value = {25} max = {50} makeColor={makeColor}/>
    </>
  )
}
export default App