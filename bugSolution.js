```javascript
// pages/api/hello.js
export default async function handler(req, res) {
  try {
    if (req && req.body) {
      console.log(req.body);
    } else {
      console.log('No request body provided');
    }
    res.status(200).json({ text: 'Hello' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```