import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-menu">
      <div className="side-menu-child" />
      {/* <div className="side-menu-item" /> */}

      <Link to="/">
      <div className="list-menu">
        
        <img
          className="icon-24-outline-key-squa"
          alt=""
          src="/icon--24--outline--keysquare.svg"
        />
        <div className="dashboard1">Dashboard</div>
        <img
          className="chevron-right-2-icon"
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      </Link>
      <Link to="#prduct">
      <div className="list-menu1">
      
        <img
          className="icon-24-outline-key-squa"
          alt=""
          src="/3dsquare-1.svg"
        />
        <div className="product">Product</div>
        <img
          className="chevron-right-2-icon"
          alt=""
          src="/chevronright-2.svg"
        />
        
      </div>
      </Link>
      <Link to="#customer">
      <div className="list-menu2">
        <img
          className="icon-24-outline-key-squa"
          alt=""
          src="/usersquare-1.svg"
        />
        <div className="product">Customers</div>
        <img
          className="chevron-right-2-icon"
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      </Link>
      <Link to="#income">
      <div className="list-menu3">
        <img
          className="icon-24-outline-key-squa"
          alt=""
          src="/walletmoney-2.svg"
        />
        <div className="product">Income</div>
        <img
          className="chevron-right-2-icon"
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      </Link>
      <Link to="#promote">
      <div className="list-menu4">
        <img
          className="icon-24-outline-key-squa"
          alt=""
          src="/discountshape-1.svg"
        />
        <div className="product">Promote</div>
        <img
          className="chevron-right-2-icon"
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      </Link>
      <Link to="#help">
      <div className="list-menu5">
        <img
          className="icon-24-outline-key-squa"
          alt=""
          src="/messagequestion-1.svg"
        />
        <div className="product">Help</div>
        <img
          className="chevron-right-2-icon"
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      </Link>
      <img className="side-menu-inner" alt="" src="/ellipse-8@2x.png" />
      <div className="evano-parent">
        <div className="evano">Rohit</div>
        <div className="project-manager">Project Manager</div>
      </div>
      <img className="chevron-down-2-icon" alt="" src="/chevrondown-2.svg" />
      
      <div className="dashboard-parent">
        <div className="dashboard2">Dashboard</div>
        <img className="setting-1-icon" alt="" src="/setting-1.svg" />
      </div>
      
    </div>
  );
};

export default Sidebar;
