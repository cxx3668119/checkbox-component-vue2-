export default {
  bind(el, binding, vnode) {
    console.log(el, binding, vnode);
    el.handler = function (e) {
      if (!el.contains(e.target)) {
        const _method = bindings.expression;
        vnode.context[_method]()
      }
    }

    document.addEventListener('click', el.handler, false)
  },
  unbind(el, binding, vnode) {
    document.removeEventListener('click', el.handler, false)
  }
}