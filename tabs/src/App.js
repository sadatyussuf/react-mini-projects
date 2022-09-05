import { useState, useEffect } from 'react'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    try {

      const response = await fetch(url)
      const data = await response.json()

      setLoading(false)
      setJobs(data)
    }
    catch (error) {
      console.log(`Fetch error: ${error}`)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, []);


  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { title, dates, company, duties } = jobs[value]

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${value === index && 'active-btn'}`}
                >

                  {job.company}
                </button>
              )
            })

          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {
            duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  {/* Put svg from react-icons */}
                  <p>{duty}</p>
                </div>
              )
            })
          }

        </article>

      </div>
      <button type="button" className="btn">more info</button>
    </section >
  );
}

export default App;
