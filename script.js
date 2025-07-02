
const quotes = [
    { text: "Fi Sabeelillah, we go.", author: "You, probably while packing for Bogor" },
    { text: "الرِّزْقُ عَلَى اللَّهِ – Rizq is from Allah.", author: "Hadith" },
    { text: "Sujud solves what overthinking never will.", author: "Some wise soul (probably you after Subuh)" },
    { text: "Every day is a blank ayat. You decide the tafsir.", author: "Hidayah’s Notebook" },
    { text: "You are not behind — you're on Allah’s timeline.", author: "Your Rahmah Era" },
    { text: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ", author: "Surah Al-Baqarah 2:216" },
    { text: "You prayed for this. Remember that.", author: "Reminder on tough days" },
    { text: "الراحة في الجنة – True rest is in Jannah.", author: "Islamic proverb" },
    { text: "Sometimes tawakkul looks like surrender. And that’s okay.", author: "Spiritual growth, Day 47" },
    { text: "Put the dunya down. Pick the Quran up.", author: "Self-care 101" }
];

const random = Math.floor(Math.random() * quotes.length);
document.getElementById("quote").innerText = quotes[random].text;
document.getElementById("author").innerText = quotes[random].author;
