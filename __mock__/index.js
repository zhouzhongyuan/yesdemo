import  * as data  from './data';

export default {
    'http://192.168.1.116:8089/yigo/servlet' : ({ method, url, params, urlparams, headers }) => {
        let fileName = `${params.service}${params.cmd ? '_' + params.cmd : '' }${params.itemKey ? '_' + params.itemKey : '' }${params.formKey ? '_' + params.formKey : '' }${params.oid ? '_' + params.oid : '' }${params.OID ? '_' + params.OID : '' }`;
        fileName = fileName.replace('-','minus');
        return Promise.resolve({
            json:function () {
                return data[fileName].value;
            }
        });

    },

}