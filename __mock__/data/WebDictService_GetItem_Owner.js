import {Mock} from 'react-native-fetch-mock';

function generateData(oid) {
    if (String(oid) === '0') {
        return {
            "data": {
                "itemTables": {},
                "mainTableKey": "",
                "caption": "",
                "nodeType": 1,
                "itemKey": "Owner"
            }
        };
    }
    return Mock.mock({
        "data": {
            "itemTables": {
                "Owner": {
                    "itemRows": [
                        {
                            "ParentID": 0,
                            "NodeType": 0,
                            "Enable": 1,
                            "OID": oid,
                            "Code": "IKEA",
                            "Name": "宜家家居"
                        }
                    ],
                    "tableMode": 0,
                    "key": "Owner",
                    "itemKey": "Owner"
                }
            },
            "enable": 1,
            "mainTableKey": "Owner",
            "caption": "IKEA 宜家家居",
            "oid": oid,
            "itemKey": "Owner"
        }
    })
}
export default generateData;
// var data = generateData('007');
// console.log(JSON.stringify(data, null, 4));