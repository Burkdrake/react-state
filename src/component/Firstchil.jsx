
import Secondchil from './Secondchil'

const Firstchil = (passData) => {
    const[count , setCount] = useState(0)
  return (
    <div><h1>Firstchild</h1>
    <Secondchil secondPass={passData} />
    </div>
  )
}

export default Firstchil