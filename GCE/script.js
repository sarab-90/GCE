// الدالة التي تتحكم بعرض الأقسام  
function showSectionFun(sectionId) {
  // اخفاء جميع الأقسام
  const sections = document.querySelectorAll("section")
  sections.forEach(sec => sec.classList.remove("active"))

  // اظهار القسم المطلوب
  const sec = document.getElementById(sectionId)
  if(sec) {
    sec.classList.add("active")
    sec.scrollIntoView({behavior: "smooth"}) //لعمل scroll smooth
  }
}

// countdown
// التاريخ المستهدف
// تعديل ساعة المعرض
const eventDate = new Date("2025-09-24T10:00:00").getTime()
// يحسب الوقت الحالي وموعد الحدث
const timer = setInterval(() => {
  const now = new Date().getTime()
  const diff = eventDate - now

//   انتهاء الوقت
  if (diff <= 0) {
      document.getElementById("countdownMessage").innerText = "🎉 The Event has Started!"
      document.getElementById("countdown").style.display = "none" //يوقف العداد
      clearInterval(timer)
  } 
  else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    //تحديث القيم مع حركة
      updateBox("days",days)
      updateBox("hours",hours)
      updateBox("minutes",minutes)
      updateBox("seconds",seconds)
    }
}, 1000)
//دالة تحيث صندوق مع حركة عند تغيير رقم
function updateBox(id, value) {
  const element = document.getElementById(id);
  if (element.innerText != value) {
    element.innerText = value;
    element.parentElement.classList.add("animate");
    setTimeout(() => element.parentElement.classList.remove("animate"), 300);
  }
}


//  صفحة تواصل معنا
function confirmationMessage(){
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("contactMessage").value.trim()
    const confirmation = document.getElementById("confirmation")

    if (name === "" || email === "" || message === ""){
        confirmation.textContent = "❗ Please fill in all fields."
        confirmation.style.color = "red"
    }
    else{
        confirmation.textContent = "Your message has been received , Thank You "
    }
}