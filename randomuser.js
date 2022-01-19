const avatar = document.querySelector(".avatar");
const button = document.querySelector("button");
const para = document.querySelector("p");
const heading = document.querySelector("h4");
const iconsWrapper = document.querySelector(".icons-wrapper")

button.addEventListener("click", () => {
    fetch("https://randomuser.me/api/?gender=male")
        .then(res => res.json())
        .then(data => {
            const user = data.results[0];
            avatar.src = user.picture.large;
            heading.innerText = `${user.name.first} ${user.name.last}`;
            const content = `   <div class="icon" data-title="Hi, my name is" data-content=${user.name.first}>
        <i class="far fa-user"></i>
    </div>
    <div class="icon" data-title="Hi, my email is" data-content=${user.email}>
        <i class="far fa-envelope-open"></i>
    </div>
    <div class="icon" data-title="Hi, my date of birth is" data-content=${user.dob.date}>
        <i class="far fa-calendar-alt"></i>
    </div>
    <div class="icon" data-title="Hi, my address is" data-content=${user.location.city}>
        <i class="fas fa-map-pin"></i>
    </div>
    <div class="icon" data-title="Hi, my phone number is" data-content=${user.phone}>
        <i class="fas fa-phone-alt"></i>
    </div>
    <div class="icon" data-title="Hi, my password is" data-content=${user.login.password}>
        <i class="fas fa-key"></i>
    </div>`;
            iconsWrapper.innerHTML = content;
            const allIcons = document.querySelectorAll(".icon");
            allIcons.forEach((icon) => {
                icon.addEventListener("click", (event) => {
                    console.log(event.target.parentElement);
                    para.innerText = event.target.parentElement.getAttribute("data-title");
                    heading.innerText = event.target.parentElement.getAttribute("data-content");
                    icon.style.color = "#f6f9aa";
                    icon.style.boxShadow = "0 1px 5px #344468";
                    icon.style.borderRadius = "5px";
                })
            })
        })
})