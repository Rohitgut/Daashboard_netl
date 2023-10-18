import Sidebar from "../components/Sidebar";
import ProductCardForm from "../components/ProductCardForm";
import ContainerView from "../components/ContainerView";
import CustomerContainer from "../components/CustomerContainer";
import ContainerSummary from "../components/ContainerSummary";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-menu">
        <ProductCardForm />
        <ContainerView />
        <CustomerContainer />
        <div className="earning">
          <img className="earning-child" alt="" src="/rectangle-15.svg" />
          <ContainerSummary />
        </div>
        <div className="search">
        <div className="search-child" />
        <input 
          type="text"
          className="search1"
          placeholder="Search"
        />
        <button type="submit" className="search-button">
          <img className="search-1-icon" alt="" src="/search-1.svg" />
        </button>
      </div>

        <div className="hello-evano">Hello Rohit 👋🏼,</div>
      </div>
    </div>
  );
};

export default Dashboard;
