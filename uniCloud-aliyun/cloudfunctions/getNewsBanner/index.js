'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('unicloud-test')
	// const res = await collection.limit(10).get()
	const apiUrl = 'https://way.jd.com/jisuapi/get?channel=健康&num=1&start=0&appkey=9e30d6f6ad3cf21352030e4fa9512ca7'
	const res = await uniCloud.httpclient.request(apiUrl, {
	    method: 'GET',
	    contentType: 'json', // 指定以application/json发送data内的数据
	    dataType: 'json' // 指定返回值为json格式，自动进行parse
	  })
	// console.log(res.data.result.result)
	return res.data.result.result
};
