import Sider from "../components/common/Sider"
import MainPage from "../pages/MainPage"

const GlobalFile = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <MainPage />
        </div>
        <div>
          <Sider />
        </div>
      </div>
    </div>
  )
}

export default GlobalFile