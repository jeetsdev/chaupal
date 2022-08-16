import { useState } from "react";
import { useSelector } from "react-redux";
import { loaderImg, noPostImg } from "../../assets";
import {
	Footer,
	Header,
	NewPostCard,
	PostCard,
	ScrollToTop,
	Sidebar,
	WhoToFollowCard,
} from "../../components";
import { filterPost } from "../../utils";
import "./Home.css";

export const Home = () => {
	const { allPosts, loading } = useSelector((state) => state.post);
	const { userData } = useSelector((state) => state.auth);
	const { allUsers } = useSelector((state) => state.user);
	const activeUser = allUsers.find(
		(user) => user?.username === userData?.username,
	);
	const [filterValue, setFilterValue] = useState({
		trending: false,
		recent: true,
		sortByDate: "",
	});

	// Getting all post from user and followings here
	const feedPost = allPosts?.filter((eachPost) => {
		return (
			activeUser?.following?.find(
				(eachFollowing) => eachFollowing.username === eachPost.username,
			) || activeUser?.username === eachPost.username
		);
	});

	const trendingHandler = () => {
		setFilterValue({ trending: true, sortByDate: "", recent: false });
	};
	const sortByDateHandler = () => {
		filterValue.sortByDate === "accending"
			? setFilterValue({
					trending: false,
					sortByDate: "descending",
					recent: false,
			  })
			: setFilterValue({
					trending: false,
					sortByDate: "accending",
					recent: false,
			  });
	};
	const recentHandler = () => {
		setFilterValue({ trending: false, sortByDate: "", recent: true });
	};

	// Getting final post by filtered value
	const filteredPost = filterPost(filterValue, feedPost);

	return (
		<main className="main-container">
			<ScrollToTop />
			<Header />
			<section className="content-container grid">
				<div className="left-container fixed ">
					<Sidebar />
				</div>
				<div className="mid-container flex flex-col gap-4 relative min-h-screen">
					{/* Loader here */}
					{loading && (
						<div className="absolute w-full h-full top-10 z-10 rounded right-0 left-0 flex justify-center items-center ">
							<img src={loaderImg} alt="loader here" />
						</div>
					)}
					<div>
						<NewPostCard />
					</div>
					<div>
						<div className="flex py-1 mx-4 md:mx-8 justify-end gap-4">
							<button
								className="underline text-primary hover:no-underline hover:cursor-pointer"
								onClick={trendingHandler}>
								Trending
							</button>
							<button
								className="underline text-primary hover:no-underline hover:cursor-pointer"
								onClick={sortByDateHandler}>
								Sort by Date
							</button>
							<button
								className="underline text-primary hover:no-underline hover:cursor-pointer"
								onClick={recentHandler}>
								Recent
							</button>
						</div>
						{filteredPost.length === 0 ? (
							<div className="flex justify-center items-center flex-col my-8">
								<img
									src={noPostImg}
									alt="no post here"
									className="w-1/3"
								/>
								<p className="text-xl font-bold mt-10">
									Follow users to see posts.
								</p>
							</div>
						) : (
							filteredPost?.map((post) => {
								return <PostCard post={post} key={post._id} />;
							})
						)}
					</div>
				</div>
				<section className="right-container fixed hidden text-xs lg:block xl:text-base">
					<WhoToFollowCard />
				</section>
			</section>
			<Footer />
		</main>
	);
};
