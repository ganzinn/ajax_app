function check(){
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {

    if(post.getAttribute("data-load") != null){
      return null;
    }
    post.setAttribute("data-load", "true");

    post.addEventListener("click", () => {
      const postId = post.getAttribute("data-id");
      const csrfToken = document.getElementsByName("csrf-token")[0].content;
      const crsfTokenJSON = JSON.stringify({"authenticity_token": csrfToken});
      // debugger
      const XHR = new XMLHttpRequest();
      XHR.open("PATCH", `/posts/${postId}`, true);
      XHR.setRequestHeader("Content-Type", "application/json");
      XHR.responseType = "json";
      XHR.send(crsfTokenJSON);
      XHR.onload = () => {
        if(XHR.status != 200){
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
        const item = XHR.response.post;
        // debugger
        if(item.checked === true){
          post.setAttribute("data-check", "true");
        }else if(item.checked === false ){
          post.removeAttribute("data-check")
        }
      };
    });
  });
}

// window.addEventListener("load", check);
setInterval(check, 1000);
