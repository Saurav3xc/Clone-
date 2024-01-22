let tab_btn = document.querySelectorAll('.tab-btn');
let contents = document.querySelectorAll(".content");

tab_btn.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
  tab_btn.forEach((tab)=>{
    tab.classList.remove('active')
  })
    tab_btn[index].classList.add('active')
    // Remove "active" class from all contents
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    // Add "active" class to the clicked content
    contents[index].classList.add("active");
  });
});
