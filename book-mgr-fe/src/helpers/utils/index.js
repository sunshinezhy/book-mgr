import { message } from 'ant-design-vue';

export const result = (response,authShowErrorMsg = true) => {
    const { data } = response;

    if ((data.code === 0) && authShowErrorMsg){
        message.error(data.msg);
    }

    return {

        // 成功时做的事情
        success(cb) {
            if (data.code !== 0) {
                cb(data, response);
            }

            return this;
        },
        // 失败时做的事情
        fail(cb) {
            if (data.code === 0) {
                cb(data, response);
            }

            return this;
        },
        // 不管成功还是失败都做的事情
        finally(cb) {
                cb(data, response);

                return this;
        },
    };
};