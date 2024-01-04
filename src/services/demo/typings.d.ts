declare namespace API {
  type demoGetRequestParams = {
    /** id */
    id: string;
    /** demo 名称 */
    name: string;
  };

  type SingleResponseBoolean = {
    /** 是否成功 */
    success?: boolean;
    /** 错误编码 */
    errCode?: string;
    /** 错误信息 */
    errMessage?: string;
    /** 数据 */
    data?: boolean;
  };

  type SingleResponseListTestVO = {
    /** 是否成功 */
    success?: boolean;
    /** 错误编码 */
    errCode?: string;
    /** 错误信息 */
    errMessage?: string;
    /** 数据 */
    data?: TestVO[];
  };

  type TestForm = {
    /** test id */
    testId?: string;
    /** test 名称 */
    testName?: string;
  };

  type TestVO = {
    /** test id */
    testId?: string;
    /** test 名称 */
    testName?: string;
  };
}
