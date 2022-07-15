export const filterPost = (filterValue, allPost) => {
	let filterdPost = allPost;

	// Recent filter here
	if (filterValue.recent === true) {
		filterdPost = [...allPost].reverse();
	}

	// trending filter here
	if (filterValue.trending === true) {
		filterdPost = [...allPost].sort((first, sec) => {
			return sec.likes.likeCount - first.likes.likeCount;
		});
	}

	// sort by date filter here
	if (filterValue.sortByDate === "accending") {
		filterdPost = [...allPost].sort((first, sec) => {
			return (
				new Date(sec.createdAt).getDate() -
				new Date(first.createdAt).getDate()
			);
		});
	}

	if (filterValue.sortByDate === "descending") {
		filterdPost = [...allPost].sort((first, sec) => {
			return (
				new Date(first.createdAt).getDate() -
				new Date(sec.createdAt).getDate()
			);
		});
	}
	return filterdPost;
};
