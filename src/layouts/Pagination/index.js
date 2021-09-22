import React from 'react'


const Pagination = () => {

    
    return (
            <div style={paginationNavStyle}>
                <div style={paginationShowItemStyle}>
                    <p style={paginationItemColorStyle}>Show</p>
                    <p style={paginationItemStyle}>11</p>
                    <p style={paginationItemColorStyle}>from</p>
                    <p style={paginationItemStyle}>36</p>
                    <p style={paginationItemColorStyle}>Items</p>
                </div>
                <div style={paginationButtonStyle}>
                    <i class="fa fa-angle-left"></i>
                    <button style={paginationButtonActiveStyle}>1</button>
                    <button style={paginationButtonOtherStyle}>2</button>
                    <button style={paginationButtonOtherStyle}>3</button>
                    <i class="fa fa-angle-right"></i>
                </div>
            </div>
    )
}

const paginationNavStyle = {
    // width: '93.8%',
    width: '100%',
    padding: '5px',
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
}

const paginationShowItemStyle = {
    width: '300px',
    display: 'flex',
    padding: '10px',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '13px',
    justifyContent: 'left',
}

const paginationItemStyle = {
    margin: '3px',
}

const paginationItemColorStyle = {
    margin: '3px',
    color: 'grey',
}

const paginationButtonStyle = {
    display: 'flex',
    padding: '40px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'right',
}

const paginationButtonActiveStyle = {
    margin: '10px',
    color: '#E48952',
    border: 'none',
    padding: '8px',
    background: 'transparent',
    backgroundColor: 'pink',
}

const paginationButtonOtherStyle = {
    margin: '10px',
    border: 'none',
    padding: '10px',
    background: 'transparent',
}

export default Pagination