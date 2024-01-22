import React from "react";

import "./index.css"

export const Footer: React.FC = () => {
  return (
    <div className="navigation-avatar" onClick={() => window.open("https://www.vk.com/u_cantfindme", '_blank')}>
      Александр Молитвин
    </div>
  )
}
