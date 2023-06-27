import data from '../data'
import {useState, useMemo, useDeferredValue} from 'react'

function NewHooks() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    const deferredText = useDeferredValue(text)
    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(deferredText));
    }, [deferredText, posts]);

    const onValueChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
        <input value={text} type='text' onChange={onValueChange}
        style={{display: 'block', margin: '50px auto', textAlign: 'center'}}/>

            <hr/>

            <div style={{margin: '0 auto', textAlign: 'center'}}>
                {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewHooks;
