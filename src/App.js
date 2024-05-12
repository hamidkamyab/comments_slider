import * as Icon from "react-icons/io5";
import comments from './data'

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-center position-relative">
      <div className="main d-flex flex-column align-items-center justify-content-center w-100 py-5">
        <h4 className="text-center position-relative title mb-5 p-0">نظرات مشتریان</h4>
        <section className="position-relative px-5">
          <div className="btn-op btn-next start-0 position-absolute" role="button">
            <Icon.IoChevronForward size={30}/>
          </div>
          <div className="btn-op btn-prev end-0 position-absolute" role="button">
            <Icon.IoChevronBack size={30}/>
          </div>
          {
            comments.map(({id,name,image,job,body}) => (
              <article className="position-absolute bg-white start-0 end-0 d-flex flex-column align-items-center gap-3 py-2 px-5">
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
