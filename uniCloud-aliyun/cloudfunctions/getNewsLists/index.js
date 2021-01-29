'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const apiUrl = 'https://way.jd.com/jisuapi/newSearch?keyword=食品安全&appkey=9e30d6f6ad3cf21352030e4fa9512ca7'
	const res = await uniCloud.httpclient.request(apiUrl, {
		method: 'GET',
		contentType: 'json', // 指定以application/json发送data内的数据
		dataType: 'json' // 指定返回值为json格式，自动进行parse
	})
	const collection = db.collection('zdd_news')

	// console.log('list:', res.data.result.result.list)


	res.data.result.result.list.forEach((el) => {
		// if (!count) {
			try{
				collection.add(el)
			}catch(e){
				// console.log('err',e)
			}
		// }
		// console.log('ress', ress)
	})

	return res.data.result.result
};
