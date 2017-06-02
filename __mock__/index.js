import  * as data  from './data';

export default {
    'http://192.168.1.116:8089/yigo/servlet' : ({ method, url, params, urlparams, headers }) => {
        let fileName = `${params.service}${params.cmd ? '_' + params.cmd : '' }${params.itemKey ? '_' + params.itemKey : '' }${params.formKey ? '_' + params.formKey : '' }${params.oid ? '_' + params.oid : '' }${params.OID ? '_' + params.OID : '' }`;
        fileName = fileName.replace('-','minus');
        let returnValue;
        switch (fileName){
            case /WebDictService_GetItem_Material_/.test(fileName) && fileName :
                returnValue = data['WebDictService_GetItem_Material_Universal'].value;
                break;
            case /MobileLoadForm_LoadData_Receipt_/.test(fileName) && fileName :
                returnValue = data['MobileLoadForm_LoadData_Receipt_Universal'].value;
                break;
            case /WebDictService_GetItem_Organization_/.test(fileName) && fileName :
                returnValue = data['WebDictService_GetItem_Organization_Universal'].value;
                break;
            default :
                returnValue = data[fileName].value;
        }
        return Promise.resolve({
            json:function () {
                return returnValue;
            }
        });

    },

}