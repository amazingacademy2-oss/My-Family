// ===============================
// FAMILY INFORMATION POPUPS
// ===============================

function showFamilyInfo(member) {

    const popup = document.getElementById("familyInfoPopup");
    const content = document.getElementById("familyPopupContent");

    let information = "";

    if (member === "father") {

        information = `
            <div class="info-icon">👨‍💻</div>
            <h1>MALLIKARJUN</h1>
            <h3>Software Engineer</h3>

            <p>
                My father is a Software Engineer. 
                He works with technology to create useful 
                software and solve problems using computers.
            </p>

            <p>
                He is hardworking, responsible and always 
                supports our family.
            </p>
        `;

    }

    else if (member === "mother") {

        information = `
            <div class="info-icon">❤️</div>
            <h1>BHAGYASHREE</h1>
            <h3>Housewife</h3>

            <p>
                My mother takes care of our home and family 
                with love and dedication.
            </p>

            <p>
                She manages many important responsibilities 
                and always makes our home happy and comfortable.
            </p>
        `;

    }

    else if (member === "aditi") {

        information = `
            <div class="info-icon">📚</div>
            <h1>ADITI</h1>
            <h3>Student</h3>

            <p>
                I am a student who loves learning new things 
                and exploring my interests.
            </p>

            <p>
                I enjoy dancing, drawing, playing sports and 
                spending wonderful time with my family.
            </p>
        `;

    }

    else if (member === "agastya") {

        information = `
            <div class="info-icon">🏏</div>
            <h1>AGASTYA</h1>
            <h3>Student</h3>

            <p>
                Agastya is a student who enjoys learning 
                and having fun.
            </p>

            <p>
                He especially enjoys playing cricket 
                and spending time with the family.
            </p>
        `;

    }

    else if (member === "shraddha") {

        information = `
            <div class="info-icon">🎤</div>
            <h1>SHRADDHA</h1>
            <h3>Student</h3>

            <p>
                Shraddha is a cheerful student who enjoys 
                creative and fun activities.
            </p>

            <p>
                She likes dolls, dancing and singing.
            </p>
        `;
    }

    content.innerHTML = information;

    popup.style.display = "flex";

}


// ===============================
// CLOSE FAMILY INFORMATION
// ===============================

function closeFamilyInfo() {

    document.getElementById("familyInfoPopup").style.display = "none";

}


// ===============================
// CURTAIN + THANK YOU MESSAGE
// ===============================

function openCurtain() {

    document.getElementById("curtainPage").style.display = "block";

    setTimeout(function () {

        document.querySelector(".left-curtain").style.transform =
            "translateX(-100%)";

        document.querySelector(".right-curtain").style.transform =
            "translateX(100%)";

    }, 500);


    setTimeout(function () {

        document.getElementById("thankYouPopup").style.display = "flex";


        // Floating Hearts

        for (let i = 0; i < 25; i++) {

            let heart = document.createElement("div");

            heart.className = "heart";

            heart.innerHTML = "❤️";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (18 + Math.random() * 18) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);

        }

    }, 2300);

}


// ===============================
// CLOSE THANK YOU POPUP
// ===============================

function closePopup() {

    document.getElementById("thankYouPopup").style.display = "none";

    document.getElementById("curtainPage").style.display = "none";


    // Reset curtains

    document.querySelector(".left-curtain").style.transform =
        "translateX(0)";

    document.querySelector(".right-curtain").style.transform =
        "translateX(0)";

}


// ===============================
// CLOSE POPUPS BY CLICKING OUTSIDE
// ===============================

window.onclick = function(event) {

    const familyPopup =
        document.getElementById("familyInfoPopup");

    const thankPopup =
        document.getElementById("thankYouPopup");


    if (event.target === familyPopup) {

        closeFamilyInfo();

    }

    if (event.target === thankPopup) {

        closePopup();

    }

};


// ===============================
// ESC KEY
// ===============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeFamilyInfo();
        closePopup();

    }

});