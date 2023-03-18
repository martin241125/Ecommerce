import React from "react"

const Button = (props) => {
  return (
    <button className="bg-red-600 font-bold text-black font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-red-400 hover:text-white duration-500">
       {props.children}
    </button>
  )
}

export default Button