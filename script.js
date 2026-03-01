const duas = [
  "داء للامتحانات: اللهم يا فتاح إفتح علي فتوح العارفين وحفظ النبيين و إلهام ملائكتك المقربين و توفيق عبادك الصالحين... رب اشرح لي صدري ويسر لي امري واحلل عقدة من لساني يفقه قولي... اللهم يا وهاب ألهمني الصواب في كل سؤال وجواب... اللهم لاتضيع لي تعبي ولا تضيع تعب اهلي بي... اللهم إني خرجت من حولي وقوتي إلى حولك وقوتك فأعطني على قدر فضلك لا على قدر تعبي",
  "اللهم لا سهل إلا ما جعلته سهلا وأنت تجعل الحزن إذا شئت سهلا",
  "رب اشرح لي صدري، ويسر لي أمري، واحلل عقدة لساني، يفقهوا قولي رب زدني علما",
  "يا رب أدخلني مدخل صدق وأخرجني مخرج صدق، واجعل لي من لدنك سلطانًا ونصيرًا.",
  "للهم إني أستودعك ما قرأت وما حفظت وما تعلمت، فرده لي عند حاجتي إليه إنك على كل شيء قدير",
  "اللهم وكلت أمري إليك، وألجأت ظهري إليك، وفوّضت أمري إليك، لا رادّ لفضلك، ولا مانع لعطائك، لا إله إلا أنت سبحانك إني كنت من الظالمين",
  "اللهم اجعل بعد العسر يسرا",
  "للهم إني أسألك بأني أشهد أنك أنت الله لا إله إلا أنت ، الأحد الصمد الذي لم يلد ولم يولد ولم يكن له كفوا أحد",
  "بسم الله توكلت على الله و لا حول و لا قوة الا بالله",
  "اللهم إني أسألك صفاء الذهن، وسرعة الفهم، وقوة الحفظ، والبركة في الوقت"
];

const duaaCard = document.getElementById('duaa');
const generateBtn = document.getElementById('generateBtn');
const datetimeEl = document.getElementById('datetime');

// Function to generate a random duaa
function generateDuaa() {
  duaaCard.classList.add('fade');
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * duas.length);
    duaaCard.innerText = duas[randomIndex];
    duaaCard.classList.remove('fade');
  }, 300);
}

// Display current date and time in English
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  datetimeEl.innerText = now.toLocaleDateString('en-US', options) + " - " + now.toLocaleTimeString('en-US');
}

// Initial load
generateDuaa();
updateDateTime();

// Update time every second
setInterval(updateDateTime, 1000);

// Generate new duaa on button click
generateBtn.addEventListener('click', generateDuaa);

// Automatically change duaa every hour
setInterval(generateDuaa, 3600000);