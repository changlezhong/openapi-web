// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 测试GET请求 GET /openapi/demo */
export async function demoGetRequest(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoGetRequestParams,
  options?: { [key: string]: any },
) {
  return request<API.SingleResponseListTestVO>('/openapi/demo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 测试POST请求 POST /openapi/demo */
export async function demoPostRequest(body: API.TestForm, options?: { [key: string]: any }) {
  return request<API.SingleResponseBoolean>('/openapi/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
