import { useState } from 'react';

export default function Profile() {
  const [content, setContent] = useState('');

  return (
    <>
    <textarea
      value={content}
      onChange={e => setContent(e.target.value)}
    />
    <button onClick={() => alert(content)}>Get content</button>
    </>
  );
}
