import Vue from 'vue'
// 消息提示
var loadObj = {
  loading: () => {
    let box = document.getElementsByClassName('loading')[0]
    if (box) {
      document.body.removeChild(box)
    }
    let dom = document.createElement('div')
    dom.classList.add('loading')
    dom.addEventListener('touchmove', (e) => {
      e.preventDefault();
      return false;
    })
    dom.innerHTML = `<div class="load-box">
                      <div class="load-icon"></div>
                  </div>`;
    document.body.appendChild(dom)
  },
  removeLoading: () => {
    let dom = document.getElementsByClassName('loading')[0]
    if (dom) {
      document.body.removeChild(dom)
    }
  }
}

Vue.prototype.$Loading = loadObj