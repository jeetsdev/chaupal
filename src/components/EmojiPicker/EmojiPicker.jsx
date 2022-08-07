import Picker from "emoji-picker-react";

export const EmojiPicker = ({ inputSetter, inputRef }) => {
	// adding eomjies in the input using input setter function
	const emojiClickHandler = (event, emojiObject) => {
		// getting cursor location here
		const cursorPos = inputRef.current.selectionStart;

		inputSetter((prev) => {
			return {
				...prev,
				content:
					prev.content.slice(0, cursorPos) +
					emojiObject.emoji +
					prev.content.slice(cursorPos),
			};
		});
		inputRef.current.focus();
	};

	return (
		<>
			<Picker
				onEmojiClick={emojiClickHandler}
				pickerStyle={{
					width: "100%",
				}}
			/>
		</>
	);
};
