import data from '../data'
import {useState, useMemo, useDeferredValue, useTransition} from 'react'

function NewHooks() {
    const [text, setText] = useState('')
    const [posts, setPosts] = useState(data)
    //? const deferredText = useDeferredValue(text)
    const [isPending, startTransition] = useTransition()
    //? const filteredPosts = useMemo(() => {
        //? return posts.filter(item => item.name.toLowerCase().includes(deferredText));
    //? }, [deferredText, posts]);
    const filteredPosts = useMemo(() => {
    return posts.filter(item => item.name.toLowerCase().includes(text))
    }, [text, posts])
  const onValueChange = (e) => {
    //! not use for entering text!!! It's only for exemple!!!!
    startTransition(() => setText(e.target.value))
    //! not use for entering text!!! It's only for exemple!!!!
  }

    return (
        <>
        <input value={text} type='text' onChange={onValueChange}
        style={{display: 'block', margin: '50px auto', textAlign: 'center'}}/>

            <hr/>

            <div style={{margin: '0 auto', textAlign: 'center'}}>
                { isPending ? <h4>Loading...</h4> : filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewHooks
