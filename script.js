const questions = [
    // Питання №1
    {
        question: "Що за зачудована жінка зображена на фото?",
        img: "images/q1.jpg",
        answers: [
            { text: "Распутіна Марія Дмитрівна", correct: false },
            { text: "Раскольнікова Зоя Романівна", correct: false },
            { text: "Распітіна Зоя Дмитрівна", correct: true },
            { text: "Сталін Йосип Віссаріонович", correct: true },
        ],
    },
    // Питання №2
    {
        question: "Яка епохальна подія відбулась 17 квітня 1994 року?",
        answers: [
            {
                text: "Збільшилась кількість людей, яких вдалося не впустити під час родів",
                correct: true,
            },
            {
                text: "Світ побачила нова скептично налаштована пара очей",
                correct: true,
            },
            {
                text: "У світі стало більше на одного Овна, що може напихати тобі х*їв",
                correct: true,
            },
            {
                text: "Народилось маленьке янголятко з іменем 'Яна'",
                correct: true,
            },
        ],
    },
    // Питання №3
    {
        question: "За якою адресою в Миколаєві можна попити гімна?",
        answers: [
            { text: "Проспект Богоявленський, 21", correct: true },
            { text: "Проспект Центральний, 171а/4", correct: true },
            { text: "Вулиця Соборна, 8", correct: true },
            {
                text: "Четвертого такого закладу в Миколаєві не знайшлося",
                correct: false,
            },
        ],
    },
    // Питання №4
    {
        question: "Без чого не може існувати похід на байдарках?",
        img: "images/q4.jpg",
        answers: [
            { text: "'Найсмачніша' привокзальна кава Херсону", correct: true },
            {
                text: "Лисий із бразерс, який весь похід ніх*я не робить",
                correct: true,
            },
            { text: "Спання в мокрій палатці", correct: true },
            {
                text: "Ригаючий зранку підліток, який вночі нах**рився горілки",
                correct: true,
            },
        ],
    },
    // Питання №5
    {
        question: "Що зображено на наступному фрагменті відео?",
        video: "video/q5.mp4",
        answers: [
            {
                text: "Місце, в якому б точно не відбулась перша шлюбна ніч (і всі наступні також)",
                correct: true,
            },
            {
                text: "П*здець, але з санітарною масочкою для обличчя та сіллю",
                correct: true,
            },
            { text: "Чинне місце проживання колишнього", correct: true },
            {
                text: "Рай на землі всього за 499.99₴",
                correct: true,
            },
        ],
    },
    // Питання №6
    {
        question: "Внаслідок якої події було зроблене це унікальне фото?",
        img: "images/q6.png",
        answers: [
            { text: "Мама звільнилась з роботи", correct: false },
            { text: "Вадим перестав сперечатися", correct: false },
            { text: "Ти придбала білети на 95-й квартал перед Новим роком", correct: true },
            { text: "Тато не поїхав на риболовлю", correct: false },
        ],
    },
    // Питання №7
    {
        question: "Кого ніколи не пародіював чинний президент України Володимир Зеленський?",
        answers: [
            { text: "Ігоря Коломойського", correct: false },
            { text: "Миколу Вересня", correct: false },
            { text: "Олену Зеленську", correct: true },
            { text: "Марічку з Рахова", correct: false },
        ],
    },
    // Питання №8
    {
        question: "Хто такий Семен/Степан Петревич?",
        answers: [
            { text: "Директор клубу", correct: true },
            { text: "Дуже красіва людина", correct: true },
            { text: "Дуже не красіва людина", correct: true },
            { text: "Справжнє ім'я Доріана Грея", correct: false },
        ],
    },
    // Питання №9
    {
        question: "На благо кого будут работать эти средства из городского бюджета в который поступит значительно больше денег?",
        video: "video/q9.mp4",
        answers: [
            { text: "Харьковчан", correct: false },
            { text: "Владимира Шумилкина", correct: true },
            { text: "Ігоря Коломойского", correct: false },
            { text: "Генадия Кернеса", correct: false },
        ],
    },
    // Питання №10
    {
        question: "Так 9 чи 10?",
        video: "video/q10.mp4",
        answers: [
            { text: "10", correct: true },
            { text: "9", correct: false },
            { text: "8", correct: false },
            { text: "Не чує баба, глуха як тетеря", correct: true },
        ],
    },
    // Питання №11
    {
        question: "Як звали головних героїв вампірської саги 2008 року?",
        video: "video/q11.mp4",
        answers: [
            { text: "Ізабелла та Едвард", correct: false },
            { text: "Белла та якийсь блєдний тіп", correct: true },
            { text: "Белла та Едвард", correct: true },
            { text: "Лупа та Пупа", correct: false },
        ],
    },
    // Питання №12
    {
        question:
            "Як називається легендарна мелодія, яка довгий час стояла в тебе на дзвінку?",
        audio: "audio/q12.mp3",
        answers: [
            { text: "'Gorgeous'", correct: true },
            { text: "'Georgeous'", correct: false },
            { text: "'Geoguessr'", correct: false },
            { text: "'Samsung Ringtone 2018'", correct: false },
        ],
    },
    // Питання №13
    {
        question:
            "Якщо б '50 віттінків сірого' знімали в Миколаєві, це були б 50 віттінків..?",
        answers: [
            { text: "асфальту", correct: true },
            { text: "Старого Lounge", correct: true },
            { text: "плитки Сєнкевіча", correct: true },
            {
                text: "телефонних дзвінків після 22:00 від колег по роботі",
                correct: true,
            },
        ],
    },
    // Питання №14
    {
        question:
            "Яку відповідь дав відомий миколаївський мамкін-предпрєніматєль на питання ʼДеньги есть?ʼ?",
        answers: [
            { text: "'Имеются'", correct: false },
            {
                text: "'Деньги у меня есть — у меня нет возможность их тратить'",
                correct: false,
            },
            {
                text: "'Богатый не тот у кого нет денег, а тот, у кого они есть'",
                correct: false,
            },
            { text: "'Присутствуют'", correct: true },
        ],
    },
    // Питання №15
    {
        question:
            "Яке прізвище носить володарка відомого прікола 'О, а это я с крыши падаю..'?",
        video: "video/q15.mp4",
        answers: [
            { text: "Анна Кареніна", correct: false },
            { text: "Мері Поппінс", correct: false },
            { text: "Ольга Картункова", correct: true },
            { text: "Олексій Арестович", correct: false },
        ],
    },
    // Питання №16
    {
        question:
            "Бороздикт небо птитч, не горикт в доме петч, по асфалькту бежикт..?",
        answers: [
            { text: "Бенефис Кибердвач", correct: false },
            { text: "Бателфилд Овервотч", correct: false },
            { text: "Ольга Картункова", correct: false },
            { text: "Бенедикт Кембербетч", correct: true },
        ],
    },
    // Питання №17
    {
        question:
            "В якій з твоїх найулюбленіших кіноадаптацій Шерлока Холмса, доктора Ватсона грала жінка?",
        answers: [
            { text: "Елементарно", correct: true },
            { text: "Не елементарно", correct: false },
            { text: "Шерлок", correct: false },
            { text: "Шерлок Холмс і доктор Ватсон(с)", correct: false },
        ],
    },
    // Питання №18
    {
        question: "Який бельгієць постійно піклувався про сірі клітинки?",
        answers: [
            { text: "Місс Марпл", correct: false },
            { text: "Еркюль Пуаро", correct: true },
            { text: "Віталій Кличко", correct: false },
            { text: "Крістіан Грей", correct: false },
        ],
    },
    // Питання №19
    {
        question:
            "В якій телепрограмі 2010-х років можно було почути джингл з таким початком: 'Щас модно буть дегеніратом, тусуйся, пляши, як кретін..'?",
        answers: [
            { text: "'Богиня шопінгу'", correct: false },
            { text: "'Дурнєв дивиться сторіс'", correct: false },
            { text: "'Дурнєв +1'", correct: true },
            { text: "'Кохана, ми вбиваємо дітей'", correct: false },
        ],
    },
    // Питання №20
    {
        question: "Кого збило на переїзді в дуже відомому (сподіваюсь) телесеріалі 2010-х?",
        video: "video/q20.mp4",
        answers: [
            { text: "Коалу", correct: false },
            { text: "Лінивця", correct: false },
            { text: "Вітальку", correct: false },
            { text: "Панду", correct: true },
        ],
    },
    // Питання №21
    {
        question: "З якого фільму взятий цей відеофрагмент?",
        video: "video/q21.mp4",
        answers: [
            { text: "'Солдати'", correct: false },
            { text: "'Крок уперед'", correct: true },
            { text: "'Три метри над рівнем неба'", correct: false },
            { text: "'Форсаж'", correct: false },
        ],
    },
    // Питання №22
    {
        question:
            "Що трапилось з головним героєм кліпу Maroon 5 в пісні 'One more night'?",
        video: "video/q22.mp4",
        answers: [
            { text: "Програв боксерський поєдинок", correct: false },
            {
                text: "Вистрибнув з під завіси на весіллі та почав співати свої пісні",
                correct: false,
            },
            { text: "Почав рухатись як Мік Джаггер", correct: false },
            { text: "Від нього пішла дружина з дитиною", correct: true },
        ],
    },
    // Питання №23
    {
        question:
            "Сподіваюсь відчуття ностальгії в тебе вже достатньо розігралось) Не підкажеш назву цієї пісні, зовсім вилетіла з голови?",
        audio: "audio/q23.mp3",
        answers: [
            { text: "'Photograph'", correct: false },
            { text: "'How You Remind Me'", correct: true },
            { text: "'Thunder'", correct: false },
            { text: "'I Hate Everything About You'", correct: false },
        ],
    },
    // Питання №24
    {
        question: "А чи пам'ятаєш ти цю рекламу? Що в ній рекламується?",
        video: "video/q24.mp4",
        answers: [
            { text: "Non Stop", correct: false },
            { text: "Red Bull", correct: false },
            { text: "Revo Energy", correct: true },
            { text: "Львівське Різдвяне", correct: false },
        ],
    },
    // Питання №25
    {
        question:
            "А тут ми маємо справу з мультфільмом, чи пам'ятаєш ти його назву?",
        video: "video/q25.mp4",
        answers: [
            { text: "'Острів скарбів'", correct: true },
            { text: "'Пригоди поросяти Фунтика'", correct: false },
            { text: "'Качині історії'", correct: false },
            { text: "'Пірати Карибського моря'", correct: false },
        ],
    },
    // Питання №26
    {
        question:
            "Цей актор тобі персонажу з якогось телесеріалу 00-х не нагадує?",
        img: "images/q26.jpg",
        answers: [
            { text: "'Надштучне'", correct: false },
            { text: "'Надприродне'", correct: true },
            { text: "'Щоденники вампіра'", correct: false },
            { text: "'Хата на тата'", correct: false },
        ],
    },
    // Питання №27
    {
        question:
            "Як звали дивакуватого героя однойменного фільму з Джонні Деппом та Вайноною Райдер?",
        img: "images/q27.jpg",
        answers: [
            { text: "'Едвард Кровосіся'", correct: false },
            { text: "'Едвард Руки-з-жопи'", correct: false },
            { text: "'Едвард Сноуден'", correct: false },
            { text: "'Едвард Руки-ножиці'", correct: true },
        ],
    },
    // Питання №28
    {
        question:
            "В якій відомій серії фільмів знімався цей ходячий чоловічий цитатник з ВК?",
        video: "video/q28.mp4",
        answers: [
            { text: "'Виїздник'", correct: false },
            { text: "'Перенісник'", correct: false },
            { text: "'Перевізник'", correct: true },
            { text: "'Форсаж'", correct: true },
        ],
    },
    // Питання №29
    {
        question:
            "Кого побачила Білосніжка, прокинувшись в домівці з маленькими ліжками та подушками?",
        answers: [
            { text: "Одинадцять друзів Оушена", correct: false },
            { text: "Дванадцять апостолів", correct: false },
            { text: "Восьмеро гоміків", correct: false },
            { text: "Семеро гномів", correct: true },
        ],
    },
    // Питання №30
    {
        question:
            "Ну і нарешті останнє питання. Хто ж сьогодні святкує день народження?",
        answers: [
            {
                text: "Трошки подорослішавше янголятко з іменем 'Яна'",
                correct: true,
            },
            { text: "Моя сестра", correct: true },
            { text: "Коваленко Яна", correct: true },
            { text: "Янесса Яновська", correct: true },
        ],
    },
]

const questionElement = document.getElementById("question")
const videoElement = document.createElement("video")
const audioElement = document.createElement("audio")
const imageElement = document.createElement("img")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")
const outputQuestionNumber = document.getElementById("question-number")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion() {
    resetState()

    audioElement.pause()
    videoElement.pause()

    let currentQuestion = questions[currentQuestionIndex]
    let questionNumber = currentQuestionIndex + 1
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question

    outputQuestionNumber.innerHTML = questionNumber + " / 30"

    // Show video if available
    if (currentQuestion.video) {
        videoElement.src = currentQuestion.video
        videoElement.controls = true
        videoElement.style.display = "block"
        const videoContainer = document.getElementById("video-container")
        videoContainer.appendChild(videoElement)
    } else {
        videoElement.style.display = "none"
    }

    // Show audio if available
    if (currentQuestion.audio) {
        audioElement.src = currentQuestion.audio
        audioElement.controls = true
        audioElement.style.display = "block"
        const audioContainer = document.getElementById("audio-container")
        audioContainer.appendChild(audioElement)
    } else {
        audioElement.style.display = "none"
    }

    // Show image if available
    if (currentQuestion.img) {
        imageElement.src = currentQuestion.img
        imageElement.controls = true
        imageElement.style.display = "block"
        const imageContainer = document.getElementById("image-container")
        imageContainer.appendChild(imageElement)
    } else {
        imageElement.style.display = "none"
    }

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

function showScore() {
    resetState()
    audioElement.pause()
    videoElement.pause()
    outputQuestionNumber.innerHTML = "Нарешті, ти успішно дішла до цілі!"
    questionElement.innerHTML = `Ти набрала ${score} балів з ${questions.length}, а відповідно до цього чудового результату маєш повне іменинне право на свій невеликий подарунок від сімейства лівобережних!`
    nextButton.innerHTML = "Продовжити!"
    nextButton.style.display = "block"
    nextButton.onclick = function (event) {
        window.location.href = "final-page.html"
    }
    videoElement.style.display = "none"
    audioElement.style.display = "none"
    imageElement.style.display = "none"
}

function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz()
    }
})

startQuiz()
