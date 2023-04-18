import { memo } from "react";

const PostsTab = memo(function PostsTab() {
  let items = [];
  for (let i = 0; i < 10000; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <li className="item">Post #{index + 1}</li>;
}

export default PostsTab;
