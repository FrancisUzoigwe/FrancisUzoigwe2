import SlidingSider from "../components/common/SlidingSider"
import MainPage from "../pages/MainPage"

const GlobalFile = () => {
  return (
    <div>
      <div className="flex w-full justify-between">
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