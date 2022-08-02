const exercisesDOM = document.querySelector('.exercises')
const loadingDOM = document.querySelector('.loading-text')
const formDom = document.querySelector('.exercise-form')

const showExercises = async() => {
    loadingDOM.style.visibility = 'visible'
    try {
        const {
            data: {exercises}
        } = await axios.get('/api/v1/exercises')
        if (exercises.length < 1) {
            exercisesDOM.innerHTML = '<h5 class="text-center">No tasks in your list</h5>'
            loadingDOM.style.visibility = 'hidden'
            return
          }
          const allExercises = exercises.map((exercise) => {
            console.log(exercise)
            const {name,image} = exercise
            return `<div class="card m-3" style="width: 18rem;">
            <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title text-center"><b>${name}</b></h5>
              <ul class="list-unstyled">
                <li>Targets: ${exercise.muscles.target}</li>
                <li>Utility: ${exercise.classification.utility}</li>
                <li>Mechanics: ${exercise.classification.mechanics}</li>
                <li>Force: ${exercise.classification.force}</li>
              </ul>

              <a href="/exercise.html?name=${name}" class="btn btn-primary">More Info</a>
              <a href="#" class="btn btn-danger delete-btn" data-name="${name}">Delete</a>
            </div>
          </div>
          `
          }).join("")
          exercisesDOM.innerHTML = allExercises

    } catch (error) {
        exercisesDOM.innerHTML =
        '<h5 class="text-center">There was an error, please try later....</h5>'
        console.log(error)
    }
    loadingDOM.style.visibility = 'hidden'
}

showExercises()


// delete exercise /api/exercises/:name

exercisesDOM.addEventListener('click', async (e) => {
    const el = e.target
    console.log(el)
    if (el.classList.contains('delete-btn')) {
      loadingDOM.style.visibility = 'visible'
      const name = el.dataset.name
      try {
        await axios.delete(`/api/v1/exercises/${name}`)
        showExercises()
      } catch (error) {
        console.log(error)
      }
    }
    loadingDOM.style.visibility = 'hidden'
  })