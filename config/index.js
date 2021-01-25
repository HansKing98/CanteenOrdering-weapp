/**
 * ip地址或域名
 */
const ipAddress = 'https://way.jd.com'
// 文件访问地址
const fileAddr = 'http://localhost:8082/fileUpload/'
/**
 * api前缀
 */
const apiPrefix = '/apiUA'
/**
 * 针对不同平台的baseUrl
 */
const getBaseUrl = () => {
	// #ifdef H5
	return apiPrefix
	// #endif
	// #ifndef H5
	return ipAddress
	// #endif
}
const baseUrl = getBaseUrl()

export {
	/**
	 * 针对不同平台的baseUrl
	 */
	baseUrl,
	fileAddr
}
