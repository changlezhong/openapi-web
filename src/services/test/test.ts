// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 测试GET请求 GET /openapi/test */
export async function testGetRequest(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.testGetRequestParams,
  options?: { [key: string]: any },
) {
  return request<API.SingleResponseListTestVO>('/openapi/test', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 测试POST请求 POST /openapi/test */
export async function testPostRequest(body: API.TestForm, options?: { [key: string]: any }) {
  return request<API.SingleResponseBoolean>('/openapi/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
