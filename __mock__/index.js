import  * as data  from './data';
import WebDictService_GetItem_Material from './data/WebDictService_GetItem_Material';
import WebDictService_GetItem_Owner from './data/WebDictService_GetItem_Owner';
import WebDictService_GetItem_Organization from './data/WebDictService_GetItem_Organization';
export default {
    'http://192.168.1.116:8089/yigo/servlet' : ({ method, url, params, urlparams, headers }) => {
        let fileName = `${params.service}${params.cmd ? '_' + params.cmd : '' }${params.itemKey ? '_' + params.itemKey : '' }${params.formKey ? '_' + params.formKey : '' }${params.oid ? '_' + params.oid : '' }${params.OID ? '_' + params.OID : '' }`;
        fileName = fileName.replace('-','minus');
        let id = fileName.split('_')[3];
        let returnValue;
        switch (fileName){
            case /WebDictService_GetItem_Material_/.test(fileName) && fileName :
                returnValue = WebDictService_GetItem_Material(id);
                break;
            case /WebDictService_GetItem_Owner_/.test(fileName) && fileName :
                returnValue = WebDictService_GetItem_Owner(id);
                break;
            case /MobileLoadForm_LoadData_Receipt_/.test(fileName) && fileName :
                returnValue = data['MobileLoadForm_LoadData_Receipt_Universal'].value;
                break;
            case /WebDictService_GetItem_Organization_/.test(fileName) && fileName :
                returnValue = WebDictService_GetItem_Organization(id);
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