

const Head = (props) => {
    document.title="Groumet-" + props.title
  return (
    <div className="w-100">
      {props.children}
    </div>
  )
}

export default Head
