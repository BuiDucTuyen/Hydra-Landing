import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
const Navbar: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
  ];
  return (
    <section className="animate-fadeInDown ">
      <nav className="container mx-auto py-[16px] flex justify-between items-center animate-fadeInDown">
        <img className="" src="./Img/Logo.png" alt="Logo" />
        <div className="">
          <ul className="flex text-[#270017] text-[14px] font-normal justify-between items-center gap-10">
            <Dropdown menu={{ items }}>
              <Space>
                Explore
                <DownOutlined />
              </Space>
            </Dropdown>
            <Dropdown menu={{ items }}>
              <Space>
                Applications
                <DownOutlined />
              </Space>
            </Dropdown>
            <Dropdown menu={{ items }}>
              <Space>
                Foundation
                <DownOutlined />
              </Space>
            </Dropdown>
            <Dropdown menu={{ items }}>
              <Space>
                Community
                <DownOutlined />
              </Space>
            </Dropdown>
          </ul>
        </div>
        <button className="w-32 h-10 px-5 py-2 gap-2 rounded-[4px]  border border-solid border-[#EC008C] text-[#EC008C] text-[16px]">
          Get Started
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
