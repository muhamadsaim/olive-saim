import React, {useState} from 'react'
import './Style.scss'
import { Helmet } from 'react-helmet-async'
import Theme from '../../Theme/Theme';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cards from '../../Components/Common/TopCards/Cards';
import ProductionGraph from '../../Components/Common/ProductionGraphsTwo';
import Search from '../../assets/icons/search.png'
import CustomerTable from './Table/index';
import CustomerForm from './CustomerForm/index';
import CustomSearchInput from '../../Components/Common/customSearch';

const CustomerManagement = () => {
  const { t } = useTranslation();
  const lightTheme = Theme();
  const [searchBar, setSearchBar] = useState();
  const[showForm,setShowForm]=useState(false)
  return (
    <div>
      <Helmet>
        <title>Customer Management</title>
        <meta name="Customer Management" content="This is a Customer Management page" />
      </Helmet>
      <div className="customerManagement">
        <div className="createCustomerDiv">
          <p className="p1" style={{ color: `${lightTheme.blackText}` }}>
            {t("Mills.1")}
          </p>
          <Link to="create-customer" className="p2" onClick={() => setShowForm(true)}>+ Create New Customer</Link>
        </div>
          {
            showForm && <div>
              <CustomerForm setShowForm={setShowForm}/>
            </div>
          }
        <Cards />
        <ProductionGraph />
        <div className='customerTable'>
          <p className='p1'>Customers</p>
          {/* <div className="searchDiv">
          <img src={Search} alt="search" height={20} />
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchBar(e.target.value)}
          />
          </div> */}
          <CustomSearchInput placeholder="search customer" onSearchChange={setSearchBar} iconShow={true}/>
        </div>
        <CustomerTable searchBar={searchBar} />
      </div>
      {/* <Outlet/> */}
    </div>
  )
}

export default CustomerManagement