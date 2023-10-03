
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit',(e) => {
      e.preventDefault()
      buildToDo(e.target.value)
      form.reset()
    })
    
  });
  
  function buildToDo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo}`
    p.appendChild(btn)
    console.log(p);
    document.querySelector('#task')
};


