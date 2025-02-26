import "./ScrollBottom.css"

const ScrollBottom = () => {

  const scrollToBottom = (e) => {
    e.preventDefault();
    window.scrollBy({ top: 500, left: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToBottom} className="scroll-button">
        <i class="fa-solid fa-arrow-down"></i>
      </button>
    </div>
  )
}

export default ScrollBottom