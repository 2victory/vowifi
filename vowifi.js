// modify-wificalling.js
// 将返回的地区字段替换为 US

let obj = JSON.parse($response.body);

// 根据 Apple Wi-Fi 通话请求的 JSON 返回结构，替换区域为 'US'
obj.region = "US";

// 输出修改后的 JSON 响应
$done({ body: JSON.stringify(obj) });
