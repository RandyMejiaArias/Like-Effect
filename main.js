const likeTemplate = `
  <svg width="70" height="60" class="heart" viewBox="0 0 512 512">
    <path fill="#currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
    </svg>`;

class LikeMe{
  constructor(selector){
    this.el = document.querySelector(selector);
    this.el.style.position = "relative";

    this.bindEvents();
  }

  bindEvents(){
    this.el.addEventListener("dblclick", (ev)=>{
      this.buildHeart();
      this.el.appendChild(this.heart);
    });
  }

  buildHeart(){
    this.heart = document.createElement("div");
    this.heart.style.position = "absolute";
    this.heart.style.top = "40%";
    this.heart.style.left = "40%";
    this.heart.style.fill = "#EC613C";
    this.heart.innerHTML = likeTemplate;
  }
}

(function(){
  new LikeMe(".card");
})();