
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/login/login","pages/analysis/analysis","pages/analysis/analysis2","pages/analysis/index","pages/customer/customer","pages/customer/customer2","pages/customer/customer3"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"食堂点餐系统","navigationBarBackgroundColor":"#3688FF","backgroundColor":"#F8F8F8"},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"CanteenOrdering-weapp","compilerVersion":"2.5.11","entryPagePath":"pages/analysis/index","entryPageQuery":"","realEntryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"食堂点餐系统"}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/analysis/analysis","meta":{},"window":{"navigationBarTitleText":"食堂分析"}},{"path":"/pages/analysis/analysis2","meta":{},"window":{"navigationBarTitleText":"食堂分析"}},{"path":"/pages/analysis/index","meta":{},"window":{"navigationBarTitleText":"食堂分析"}},{"path":"/pages/customer/customer","meta":{},"window":{"navigationBarTitleText":"用户中心"}},{"path":"/pages/customer/customer2","meta":{},"window":{"navigationBarTitleText":"用户中心"}},{"path":"/pages/customer/customer3","meta":{},"window":{"navigationBarTitleText":"用户中心"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
