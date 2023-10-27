import { NavLink, Link } from "react-router-dom"
import { useEffect, useRef } from "react"
// import logo from "../../assets/images/logo.png"
import userImg from "../../assets/images/avatar-icon.png"
import {BiMenu} from "react-icons/bi"

const navLinks = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/doctors",
    display:"Doctors"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/contact",
    display:"Contact"
  }
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader= () =>  {
    window.addEventListener("scroll", ()=> {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header")
      } else {
        headerRef.current.classList.remove("sticky_header")
      }
    })
  }

  useEffect(() => {
    handleStickyHeader();

    return() => window.removeEventListener("scroll", handleStickyHeader)

  }, [])

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu")

  return (
    <header className="header flex items-center" ref={headerRef} >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            {/* <img src={logo} alt="picture" /> */}
            <h1 className="font-bold text-2xl">Rayfield Medical</h1>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu} >
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={Link.path} className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600] " : "text-textColor text-[16px] leading-7 font-[500]"}>
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
              <div className="hidden">
                <Link>
                <figure className="cursor-pointer w-[35px] h-[35px] rounded-full">
                  <img src={userImg} alt="userimage" className="w-full rounded-full"/>
                </figure>
                </Link>
              </div>

              <Link to="/login">
                <button className=" bg-primaryColor flex items-center font-[600] text-white h-[44px] py-2 px-6 justify-center rounded-[50px] ">Login</button>
              </Link>

              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
              </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header