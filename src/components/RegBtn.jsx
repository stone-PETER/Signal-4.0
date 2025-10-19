import '../index.css'
import regIcon from '../assets/reg-btn-icon.png'

const RegBtn = () => {
  return (
    <button className="reg-btn-gradient px-8 py-2 rounded-[50px] text-white text-base font-semibold flex items-center gap-x-2">
        <h1>REGISTER NOW</h1>
        <img src={regIcon}/>
    </button>
  )
}
export default RegBtn