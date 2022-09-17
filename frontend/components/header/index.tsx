import {
  MenuFoldOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useAppDispatch } from "../../hooks/reduxHook";
import { handleShowLogin } from "../../redux/slices/appSlice";
import { professions } from "../../utils/data";
import LoginModal from "../loginModal/LoginModal";
import SidebarMenu from "./SidebarMenu";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch()

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <header className="fixed select-none h-[70px] z-10 md:h-[75px] text-lg px-6 w-[100%] text-white flex items-center justify-between bg-primary"
      >
        <div className="flex items-center gap-5"
        >
          <div data-aos="fade-right" className="flex items-center gap-5">
            <div className="w-[58px] flex items-center">
              <img src="/images/white-logo.webp" className="w-[100%]" />
            </div>
            <button className="btn">
              <a href="#">Ажил байршуулах</a>
            </button>
          </div>

          <ul className="items-center gap-6 flex">
            <li className="dropdown hidden sm:flex lg:hidden">
              <p className="dropdown-link nav-link whitespace-nowrap">
                Дэлгэрэнгүйг үзэх <HiChevronDown className="drop-icon" />
              </p>
              {/* mega menu */}
              <div className="mega-menu">
                <div className="mega-menu-wrapper">
                  <div className="mega-menu-content">
                    <ul className="mega-menu-col">
                      <li className="mega-menu-header mega-menu-item">
                        Мэргэжилтэн олох
                      </li>
                      {professions.map((pro) => (
                        <li className="mega-menu-item" key={pro.slug}>
                          <Link href={"#"}>
                            <a className="mega-menu-link">{pro.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="mega-menu-col">
                      <li className="mega-menu-header mega-menu-item">
                        Мэргэжилтэн олох
                      </li>
                      {professions.map((pro) => (
                        <li className="mega-menu-item" key={pro.slug}>
                          <Link href={"#"}>
                            <a className="mega-menu-link">{pro.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* mega menu end */}
            </li>
            <li className="dropdown hidden lg:flex">
              <Link href="#">
                <a className="dropdown-link nav-link">
                  Мэргэжилтэн олох <HiChevronDown className="drop-icon" />
                </a>
              </Link>
              {/* mega menu */}
              <div className="mega-menu">
                <div className="mega-menu-wrapper">
                  <div className="mega-menu-content">
                    <ul className="flex border-r-2 border-color3 p-5 flex-col w-[256px] rounded-[20px] mr-5">
                      <li className="mega-menu-header mega-menu-item">
                        <Link href={"#"}>
                          <a>Мэргэжилтэн</a>
                        </Link>
                      </li>
                      <li>
                        <p>
                          Хэдхэн товшилтоор олон төрлийн загвар өмсөгч,
                          жүжигчид, нөлөөлөгчдийг хурдан олж, захиалаарай.
                        </p>
                      </li>
                      <button className="btn btn-2 my-5">
                        <Link href={"#"}>
                          <a>Ажил байршуулах</a>
                        </Link>
                      </button>
                      <button className="btn btn-1">
                        <Link href={"#"}>
                          <a>Мэргэжилтэн олох</a>
                        </Link>
                      </button>
                    </ul>
                    {professions.slice(0, 3).map((pro) => (
                      <ul
                        className='mega-menu-col ${index}'
                        key={pro.slug}
                      >
                        <li className="mega-menu-header mega-menu-item">
                          <Link href={"#"}>
                            <a>{pro.name}</a>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link href={"#"}>
                            <a className="mega-menu-link">{`Эрэгтэй ${pro.name}`}</a>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link href={"#"}>
                            <a className="mega-menu-link">{`Эмэгтэй ${pro.name}`}</a>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link href={"#"}>
                            <a className="mega-menu-link">{`Эрэгтэй ${pro.name}`}</a>
                          </Link>
                        </li>
                      </ul>
                    ))}
                    <ul
                      className='mega-menu-col hidden xl:block'
                    >
                      <li className="mega-menu-header mega-menu-item">
                        <Link href={"#"}>
                          <a>Видео & Гэрэл <br /> зураглаач</a>
                        </Link>
                      </li>
                      <li className="mega-menu-item">
                        <Link href={"#"}>
                          <a className="mega-menu-link">УБ дахь мэргэжилтэн</a>
                        </Link>
                      </li>
                      <li className="mega-menu-item">
                        <Link href={"#"}>
                          <a className="mega-menu-link">Дархан дахь мэргэжилтэн</a>
                        </Link>
                      </li>
                      <li className="mega-menu-item">
                        <Link href={"#"}>
                          <a className="mega-menu-link">Эрдэнэт дахь мэргэжилтэн</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* mega menu end */}
            </li>

            <li className="dropdown hidden lg:flex">
              <Link href="#">
                <a className="dropdown-link nav-link">
                  Ажил хайх <HiChevronDown className="drop-icon" />
                </a>
              </Link>
              {/* mega menu */}
              <div className="mega-menu">
                <div className="mega-menu-wrapper">
                  <div className="mega-menu-content">
                    <ul className="flex border-r-2 border-color3 p-5 flex-col w-[256px] rounded-[20px] mr-5">
                      <li className="mega-menu-header mega-menu-item">
                        <Link href={"#"}>
                          <a>Ажил олох</a>
                        </Link>
                      </li>
                      <li>
                        <p>
                          Ажилд орох хүсэлт гарган тарифаа тохируулаад Vivid-ээр шууд цалингаа аваарай!
                        </p>
                      </li>
                      <button className="btn btn-2 my-5">
                        <Link href={"#"}>
                          <a>Ажил байршуулах</a>
                        </Link>
                      </button>
                      <button className="btn btn-1">
                        <Link href={"#"}>
                          <a>Мэргэжилтэн харах</a>
                        </Link>
                      </button>
                    </ul>
                    {professions.slice(0, 3).map((pro) => (
                      <ul
                        className='mega-menu-col'
                        key={pro.slug}
                      >
                        <li className="mega-menu-header mega-menu-item">
                          <Link href={"#"}>
                            <a>{pro.name}</a>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link href={"#"}>
                            <a className="mega-menu-link">{`Эрэгтэй ${pro.name}`}</a>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link href={"#"}>
                            <a className="mega-menu-link">{`Эмэгтэй ${pro.name}`}</a>
                          </Link>
                        </li>
                      </ul>
                    ))}
                    <ul
                      className='mega-menu-col hidden xl:block'
                    >
                      <li className="mega-menu-header mega-menu-item">
                        <Link href={"#"}>
                          <a>Видео & Гэрэл <br /> зураглаач</a>
                        </Link>
                      </li>
                      <li className="mega-menu-item">
                        <Link href={"#"}>
                          <a className="mega-menu-link">УБ дахь ажил</a>
                        </Link>
                      </li>
                      <li className="mega-menu-item">
                        <Link href={"#"}>
                          <a className="mega-menu-link">Дархан дахь ажил</a>
                        </Link>
                      </li>
                      <li className="mega-menu-item">
                        <Link href={"#"}>
                          <a className="mega-menu-link">Эрдэнэт дахь ажил</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* mega menu end */}
            </li>
          </ul>
          <ul className="items-center gap-6 flex"
            data-aos="fade-up">
            {/* <Link href="#">
              <a className="nav-link hidden xxl:block">Why theright.ft?</a>
            </Link> */}
            <Link href="#">
              <a className="nav-link hidden xl:block">Ашиглах заавар</a>
            </Link>
            <Link href="#">
              <a className="nav-link hidden xxl:block">Мэдээ мэдээлэл</a>
            </Link>
          </ul>
        </div>

        <ul className="flex h-[70px] md:h-[75px] items-center gap-5"
          data-aos="fade-left"
        >
          <li className="md:hidden">
            <button
              className="clrCrad rounded-[20px] flex items-center justify-center w-[40px] h-[40px] text-white border-none"
              onClick={handleOpen}
            >
              <MenuFoldOutlined />
            </button>
          </li>
          <li className="hidden sm:flex">
            <Link href="#">
              <a className="nav-link h-[40px]">
                <QuestionCircleOutlined />
              </a>
            </Link>
          </li>
          <li className="md:flex hidden h-[100%]">
            <a className=" flex items-center h-[100%] px-7 clrCrad  gap-2 " onClick={()=>dispatch(handleShowLogin(true))}>
              <UserOutlined style={{ fontSize: "25px" }} />
              <p className="m-0">Бүртгүүлэх</p>
            </a>
          </li>
        </ul>
      </header>
      <Drawer
        title={"Title"}
        placement="right"
        closable={true}
        onClose={handleOpen}
        visible={open}
        className="z-50"
      >
        <SidebarMenu />
        {/* <LeftMenu mode={"inline"} />
        <RightMenu mode={"inline"} /> */}
      </Drawer>
    </nav>
  );
}

export default Header;
