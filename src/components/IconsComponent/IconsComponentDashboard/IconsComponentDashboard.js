import React from 'react'
import { FaHome, FaWallet } from 'react-icons/fa'
import { TbHelpSquareFilled } from 'react-icons/tb'
import { MdPayments } from "react-icons/md"
import { GoArrowSwitch } from "react-icons/go"

const IconsComponentDashboard = ({ icon, className = '' }) => {
    const selectIcon = () => {
        let element = <div></div>
        switch (icon) {
            case 'home':
                element = <FaHome className={className} />
                break;
            case 'payments':
                element = <MdPayments className={className} />
                break;
            case 'operations':
                element = <GoArrowSwitch className={className} color="white"/>
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