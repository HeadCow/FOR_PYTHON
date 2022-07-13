import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
// react markdown插件
import ReactMarkdown from "react-markdown";
// markdown自动生成导航栏目
import MarkNav from 'markdown-navbar';
import {marked} from "marked";
import hljs from "highlight.js";
import {Col, Row, Breadcrumb, Affix} from "antd";
import {
	CalendarOutlined,
	FireOutlined,
	FolderOpenOutlined
} from "@ant-design/icons";

import Author from "../components/author";
import Advert from "../components/advert";
import Footer from "../components/footer";

import {reqArticleById} from "../api/api";

import '../../css/pages/detail.css'
import "markdown-navbar/dist/navbar.css";
import 'highlight.js/styles/monokai-sublime.css'

function Detail() {
	
	const renderer = new marked.Renderer();
	
	const {state:{id}} = useLocation();
	
	const [ article, setArticle ] = useState({});
	
	let markdown = '# P01:课程介绍和环境搭建\n' +
		'[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
		'> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
		'**这是加粗的文字**\n\n' +
		'*这是倾斜的文字*`\n\n' +
		'***这是斜体加粗的文字***\n\n' +
		'~~这是加删除线的文字~~ \n\n'+
		'# p02:来个Hello World 初始Vue3.0\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n'+
		'***\n\n\n' +
		'# p03:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n'+
		'# p04:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n'+
		'#5 p05:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n'+
		'# p06:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n'+
		'# p07:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n'+
		'``` var a=11; ```'
	
	marked.setOptions({
		renderer:renderer,
		gfm: true, // 类似github风格的markdown
		pedantic: false, // 是否严格匹配markdown格式
		sanitize: false, // 是否需要多媒体（视频，图片等）
		tables: true, // github表格样式
		breaks: false, // 是否支持github样式的换行符
		smartLists: true, // 是否自动渲染列表
		highlight: function (code) { // 代码高亮处理函数
			return hljs.highlightAuto(code).value; // 自动识别代码并高亮对应部分
		}
	})
	
	let html = marked(markdown);
	
	useEffect(() => {
		(async () => {
			const result = await reqArticleById(id);
			const {data} = result;
			console.log(data)
			// setArticle({
			// 	title: data.
			// })
		})();
	}, [])
	
	return (
		<div>
			<Row className='comm-main' type='flex' justify='center'>
				<Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
					<div>
						<div className='bread-div'>
							{/* 面包屑导航 */}
							<Breadcrumb>
								<Breadcrumb.Item><Link to='/home'>首页</Link></Breadcrumb.Item>
								<Breadcrumb.Item><Link to='/article'>文章列表</Link></Breadcrumb.Item>
								<Breadcrumb.Item>xxxx</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<div className='detail-title'>React实战教程（第1集）</div>
							<div className='list-icon center'>
								<span className='list-icon-content'><CalendarOutlined /> 2019-06-28</span>
								<span className='list-icon-content'><FolderOpenOutlined /> 视频教程</span>
								<span className='list-icon-content'><FireOutlined /> 5498人</span>
							</div>
							<div className='detail-content'
							     dangerouslySetInnerHTML={{__html:html}}
							>
								{/* <ReactMarkdown */}
								{/* 	escapeHtml={false} */}
								{/* > */}
								{/* 	{markdown} */}
								{/* </ReactMarkdown> */}
							</div>
						</div>
					</div>
				</Col>
				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
					<Affix offsetTop={5}>
						<div className='detail-nav comm-box'>
							<div className='nav-title'>文章目录</div>
							<div>
								<MarkNav
									className='article-menu'
									source={html}
									ordered={false}
								/>
							</div>
						</div>
					</Affix>
				</Col>
			</Row>
		</div>
	);
}

export default Detail;