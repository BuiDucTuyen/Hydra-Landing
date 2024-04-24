import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
const Navbar: React.FC = () => {
  const { t } = useTranslation();
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
            <Dropdown className="text-[16px] clash  " menu={{ items: explore }}>
              <Space>
                {t("explore")}
                <img src="../svg/direction-down 01.svg" alt="" />
              </Space>
            </Dropdown>
            <Dropdown
              className="text-[16px] clash"
              menu={{ items: applications }}
            >
              <Space>
                {t("applications")}
                <img src="../svg/direction-down 01.svg" alt="" />
              </Space>
            </Dropdown>
            <Dropdown
              className="text-[16px] clash"
              menu={{ items: foundation }}
            >
              <Space>
                {t("Foundation")}
                <img src="../svg/direction-down 01.svg" alt="" />
              </Space>
            </Dropdown>
            <Dropdown className="text-[16px] clash" menu={{ items: community }}>
              <Space>
                {t("Community")}
                <img src="../svg/direction-down 01.svg" alt="" />
              </Space>
            </Dropdown>
          </ul>
        </div>
        <button className="w-32 font-medium h-10 px-5 py-2 gap-2 rounded-[4px] border border-solid border-[#EC008C] text-[#EC008C] text-[14px]">
          {t("Get")}
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
