import React from 'react'
import { Tooltip } from '@mui/material'

export const TooltipButton = ( props ) => {
  return (
    <Tooltip title={props.title} placement={props.placement}>
      <img src={props.icon} alt={props.alt} className="w-7 sm:w-6 rounded-full " />
    </Tooltip>
  )
}
