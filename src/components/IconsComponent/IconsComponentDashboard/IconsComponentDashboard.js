import React from 'react'
import { FaUserAlt, FaHome, FaWallet } from 'react-icons/fa'
import { TbHelpSquareFilled } from 'react-icons/tb'

const IconsComponentDashboard = ({ icon, className = '' }) => {
    const selectIcon = () => {
        let element = <div></div>
        switch (icon) {
            case 'home':
                element = <FaHome className={className} />
                break;
            case 'user':
                element = <FaUserAlt className={className} />
                break;
            case 'wallet':
                element = <FaWallet className={className} />
                break;
            default:
                element = <TbHelpSquareFilled className={className} />
                break;
        }
        return element
    }

    return (
        selectIcon()
    )
}

export default IconsComponentDashboard