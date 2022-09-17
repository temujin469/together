import React, { useState } from 'react'
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { handleShowLogin } from '../../redux/slices/appSlice';
import Signin from './Signin';
import Register from './Register';



function LoginModal() {

  const { showLogin } = useAppSelector(state => state.app)
  const [show, setShow] = useState<"signin" | "register">("signin")

  const dispatch = useAppDispatch()

  const isShow = classNames({ "hidden": !showLogin })
  const handleShow = () => {
    return show === "signin" ? <Signin setShow={setShow} /> :
      show === "register" && <Register setShow={setShow} /> 
  }

  return (
    <div className={isShow}>
      <div className="absolute h-screen overflow-hidden bottom-0 z-[70] bg-black/60 w-full left-0 top-0" onClick={() => dispatch(handleShowLogin(false))}></div>
      {handleShow()}
    </div>

  )
}

export default LoginModal