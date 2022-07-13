import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Row, Col, List} from "antd";
import {
	CalendarOutlined,
	FolderOpenOutlined,
	FireOutlined
} from '@ant-design/icons';

import Author from "../components/author";
import Advert from "../components/advert";

import {reqArticleList} from "../api/api";

function Article() {
	
	const [ myList , setMyList ] = useState(
		[]
	)
	
	// componentDidMount
	useEffect( () => {
		(async function getResult() {
			const result = await reqArticleList();
			setMyList(result.data.map((item) => {
				return {
					id: item.id,
					title: item.title,
					context: item.introduction,
					createTime: item.add_time,
					typeName: item.type_name,
					viewCount: item.view_count,
				}
			}))
		})();
	}, [])
	
	return (
		<div>
			<Row className='comm-main' type='flex' justify='center'>
				<Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14} >
					<List
						header={<div>最新日志</div>}
						itemLayout='vertical'
						dataSource={myList}
						renderItem={item => (
							<List.Item>
								<div className="list-title">
									<Link to='/detail' state={{id: item.id}}>
										{item.title}
									</Link>
								</div>
								<div className="list-icon">
									<span className='list-icon-content'><CalendarOutlined /> {item.createTime}</span>
									<span className='list-icon-content'><FolderOpenOutlined /> {item.typeName}</span>
									<span className='list-icon-content'><FireOutlined /> {item.viewCount}人</span>
								</div>
								<div className="list-context">{item.context}</div>
							</List.Item>
						)}
					/>
				</Col>
				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
				</Col>
			</Row>
		</div>
	);
}

export default Article;