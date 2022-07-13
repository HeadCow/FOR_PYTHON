import React from "react";
import {Link} from 'react-router-dom';
import {
	Row,
	Col,
	Menu,
} from 'antd';
import {
	HomeOutlined,
	FileTextOutlined,
	SmileOutlined
} from '@ant-design/icons'

import '../../css/components/header.css'

const Header = () => {
	
	return (
		<div className='header'>
			<Row type='flex' justify='center' align='middle'>
				<Col className='header-left' xs={24} sm={24} md={15} lg={15} xl={12} >
					<span className='header-left-logo'>金牛座</span>
					<span className='header-left-text'>这个博客正在建设中～</span>
				</Col>
				<Col className='header-right' xs={0} sm={0} md={14} lg={8} xl={6} >
					<Menu className='header-right-menu' mode='horizontal'>
						<Menu.Item key='home'>
							<HomeOutlined className='header-right-menu-icon' />
							<Link to='/home'><span>首页</span></Link>
						</Menu.Item>
						<Menu.Item key='video'>
							<FileTextOutlined className='header-right-menu-icon' />
							<Link to='/article'><span>文章</span></Link>
						</Menu.Item>
						<Menu.Item key='life'>
							<SmileOutlined className='header-right-menu-icon' />
							<Link to='/life'><span>生活</span></Link>
						</Menu.Item>
					</Menu>
				</Col>
			</Row>
		</div>
	)
}

export default Header;
