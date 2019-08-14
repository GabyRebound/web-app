(() => {

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let urlImagedefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupN0gnsgRwjIIc4fO08CBGxLimQKfHkfzHh7My4VQYdOUtGvK';
      let dataArray = JSON.parse(this.responseText);
      let innerHtml = '';
      for(user of dataArray.users) {
        let urlImage = '';
        if ( !user.avatar_url ) {
          urlImage = urlImagedefault;
        } else {
          urlImage = user.avatar_url;
        } 
        innerHtml += `<li class="col-12 col-md-6 col-lg-3">
                        <div class="cnt-block equal-hight" style="height: 349px;">
                          <figure><img src="${urlImage}" class="img-responsive" alt=""></figure>
                          <h3><a href="#">${user.nickName}</a></h3>
                          <p>${user.name}</p>
                          <ul class="follow-us clearfix">
                            <li><a href="${user.github_url}"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </li>`;
      }
      document.querySelector('#container').innerHTML = innerHtml;
    }
  }
  xmlhttp.open('GET', 'data.json', true);

  xmlhttp.send();

})();
