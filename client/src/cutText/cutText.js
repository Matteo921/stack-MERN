const cutText = (content, maxLenght) => {
	if (content.lenght < 1) return 'Error';
	if (content.lenght <= maxLenght) return content;
	return content.substr(0, content.lastIndexOf('', maxLenght)) + '...';
};

export default cutText;