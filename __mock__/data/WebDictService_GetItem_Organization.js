import {Mock} from 'react-native-fetch-mock';

function generateData(oid) {
    return Mock.mock({
        "data": {
            "itemTables": {
                "Organization": {
                    "itemRows": [
                        {
                            "ParentID": 10002,
                            "NodeType": 0,
                            "Enable": 1,
                            "OID": oid,
                            "Code": "KUNSHANWAREHOUSE",
                            "Name": "昆山仓库"
                        }
                    ],
                    "tableMode": 0,
                    "key": "Organization",
                    "itemKey": "Organization"
                }
            },
            "enable": 1,
            "mainTableKey": "Organization",
            "caption": "KUNSHANWAREHOUSE 昆山仓库",
            "oid": oid,
            "itemKey": "Organization"
        }
    })
}
export default generateData;
// var data = generateData('007');
// console.log(JSON.stringify(data, null, 4));