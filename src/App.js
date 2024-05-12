import * as Icon from "react-icons/io5";
import comments from './data'
import { useEffect, useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [len, setLen] = useState(comments.length - 1);


  const handleSlider = (status) => {
    if(status == 'next'){
      index == len?
      setIndex(0)
      :
      setIndex(() => index + 1)
      ;
    }else{
      index == 0?
      setIndex(len)
      :
      setIndex(() => index - 1)
      ;
    }
  }

  useEffect(() => {
    let lastTag = null;
    let lastIndex = null;

    let tags = document.querySelectorAll('article');
    tags.forEach((item)=>{
      item.setAttribute('data-status','next_slid')
    })

    index == 0 ?lastIndex=len:lastIndex=index-1;
    let currentTag = document.querySelector('#comment-' + index);

    lastTag = document.querySelector('#comment-' + lastIndex)

    currentTag.setAttribute('data-status', 'current_slid')
    lastTag.setAttribute('data-status','last_slid')
  }, [index]);

  useEffect(()=>{
    let autoSlid = setInterval(() => {
      handleSlider('next')
    }, 3000);
    return(
      ()=>clearInterval(autoSlid)
    )
  },[index])

  return (
    <div className="App vh-100 d-flex flex-column justify-content-center position-relative">
      <div className="main d-flex flex-column align-items-center justify-content-center w-100 py-5">
        <h4 className="text-center position-relative title mb-5 p-0">نظرات مشتریان</h4>
        <section className="position-relative px-5 overflow-hidden">
          <div className="btn-op btn-next end-0 position-absolute" role="button" onClick={() => handleSlider('next')}>
            <Icon.IoChevronBack size={30} />
          </div>
          <div className="btn-op btn-prev start-0 position-absolute" role="button" onClick={() => handleSlider('back')}>
            <Icon.IoChevronForward size={30} />
          </div>
          {
            comments.map(({ id, name, image, job, body }, commentIndex) => (
              <article
                className="position-absolute bg-white start-0 end-0 d-flex flex-column align-items-center gap-3 py-2 px-5"
                key={id}
                id={`comment-${commentIndex}`}
                data-status="next_slid"
              >
                <img src={image} alt="" />
                <div className="nj d-flex flex-column align-items-center gap-1">
                  <span className="name">
                    {name}
                  </span>
                  <span className="job">
                    {job}
                  </span>
                </div>
                <p>
                  {body}
                </p>
              </article>
            ))
          }

        </section>
      </div>

      <div className="footer text-center py-3 position-absolute bottom-0 start-0 end-0">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
