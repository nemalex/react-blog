import { FormEvent, SetStateAction, useState } from "react";
import { usePostPostMutation } from "../../store/posts-api";

const PostNew = () => {
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const [ postPost ] = usePostPostMutation();

    const titleHandler = (e: FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        setTitle(target.value);
    }

    const textHandler = (e: { target: { value: SetStateAction<string>; }; }) => {
        setText(e.target.value)
    }

    const submitHandler = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        postPost({
            title,
            text,
            date: new Date()
        })

    }

    return(<form onSubmit={submitHandler}>
        <input value={title} onChange={titleHandler}/>
        <textarea value={text} onChange={textHandler}/>
        <button type="submit">Submit</button>
    </form>)
}

export default PostNew;