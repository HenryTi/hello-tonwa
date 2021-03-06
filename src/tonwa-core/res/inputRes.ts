import { KeyValueRes, Res } from './res';

export interface InputRes extends KeyValueRes {
    required: string;
    number: string;
    integer: string;
    min: string;
    max: string;
}

/*eslint no-template-curly-in-string: 0*/
export const inputRes:Res<InputRes> = {
    _: {
        required: 'required',
        number: 'not valid number',
        integer: 'not valid integer',
        min: 'min value is ${min}',
        max: 'max value is ${max}',
    },
    zh: {
        _: {
            required: '必须填',
            number: '需要数字',
            integer: '需要整数',
            min: '不能小于${min}',
            max: '不能大于${max}',
        }
    },
}
