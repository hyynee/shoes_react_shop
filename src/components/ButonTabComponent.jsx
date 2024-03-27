import React from 'react'
import { Avatar, Badge, Space } from 'antd';
import { NavLink } from 'react-router-dom';
export default function ButonTabComponent() {
    return (
        <div className='bg-dark text-white' style={{position: 'fixed',
            bottom: 0,
            left:0,
             width: '100%'   
        }}>
            <div className="row text-center">
                <div className="col-4">
                    <NavLink to='/profile'>
                        <Badge count={99}>
                            <i className='fa fa-user fs-3'></i>
                        </Badge>
                    </NavLink>

                </div>
                <div className="col-4">
                    <NavLink to='home'>
                        <Badge count={99}>
                            <i className='fa fa-home fs-3'></i>
                        </Badge>
                    </NavLink>

                </div>
                <div className="col-4">
                    <NavLink to='/login'>
                    <Badge count={99}>
                       <i className='fa fa-user-cog fs-3'></i>
                    </Badge>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
