'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('zdd_news')
	let pageSize = event.pageSize
	let page = event.page
	console.log('page:', page, 'size:', pageSize)

	let count = await collection.count()
	count = count.total
	let begin = page * pageSize
	
	console.log('count:', count, 'begin:', begin)

	let res
	if (page * pageSize < count) {
		res = await collection.orderBy("time", "desc").skip(begin).limit(pageSize).get()
	} else {
		res = await collection.orderBy("time", "desc").skip(page * pageSize).get()
	}
	return res
};
