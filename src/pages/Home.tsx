import { Link } from 'react-router-dom'
import '../index.css'
function Home() {
  return (
    <div>
      <Link to='/product?article=34934934' className='link'>Кросовки здесь</Link>
    </div>
  )
}

export default Home
