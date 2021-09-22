import React from 'react'


const AvatarBar = () => {

    
    return (
            <div style={avatarButtonStyle}>
                    <i class="fa fa-bell" style={avatarBellStyle}></i>      

                    <i class="fa fa-user-circle" style={avatarUserStyle}></i>
            </div>
    )
}

const avatarButtonStyle = {
    // width: '91.6%',
    width: '100%',
    padding: '20px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'right',
    backgroundColor: '#fff',
}

const avatarBellStyle = {
    color: '#ccc',
    margin: '20px',
    fontSize: '36px',
}

const avatarUserStyle = {
    margin: '0 40px 0 0',
    color: '#ccc',
    fontSize: '36px',
}


export default AvatarBar