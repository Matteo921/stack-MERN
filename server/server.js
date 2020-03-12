const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

app.get('/api/posts', (req,res) => {
	const data = [
		{ id: '1adfasf', title: 'Lorem Ipsum', content: 'adaddasasdasadsdsd'},
		{ id: '2evxc34', title: 'Lorem Ipsum II', content: 'adaddasasdasadsdsd'},
	]
	res.json(data);
});

app.listen(8000, function(){
  console.log('Server is running on port:', 8000);
});