```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error because 'req' is not defined
  console.log(req.body);
  res.status(200).json({ text: 'Hello' });
}
```