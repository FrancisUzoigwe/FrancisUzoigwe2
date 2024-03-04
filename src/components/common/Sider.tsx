import { useState } from "react"

const Sider = () => {

  const [siderScroll, setSiderScroll] = useState<boolean>(false)
  const onScroll = () => {
    if (window.scrollY <= 0) {
      setSiderScroll(true)
    } else {
      setSiderScroll(false)
    }
  }

  window.addEventListener("scroll", onScroll)
  return (
    <div>
      {siderScroll ? <div className="fixed bottom-0 right-0 h-[calc(100vh-0px)] bg-[green] w-[120px] flex flex-col items-center">Sider</div> : null}
    </div>
  )
}

export default Sider