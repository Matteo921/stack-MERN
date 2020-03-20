const Post = require('./models/post.model');

const loadTestData = async () => {

	const data = [
		{
			id: '2312123n12n3jkn213nj1k23',
			title: 'How do I get founding for my startup?',
			content: 'Getting founding for your startup can be a bit frustrating. You want <b> a lot of money</b> and <b>you dont have a lot to offer. But dont worry</b> There is something you can do ! Ill teach you everything you need to know. Are you ready?',
		},
			{
			id: 'hdajhdajsd3423244',
			title: '10 Brilliant Small Bussiness Ideas',
			content: 'Oh... It wont be so easy. I wont give you a list. <i>But... Im going to give you some tips that will surely help you on the road.</i> So, lets get started!',
		},
		{
			id: '32b12bjh21g32g',
			title: 'How do I get founding for my startup?',
			content: 'Getting founding for your startup can be a bit frustrating. You want <b> a lot of money</b> and <b>you dont have a lot to offer. But dont worry</b> There is something you can do ! Ill teach you everything you need to know. Are you ready?',
		},
	];

	try {
		let counter = await Post.countDocuments();
		if(counter === 0) {
			console.log('No posts. Loading data...');
			await Post.create(data);
			console.log('test data has been successfully loaded');
		}
	} catch (err) {
		console.log('Couldnt load test data', err);
	}
};

module.exports = loadTestData;