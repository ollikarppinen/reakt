export const createElement = (type: any, props: any, ...children: any) => {
  if (typeof type === 'function') {
    return type(props, children)
  }
  return {
    props: {
      ...props,
      children: children.map((child: any) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
    type,
  }
}

export const createTextElement = (text: any) => ({
  props: { nodeValue: text, children: [] },
  type: 'TEXT_ELEMENT',
})

export const render = (element: any, container: any) => {
  if (Array.isArray(element)) {
    element.forEach((e: any) => render(e, container))
    return
  }
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)

  const isProperty = (key: any) => key !== 'children'

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name: string) => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach((child: any) => render(child, dom))

  container.appendChild(dom)
}

export const Reakt = {
  createElement,
  render,
}

export default Reakt
