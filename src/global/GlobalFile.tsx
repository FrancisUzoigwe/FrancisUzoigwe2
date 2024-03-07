import { useDispatch } from "react-redux"
import SlidingSider from "../components/common/SlidingSider"
import MainPage from "../pages/MainPage"
import { changedToggled } from "./globalState"

const GlobalFile = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="flex w-full justify-between" onClick={() => {
        dispatch(changedToggled())
      }}>
        <div className="w-full relative">
          <MainPage />
        </div>
        <div className="">
          <SlidingSider />
        </div>
      </div>
    </div>
  )
}

export default GlobalFile