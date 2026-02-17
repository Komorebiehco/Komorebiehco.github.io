var posts=["2026/02/17/这是一篇新的博文/","2026/02/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };