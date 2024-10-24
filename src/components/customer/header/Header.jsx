import { Layout } from "antd";
import { Icon } from "@iconify/react";
import "./Header.css";

const { Header } = Layout;

function HeaderAdmin() {
  return (
    <Header className="header">
      <div className="header-logo">
        <img src="https://placehold.co/340x64?text=LOGO" alt="" />
      </div>
      <div className="header-container">
        <div className="header-left">
          <Icon className="header-left__icon" icon="ph:list-bold" />
          <div className="header-left-search">
            <Icon
              className="header-left-search__icon"
              icon="material-symbols:search"
            />
            <input
              className="header-search__input"
              type="text"
              placeholder="Search projects"
            />
          </div>
        </div>
        <div className="header-right">
          <div className="header-profile">
            <img
              className="header-profile__img"
              src="https://placehold.co/100x100?text=NoImage"
              alt=""
            />
            <p className="header-profile__name">User</p>
            <Icon className="header-profile__icon" icon="lsicon:down-filled" />
          </div>
          <div className="header-actions">
            <Icon className="header-actions_icon" icon="mdi-light:bell" />
            <Icon className="header-actions_icon" icon="uiw:mail-o" />
            <Icon
              className="header-actions_icon"
              icon="gridicons:user-circle"
            />
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderAdmin;
