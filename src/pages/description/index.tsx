import * as S from "./index.styles";
import { useSelector } from "react-redux";
import { Button } from "components/button";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import { ICurrentState, IState } from "types";

const DescriptionPage = () => {
	const bookImage = useSelector(
		(state: ICurrentState) =>
			state.books.book.data?.volumeInfo.imageLinks.smallThumbnail,
	);
	const bookName = useSelector(
		(state: ICurrentState) => state.books.book.data?.volumeInfo.title,
	);
	const bookCategories = useSelector(
		(state: ICurrentState) => state.books.book.data?.volumeInfo.categories,
	);
	const bookAuthors = useSelector(
		(state: ICurrentState) => state.books.book.data?.volumeInfo.authors,
	);
	const bookDescription = useSelector(
		(state: ICurrentState) => state.books.book.data?.volumeInfo.description,
	);
	const isLoading = useSelector((state: IState) => state.books?.loading);
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<S.Container>
			{isLoading ? (
				<MagnifyingGlass
					visible={true}
					height="110"
					width="110"
					ariaLabel="MagnifyingGlass-loading"
					wrapperStyle={{ marginTop: "10px" }}
					wrapperClass="MagnifyingGlass-wrapper"
					glassColor="#c0efff"
					color="#bb7d81"
				/>
			) : (
				<>
					<Button
						buttonName={"Back"}
						className={"backbutton"}
						onClick={goBack}
					/>
					<div className="container__label">
						<img src={bookImage} alt="label of book" />
					</div>
					<div className="container__description">
						<p className="name">
							<span className="nameSpace">Name:</span>
							<span className="namingBook">{bookName}</span>
						</p>
						<p className="categories">
							<span className="nameSpace">Categories: </span>
							<span className="namingBook">{bookCategories}</span>
						</p>
						<p className="authors">
							<span className="nameSpace">Authors:</span>
							<span className="namingBook">{bookAuthors}</span>
						</p>
						<p className="description">
							<span className="nameSpace">Description:</span>
							<span className="namingBook">{bookDescription}</span>
						</p>
					</div>
				</>
			)}
		</S.Container>
	);
};

export default DescriptionPage;
