import React from 'react'
import './dashboard.css'
import cardStatus from '../assets/JsonData/status-card-data.json'
import StatusCrad from '../components/status-card/StatusCrad'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import customers_list from '../assets/JsonData/customers-list.json'

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const Dashboad = () => {

    return (
        <div>
            <div className='page-header'><h1>Dashboard</h1></div>
            <div className='row'>
                <div className='col-6'>
                    <div className='row'>
                        {
                            cardStatus.map((item, index) => {
                                return (
                                    <div className='col-6'>
                                        <StatusCrad
                                            icon={item.icon}
                                            title={item.title}
                                            count={item.count} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='col-6'>
                    <div className='card__chart'>
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card__customers'>
                        <div className='card__header'>
                            <h3>Top Customers</h3>
                        </div>
                        <div className='card__body'>
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)} />
                        </div>
                        <div className='card__footer'>
                            <Link to='/'>View ALL</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboad