/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MainContainer.css";
export default function MainContainer() {
  return (
    <div className="container">
      {/* bg video */}
      <div className="main-bg-vdo">
        <div className="bg-vdo">
          <video src="SCR002.webm" autoPlay muted width="450px"></video>
        </div>
        {/* music */}
        <div className="music">
          <audio src="music.mp3" autoPlay loop></audio>
        </div>
      </div>

      {/* main */}
      <div className="main-bg-vdoplay">
        <div className="bg-vdoplay">
          <video src="SCR003.webm" autoPlay muted width="450px"></video>
        </div>
        {/* khmer text */}
        <div className="khmer_detail">
          <img src="khmer_detail.png" alt="" width="430px" />
        </div>
        <div className="btn-save-date">
          <a href="">
            <img src="btn-save-date.png" alt="" width="200px" />
          </a>
        </div>
        {/* english text */}
        <div className="english_detail">
          <img src="english_detail.png" alt="" width="430px" />
        </div>
        <div className="event-countdown">
          <img src="event-countdown.png" alt="" width="300px" />
        </div>

        {/* a img */}
        <div className="a-img">
          <div className="img">
            <img src="img23.png" alt="" width="451px" />
          </div>
          <div className="text">
            <h4>
              wedding<h2>Congratulation</h2>
            </h4>
          </div>

          {/* Event */}
          <div className="events">
            <div className="event_agenda_text">
              <img src="event_agenda_text.png" alt="" width="420px" />
            </div>
            <div className="event_agenda_date">
              <img src="event_agenda_date.png" alt="" width="430px" />
            </div>
            <div className="event_agenda_detail">
              <img src="event_agenda_detail.png" alt="" width="430px" />
            </div>
            <div className="location_text">
              <img src="location_text.png" alt="" width="430px" />
            </div>
            <div className="location">
              <img src="location.png" alt="" width="430px" />
            </div>
            <div className="btn-map">
              <a href="">
                <img src="btn-map.png" alt="" width="220px" />
              </a>
            </div>
          </div>

          {/* Stack-Pictures */}
          <div className="main-gallery">
            <div className="gallery">
              <img src="gallery_text.png" alt="" width="430px" />
            </div>
            <div className="stack-img1">
              <img src="1.png" alt="" width="394px" />
              <div className="stack1">
                <img src="2.png" alt="" width="193px" />
                <img src="3.png" alt="" width="193px" />
              </div>
            </div>

            <div className="stack-img2">
              <img src="4.png" alt="" width="394px" />
              <div className="stack2">
                <img src="5.png" alt="" width="193px" />
                <img src="6.png" alt="" width="193px" />
              </div>
            </div>

            <div className="stack-img3">
              {/* <img src="4.png" alt="" width="394px" /> */}
              <div className="stack3">
                <img src="7.png" alt="" width="193px" />
                <img src="8.png" alt="" width="193px" />
              </div>
            </div>

            <div className="stack-img4">
              <img src="img9.png" alt="" width="394px" />
              <div className="stack4">
                <img src="img10.png" alt="" width="193px" />
                <img src="img11.png" alt="" width="193px" />
              </div>
            </div>

            <div className="stack-img5">
              <img src="img12.png" alt="" width="394px" />
              <div className="stack5">
                <img src="img13.png" alt="" width="193px" />
                <img src="img14.png" alt="" width="193px" />
              </div>
            </div>

            <div className="stack-img6">
              <img src="img15.png" alt="" width="394px" />
              <div className="stack6">
                <img src="img16.png" alt="" width="193px" />
                <img src="img17.png" alt="" width="193px" />
              </div>
            </div>

            <div className="stack-img7">
              <img src="img18.png" alt="" width="394px" />
              <div className="stack7">
                <img src="img19.png" alt="" width="193px" />
                <img src="img20.png" alt="" width="193px" />
              </div>
            </div>

            <div className="stack-img8">
              <img src="img21.png" alt="" width="394px" />
              <div className="stack8">
                <img src="img22.png" alt="" width="193px" />
                <img src="img23.png" alt="" width="193px" />
              </div>
            </div>

            <div className="stack-img9">
              {/* <img src="img21.png" alt="" width="394px" /> */}
              <div className="stack9">
                <img src="img24.png" alt="" width="193px" />
                <img src="img25.png" alt="" width="193px" />
              </div>
            </div>

            {/* yt-vdo */}
            <div className="yt-vdoplay">
              <iframe
                width="394px"
                height="215"
                src="https://www.youtube.com/embed/EdCvxU2Pufc?si=gI7InvzAI_dWzFI_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* wishtext */}

            <div className="wishgift_text">
              <img src="wishgift_text.png" alt="" width="430px" />
            </div>
            <div className="box_wishgift">
              <img src="box_wishgift.png" alt="" width="430px" />
            </div>
            <div className="btn_gift">
              <a href="">
                <img src="btn_gift.png" alt="" width="220px" />
              </a>
            </div>

            <div className="kh_eng_text">
              <img src="kh_eng_text.png" alt="" width="430px" />
            </div>
            {/* Greeting Message */}
            <div className="greeting-message">
              <img src="greeting-message.png" alt="" width="430px" />
            </div>
            <div className="message">
              <div className="name">
                <input type="text" id="name" placeholder="Name" />
              </div>
              <div className="comment">
                <input type="text" placeholder="Comment" />
              </div>
            </div>

            <div className="btn-wish">
              <a href="">
                <img src="btn-wish.png" alt="" width="220px" />
              </a>
            </div>

            {/* message */}
            <div className="msg-text">
              <div className="text1">
                <p>
                  ☻ Sun<hr></hr>
                  <p>
                    "Congratulations on your wedding Fri. Sorry can’t join your
                    wedding. Best wishes to the bride and groom as you begin
                    your journey together. " ☚
                  </p>
                  <p>25-05-2025 | 06:26pm</p>
                </p>
              </div>

              <div className="text2">
                <p>
                  ☻ P1CHGG<hr></hr>
                  <p>
                    "Hi haha happy your wedding day bro sal..sorry can’t join ,
                    I hope we can keep in touch later. Anyway HAPPY WIFE HAPPY
                    LIFE 😍 (check aba pg) from pichais " ☚
                  </p>
                  <p>25-05-2025 | 04:34pm</p>
                </p>
              </div>
              <div className="text3">
                <p>
                  ☻ ចង់ការ/Jongka Gift Station<hr></hr>
                  <p>
                    "ធីម”ចង់ការ Gift Station” សូមគោរពជូនពរដល់គូរស្វាមី ភរិយាថ្មី
                    នូវសុភមង្គលជានិរន្តរ៍… ❤️🙏🏻" ☚
                  </p>
                  <p>22-05-2025 | 11:20pm</p>
                </p>
              </div>
            </div>

            {/* Credit */}
            <div className="end-credit">
              <a href="https://www.facebook.com/sambot.online/">
                <img src="end-credit.png" alt="" width="430px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
