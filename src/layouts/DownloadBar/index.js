import React from 'react'
import Button from '../../components/button'


const DownloadBar = () => {

    
    return (
            <div style={downloadNavStyle}>
                <div style={downloadLossIconStyle}>
                    <i class="fa" style={downloadIconStyle}>&#xf15c;</i>
                    <h5>Download Job Loss Policy Document</h5>
                </div>
                <div style={downloadButtonStyle}>
                        <Button style={downloadButtonColorStyle}>Download</Button>        
                </div>
            </div>
    )
}

const downloadNavStyle = {
    // width: '93.5%',
    width: '100%',
    margin: '20px 0',
    padding: '10px',
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
}

const downloadLossIconStyle = {
    width: '450px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const downloadIconStyle = {
    color: '#eee',
    fontSize: '48px',
}

const downloadButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
}

const downloadButtonColorStyle = {
    width: '200px',
    height: '40px',
    backgroundColor: '#00B49B',
}

export default DownloadBar