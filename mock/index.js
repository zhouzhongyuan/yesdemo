let __dev__ = true;
// __dev__ = false;
import FetchMock from 'react-native-fetch-mock';

if (__dev__) {
    global.fetch = new FetchMock(require('../__mock__')).fetch;
}

