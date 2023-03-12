let likes = 0;
const buttonLike = document.getElementById("buttonLike");

buttonLike.addEventListener("click", handleClick);

function handleClick() {
    likes += 1;
    buttonLike.textContent = `Likes (${likes})`;
}
