import {Mock} from 'react-native-fetch-mock';

function generateData(oid) {
    if (String(oid) === '0') {
        return {
            "data": {
                "itemTables": {},
                "mainTableKey": "",
                "caption": "",
                "nodeType": 1,
                "itemKey": "Material"
            }
        };
    }
    return Mock.mock({
        "data": {
            "itemTables": {
                "Material": {
                    "itemRows": [
                        {
                            "ParentID": 0,
                            "MAT_GROSS_WEIGHT": 10,
                            "MAT_CUBAGE": 8,
                            "OID": oid,
                            "MAT_CUBAGE_UNIT_ID": 301,
                            "MAT_CATEGORY_ID": 11106,
                            "Code": "00010009",
                            "MAT_LENGTH": 3,
                            "Name": "2004进口长袖工衣/6#",
                            "MAT_WIDTH": 4,
                            "MAT_HEIGHT": 5,
                            "MAT_NET_WEIGHT": 9,
                            "NodeType": 0,
                            "Enable": 1,
                            "MAT_WEIGHT_UNIT_ID": 202,
                            "MAT_UNIT_ID": 401,
                            "MAT_LENGTH_UNIT_ID": 102
                        }
                    ],
                    "tableMode": 0,
                    "key": "Material",
                    "itemKey": "Material"
                }
            },
            "enable": 1,
            "mainTableKey": "Material",
            "caption": "00010009 2004进口长袖工衣/6#",
            "oid": oid,
            "itemKey": "Material"
        }
    })
}
export default generateData;
// var data = generateData('007');
// console.log(JSON.stringify(data, null, 4));