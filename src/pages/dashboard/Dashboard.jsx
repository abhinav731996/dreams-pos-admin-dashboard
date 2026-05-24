import Layout from '../../components/layout/Layout'
import SalesChart from '../../components/charts/SalesChart'

const Dashboard = () => {
  return (
    <Layout>
      <div className='row g-4'>
        <div className='col-md-3'>
          <div className='stat-card'>
            <h5>Total Sales</h5>
            <h2>$25,000</h2>
          </div>
        </div>

        <div className='col-md-3'>
          <div className='stat-card'>
            <h5>Orders</h5>
            <h2>1,200</h2>
          </div>
        </div>

        <div className='col-md-3'>
          <div className='stat-card'>
            <h5>Customers</h5>
            <h2>850</h2>
          </div>
        </div>

        <div className='col-md-3'>
          <div className='stat-card'>
            <h5>Revenue</h5>
            <h2>$12,000</h2>
          </div>
        </div>
      </div>

      <div className='chart-container mt-4'>
        <SalesChart />
      </div>
    </Layout>
  )
}

export default Dashboard
