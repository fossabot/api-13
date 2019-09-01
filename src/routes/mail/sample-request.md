```javascript
//JFTR: request-promise requires request
const rp = require('request-promise');
rp.post('https://api.gruselhaus.com/mail/create', { //http://localhost:3000/mail/create
  form: {
    key: '1234',
    from: '1234',
    to: '1234',
    subject: '1234',
    message: '1234'
  }
})
```