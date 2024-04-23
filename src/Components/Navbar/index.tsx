import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
const Navbar: React.FC = () => {
  const explore: MenuProps["items"] = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.hyperaschain.com/technology/architecture"
        >
          Hyperaschain Layer 1
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.hyperaschain.com/general/ecosystem"
        >
          Hyperaschain Ecosystem
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.hyperaschain.com/general/presskit"
        >
          Presskit
        </a>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
  ];
  const applications: MenuProps["items"] = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://salala.io/">
          Salala
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://egabid.com/">
          Egabid
        </a>
      ),
      key: "1",
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
    },
    {
      type: "divider",
    },
  ];
  const foundation: MenuProps["items"] = [
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
  const community: MenuProps["items"] = [
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
      type: "divider",
    },
  ];
  return (
    <section className="animate-fadeInDown manrope">
      <nav className="container mx-auto py-[16px] flex justify-between items-center animate-fadeInDown">
        <img className="" src="./Img/Logo.png" alt="Logo" />
        <div className="">
          <ul className="flex text-[#270017] text-[14px] font-normal justify-between items-center gap-10">
            <Dropdown menu={{ items: explore }}>
              <Space>
                Explore
                <DownOutlined />
              </Space>
            </Dropdown>
            <Dropdown menu={{ items: applications }}>
              <Space>
                Applications
                <DownOutlined />
              </Space>
            </Dropdown>
            <Dropdown menu={{ items: foundation }}>
              <Space>
                Foundation
                <DownOutlined />
              </Space>
            </Dropdown>
            <Dropdown menu={{ items: community }}>
              <Space>
                Community
                <DownOutlined />
              </Space>
            </Dropdown>
          </ul>
        </div>
        <button className="w-32 h-10 px-5 py-2 gap-2 rounded-[4px]  border border-solid border-[#EC008C] text-[#EC008C] text-[14px]">
          Get Started
        </button>
      </nav>
    </section>
  );
};

export default Navbar;