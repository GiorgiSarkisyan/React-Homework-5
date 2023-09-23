import { 
    updateTime,
    getLiveDate,
} from "./module.js"

const wrapper = document.getElementById("wrapper")

const mainPageContainer = document.createElement("div")
mainPageContainer.classList.add("main-page-container")
wrapper.appendChild(mainPageContainer)

const mainPageTitle = document.createElement("h1")
mainPageTitle.classList.add("main-page-title")
mainPageTitle.innerHTML = "Todo"
mainPageContainer.appendChild(mainPageTitle)

const toDoContainer = document.createElement("div")
toDoContainer.classList.add("toDo-container")
mainPageContainer.appendChild(toDoContainer)

const toDoBackground = document.createElement("div")
toDoBackground.classList.add("toDo-background")
toDoContainer.appendChild(toDoBackground)

const toDoTitleTime = document.createElement("h2")
toDoBackground.appendChild(toDoTitleTime)
toDoTitleTime.classList.add("toDo-time")
toDoTitleTime.innerHTML = updateTime()

const toDoTitleDay = document.createElement("h3")
toDoBackground.appendChild(toDoTitleDay)
toDoTitleDay.classList.add("toDo-day")
toDoTitleDay.innerHTML = getLiveDate()

const toDoMain = document.createElement("div")
toDoContainer.appendChild(toDoMain)
toDoMain.classList.add("toDo-main")

const toDoInputSide = document.createElement("div")
toDoInputSide.classList.add("toDo-input-side")
toDoMain.appendChild(toDoInputSide)

const toDoInputBox = document.createElement("div")
toDoInputSide.appendChild(toDoInputBox)
toDoInputBox.classList.add("toDo-input-box")

const toDoInputVerification = document.createElement("div")
toDoInputBox.appendChild(toDoInputVerification)
toDoInputVerification.classList.add("toDo-input-verification")

const toDoInput = document.createElement("input")
toDoInputBox.appendChild(toDoInput)
toDoInput.placeholder = "Note"
toDoInput.classList.add("toDo-input")

const toDoInputButton = document.createElement("button")
toDoInputSide.appendChild(toDoInputButton)
toDoInputButton.classList.add("toDo-input-button")
toDoInputButton.innerHTML = `<svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg" class="input-img"><path id="Vector" d="M9 17.5V9.5M9 9.5V1.5M9 9.5H17M9 9.5H1" stroke-width="2" stroke-linecap="round"/></svg>`
const buttonImg = toDoInputButton.querySelector("svg")

toDoInputButton.addEventListener("mousedown", () => {
    toDoInputButton.classList.add("active")
    buttonImg.classList.add("active")
})
toDoInputButton.addEventListener("mouseup", () => {
    toDoInputButton.classList.remove("active")
    buttonImg.classList.remove("active")
})

const toDoFrameSide = document.createElement("div")
toDoFrameSide.classList.add("toDo-frame-side")
toDoMain.appendChild(toDoFrameSide)

toDoInputButton.addEventListener("click", () => {
    if (toDoInput.value !== '') {
    const toDoFrame = document.createElement("div")
    toDoFrameSide.appendChild(toDoFrame)
    toDoFrame.classList.add("toDo-frame")

    const todoFrameInfo = document.createElement("div")
    toDoFrame.appendChild(todoFrameInfo)
    todoFrameInfo.classList.add("toDo-frame-info")

    const toDoFrameInfoTodo = document.createElement("p")
    todoFrameInfo.appendChild(toDoFrameInfoTodo)
    toDoFrameInfoTodo.classList.add("toDo-frame-info-todo")
    toDoFrameInfoTodo.innerHTML = toDoInput.value
    toDoInput.value = ''

    const toDoFrameInfoTime = document.createElement("h3")
    toDoFrameInfoTime.classList.add("toDo-frame-info-time")
    todoFrameInfo.appendChild(toDoFrameInfoTime)
    toDoFrameInfoTime.innerHTML = `Today at ${updateTime()}`

    const toDoFrameRightSide = document.createElement("div")
    toDoFrameRightSide.classList.add("toDo-frame-right-side")
    toDoFrame.appendChild(toDoFrameRightSide)

    const toDoFrameCheckBox = document.createElement("div")
    toDoFrameRightSide.appendChild(toDoFrameCheckBox)
    toDoFrameCheckBox.classList.add("toDo-frame-checkBox")
    toDoFrameCheckBox.addEventListener("mouseup", () => {
        toDoFrameCheckBox.classList.toggle("active")
    })
    toDoFrameCheckBox.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkbox">
    <g id="akar-icons:circle">
    <path id="Vector" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" stroke="#20EEB0" stroke-width="2"/>
    <path id="Vector_2" d="M10.7783 14.657L8.9143 12.7253C8.81386 12.6212 8.67763 12.5628 8.53558 12.5628C8.39354 12.5628 8.25731 12.6212 8.15687 12.7253C8.05643 12.8294 8 12.9706 8 13.1178C8 13.1907 8.01385 13.2628 8.04077 13.3302C8.06768 13.3975 8.10714 13.4587 8.15687 13.5102L10.4023 15.8372C10.6118 16.0543 10.9502 16.0543 11.1597 15.8372L16.8431 9.94748C16.9436 9.8434 17 9.70222 17 9.55502C17 9.40782 16.9436 9.26665 16.8431 9.16256C16.7427 9.05848 16.6065 9 16.4644 9C16.3224 9 16.1861 9.05848 16.0857 9.16256L10.7783 14.657Z" fill="white"/>
    </g>
    </svg>`
    const checkbox = toDoFrameCheckBox.querySelector("svg")
    toDoFrameCheckBox.addEventListener("click", () => {
        checkbox.classList.toggle("active")
    })
    const toDoFrameDeleteButton = document.createElement("div")
    toDoFrameRightSide.appendChild(toDoFrameDeleteButton)
    toDoFrameDeleteButton.classList.add("delete-button")
    toDoFrameDeleteButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="akar-icons:trash-can">
    <path id="Vector" d="M2 6H22M10 11V16M14 11V16M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6ZM7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147V3.147Z" stroke="#FF4545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </svg>
    `
    const deleteButton = toDoFrameDeleteButton.querySelector("svg")
    deleteButton.addEventListener("mousedown", () => {
        deleteButton.classList.add("active")
    })
    deleteButton.addEventListener("mouseup", () => {
        deleteButton.classList.remove("active")
        toDoFrame.remove()
    })
    }
})