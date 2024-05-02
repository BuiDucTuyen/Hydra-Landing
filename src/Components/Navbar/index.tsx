import React, { useState } from "react";
import { Dropdown, Space, Menu } from "antd";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const exploreMenu = [
    {
      key: "0",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.hyperaschain.com/technology/architecture"
        >
          Hyperaschain Layer 1
        </a>
      ),
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.hyperaschain.com/general/ecosystem"
        >
          Hyperaschain Ecosystem
        </a>
      ),
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.hyperaschain.com/general/presskit"
        >
          Presskit
        </a>
      ),
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      key: "divider",
      type: "divider",
    },
  ];

  const applicationsMenu = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://salala.io/">
          Salala
        </a>
      ),
      key: "0",
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://egabid.com/">
          Egabid
        </a>
      ),
      key: "1",
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pindias.com/"
        >
          Pindias
        </a>
      ),
      key: "2",
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hyperaschain.com/stake"
        >
          Staking
        </a>
      ),
      key: "3",
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://testnet.hyrascan.com/"
        >
          Scan
        </a>
      ),
      key: "4",
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hyperaschain.com/swap"
        >
          Swap
        </a>
      ),
      key: "5",
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hyperaschain.com/bridge"
        >
          Bridge
        </a>
      ),
      key: "6",
      onClick: () => setMenuOpen(false), // Đóng menu khi mục được nhấp
    },
    {
      key: "divider",
      type: "divider",
    },
  ];

  const foundationMenu = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.hyperaschain.com/developers"
        >
          Hyperas Program
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/@Hyperaschain"
        >
          Video Tutorials
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hyperaschain.com/news"
        >
          Blog
        </a>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
  ];

  const communityMenu = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/hyperaschaingroup"
        >
          Hyperas Global Group
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/hyperaschaingroup"
        >
          Hyperas Vietnam group
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/hyperaschain"
        >
          Hyperaschain Facebook
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/hyperaschain"
        >
          Hyperaschain X
        </a>
      ),
      key: "3",
    },
    {
      label: <span>Salala community</span>,
      key: "4",
    },
    {
      label: <span>Egabid community</span>,
      key: "5",
    },
    {
      type: "divider",
    },
  ];

  return (
    <section className="animate-fadeInDown manrope">
      <nav className="container mx-auto py-[16px] px-4 flex justify-between items-center animate-fadeInDown">
        <img className="" src="./Img/Logo.png" alt="Logo" />
        <div className="hidden lg:block">
          <ul className="flex text-[#270017] text-[14px] justify-between items-center gap-10">
            <Dropdown
              className="text-[16px] hover:text-pink-400"
              overlay={
                <Menu>
                  {exploreMenu.map((item) => (
                    <Menu.Item key={item.key} onClick={item.onClick}>
                      {item.label}
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
            >
              <Space>
                {t("explore")}
                <img src="../svg/direction-down 01.svg" alt="" />
              </Space>
            </Dropdown>
            <Dropdown
              className="text-[16px] hover:text-pink-400"
              overlay={
                <Menu>
                  {applicationsMenu.map((item) => (
                    <Menu.Item key={item.key} onClick={item.onClick}>
                      {item.label}
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
            >
              <Space>
                {t("applications")}
                <img src="../svg/direction-down 01.svg" alt="" />
              </Space>
            </Dropdown>
            <Dropdown
              className="text-[16px] hover:text-pink-400"
              overlay={
                <Menu>
                  {foundationMenu.map((item) => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
            >
              <Space>
                {t("Foundation")}
                <img src="../svg/direction-down 01.svg" alt="" />
              </Space>
            </Dropdown>
            <Dropdown
              className="text-[16px] hover:text-pink-400"
              overlay={
                <Menu>
                  {communityMenu.map((item) => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
            >
              <Space>
                {t("Community")}
                <img src="../svg/direction-down 01.svg" alt="" />
              </Space>
            </Dropdown>
          </ul>
        </div>
        <button className="w-32 hidden lg:block font-medium h-10 px-5 py-2 gap-2 rounded-[4px] border border-solid border-[#EC008C] text-[#EC008C] text-[14px]">
          {t("Get")}
        </button>
        <div className={`lg:hidden ${menuOpen ? "hidden" : ""}`}>
          <button
            className="navbar-burger flex items-center text-white p-3"
            onClick={toggleMenu}
          >
            <img src="../Img/Frame 3072.png" alt="Menu" />
          </button>
        </div>
        <div
          className={`navbar-menu ${menuOpen ? "" : "hidden"}`}
          style={{ zIndex: 1000 }}
        >
          <div
            className="navbar-backdrop fixed inset-0 bg-neutral-950 opacity-25"
            onClick={toggleMenu}
          ></div>
          <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-blue-50 border-r overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <img src="../svg/Group 1.svg" alt="" />
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col text-[#270017] text-[14px] justify-center items-center gap-7">
              <Dropdown
                className="text-[16px] hover:text-pink-400"
                overlay={
                  <Menu>
                    {exploreMenu.map((item) => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["click"]}
              >
                <Space>
                  {t("explore")}
                  <img src="../svg/direction-down 01.svg" alt="" />
                </Space>
              </Dropdown>
              <Dropdown
                className="text-[16px] hover:text-pink-400"
                overlay={
                  <Menu>
                    {applicationsMenu.map((item) => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["click"]}
              >
                <Space>
                  {t("applications")}
                  <img src="../svg/direction-down 01.svg" alt="" />
                </Space>
              </Dropdown>
              <Dropdown
                className="text-[16px] hover:text-pink-400"
                overlay={
                  <Menu>
                    {foundationMenu.map((item) => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["click"]}
              >
                <Space>
                  {t("Foundation")}
                  <img src="../svg/direction-down 01.svg" alt="" />
                </Space>
              </Dropdown>
              <Dropdown
                className="text-[16px] hover:text-pink-400"
                overlay={
                  <Menu>
                    {communityMenu.map((item) => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["click"]}
              >
                <Space>
                  {t("Community")}
                  <img src="../svg/direction-down 01.svg" alt="" />
                </Space>
              </Dropdown>
              <button className="w-32 font-medium h-10 px-5 py-2 gap-2 rounded-[4px] border border-solid border-[#EC008C] text-[#EC008C] text-[14px]">
                {t("Get")}
              </button>
            </ul>
          </nav>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
