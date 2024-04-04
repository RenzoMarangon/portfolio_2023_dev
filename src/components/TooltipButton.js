import React from 'react'
import { Tooltip } from '@mui/material'

export const TooltipButton = ( props ) => {
  return (
    <Tooltip title={props.title} placement={props.placement}>
        <button onClick={props.onClick}>
            <img src={props.icon} alt={props.alt} className="w-7 sm:w-6 rounded-full " />
        </button>
        
    </Tooltip>
  )
}
