import { FA, LMR, VPage } from "tonwa";
import { CHome } from "./CHome";
import logo from '../logo.svg';
import '../App.css';
import { CCustomer } from "ids/customer";
import { CApp, CUqBase } from "uq-app";

interface Row {
	caption: string;
	controller: new (cApp: CApp) => CUqBase;
}
export class VHome extends VPage<CHome> {
	private rows: Row[] = [
		{
			caption: '客户管理',
			controller: CCustomer,
		},
		{
			caption: '客户管理',
			controller: CCustomer,
		},
	];

	private items: string[] = [
		'在服务器端创建 app',
		'创建 uq 编程单元',
		'uq 关联 app',
		'uq 绑定数据库服务',
		'编写 uq 代码',
		'提交 uq 编译生成数据库',
		'在 src/appConfig.ts 设置 uqs',
		'在 vs code 调试环境运行Build UqApp，生成uq typescript interface',
		'调用 uq 接口，读写数据',
	];
	header() { return '首页' }
	content() {
		return <div className="App">
			<div className="mt-2">
				{this.rows.map((v, index) => {
					let { caption, controller } = v;
					return <LMR key={index}
						className="cursor-pointer py-2 px-3 bg-white border-bottom justify-content-start"
						left={<div><FA className="me-3 text-primary" name="hand-o-right" fixWidth={true} />{caption}</div>}
						right={<FA name="angle-right" />}
						onClick={() => this.controller.startController(controller)}>
					</LMR>;
				})}
			</div>

			<header className="App-header">
				<p>
					<span className="text-success">tonwa</span> + <span className="text-primary">uq</span> = UI + DB
				</p>
				<div className="mb-3 h6 text-warning">
					编程
					<FA name="handshake-o" size="lg" className="text-danger mx-2" />
					开心
				</div>
			</header>
			<div className="border px-3 py-3 bg-white d-flex align-items-start">
				<button className="btn btn-primary me-3"
					onClick={this.controller.showUqTest}>测试UQ操作</button>
			</div>
			<div className="border px-3 py-3 bg-white d-flex align-items-start">
				<button className="btn btn-primary me-3"
					onClick={this.controller.showTestPage1}>测试页1</button>
				<button className="btn btn-success me-3"
					onClick={this.controller.showTestPage2}>测试页2</button>
				<button className="btn btn-danger me-3"
					onClick={this.controller.showTestPage3}>测试页3</button>
			</div>
			<img src={logo} className="App-logo" alt="logo" />
			<ul className="text-left my-3 mr-3">
				{this.items.map((v, index) => <li key={index} className="my-2">{v}</li>)}
			</ul>
		</div>;
	}
}