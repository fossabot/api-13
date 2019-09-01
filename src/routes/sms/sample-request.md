```javascript
//JFTR: request-promise requires request
const rp = require('request-promise');
rp.post('https://api.gruselhaus.com/sms/create', { //http://localhost:3000/sms/create
  form: {
    key: '1234',
    phone: '1234'
    message: '1234',
  }
})
```