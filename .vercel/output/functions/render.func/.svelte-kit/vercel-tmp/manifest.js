export const manifest = {
	appDir: "_app",
	assets: new Set(["blog.png","dots.svg","express.png","favicon.png","htmlcss.png","js.png","menubutton.svg","mongo.png","nodejs.png","person.png","react.png","sucess.png","wine.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-55b59e9f.js","js":["start-55b59e9f.js","chunks/index-a7bc1a45.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "create",
				pattern: /^\/create\/?$/,
				names: [],
				types: [],
				path: "/create",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "sucess",
				pattern: /^\/sucess\/?$/,
				names: [],
				types: [],
				path: "/sucess",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
