//get the items
const btns = document.querySelectorAll(".btn");
const items = document.querySelectorAll(".item");

const clickHandler = (e, id) => {
    items.forEach((item, i) => {
        if (id !== i) {
            item.classList.remove("open");
        }
    });

    const actveBtn = e.target;
    const par = actveBtn.parentElement;
    par.classList.toggle("open");
};
btns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => clickHandler(e, i));
});
