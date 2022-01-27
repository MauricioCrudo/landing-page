window.addEventListener("load", function() {
    const bgv = document.getElementById("bgvid");
  
    // what jQuery checks under the hood
    const visible = bgv.offsetWidth ||
      bgv.offsetHeight ||
      bgv.getClientRects().length;
  
    if (visible) {
      const children = bgv.getElementsByTagName("source");
  
      for (let i = 0; i < children.length; ++i) {
        children[i].src = children[i].dataset.src;
      }
    }
  
    bgv.load();
})