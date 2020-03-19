exports.getPosts = function (req,res) => {
	const data = [
		{ id: '1adfasf', title: 'Lorem Ipsum', content: 'adaddasasdasadsdsd'},
		{ id: '2evxc34', title: 'Lorem Ipsum II', content: 'adaddasasdasadsdsd'},
	]
	res.json(data);
};
