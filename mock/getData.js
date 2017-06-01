import RNFS from 'react-native-fs';
function getData(req, res) {
    let reqBody = req.body;
    reqBody = string2Obj(reqBody);

    let fileName = `${reqBody.service}${reqBody.cmd ? '_' + reqBody.cmd : '' }${reqBody.itemKey ? '_' + reqBody.itemKey : '' }${reqBody.formKey ? '_' + reqBody.formKey : '' }${reqBody.oid ? '_' + reqBody.oid : '' }${reqBody.OID ? '_' + reqBody.OID : '' }.json`;
    fileName = fileName.replace('-','minus');

    // Write to file
    const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;

    const data = {
        router: reqBody.service,
        value: res,
    }
    RNFS.writeFile(path, JSON.stringify(data, null, 4), 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN!');
        })
        .catch((err) => {
            console.log(err.message);
        });
}

export default getData;

function string2Obj(str) {
    const obj = {};
    const arr = str.split('&');
    for(var i = 0, len = arr.length; i < len; i++){
        let arrSingle = arr[i].split('=');
        obj[arrSingle[0]] = decodeURIComponent(arrSingle[1]);
    }
    return obj;
}
