// import React, {useState, useEffect} from 'react';
// import './faq.css';
// import fetch from '../api/fetch';

// const Packages = () => {
//     const [getFaq, setFaq] = useState([]);
  
//     useEffect(() => {
//       fetch.getFaq()
//           .then(data => setFaq(data))
//       }, [])
  
//       return(
//         <section className="section">
//             <div className="faq-container">
//                 <div className="accordion">
//                 </div>
//             </div>
//         </section>
//       );
//   };
  
//   export default Packages;

// export default function Faq() {
//   return(
//     <section className="section">
//         <div className="faq-container">
//             <div className="accordion">
//                 {/* Question 1 */}
//                 <div className="accordion-item" id="question1">
//                     <a className="accordion-link" href="#question1">
//                         Where are you located?
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             In Tallinn, we hold our dance classes at Veerenni 29-1. 
//                             In Haapsalu, we organise classes at the Haapsalu Culture Centre, at Posti 3. 
//                         </p>
//                     </div>
//                 </div>
//                 {/* Question 2 */}
//                 <div className="accordion-item" id="question2">
//                     <a className="accordion-link" href="#question2">
//                         Is parking available?
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             Yes, you can park in front of the building. 
//                         </p>
//                     </div>
//                 </div>

//                 {/* Question 3 */}
//                 <div className="accordion-item" id="question3">
//                     <a className="accordion-link" href="#question3">
//                         What should I wear in the classes? 
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             Wear comfortable clothes, so you could feel good and relaxed. In that way, you can focus more on dancing.
//                         </p> 
//                     </div>
//                 </div>

//                 {/* Question 4 */}
//                 <div className="accordion-item" id="question4">
//                     <a className="accordion-link" href="#question4">
//                         What kind of shoes should I wear? 
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             Please bring along clean and comfortable inner shoes. However, running shoes and trainers do not really slip whilst dancing, so we would not recommend wearing these.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Question 5 */}
//                 <div className="accordion-item" id="question5">
//                     <a className="accordion-link" href="#question5">
//                         Do I have to come with a partner?
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             No need to bring a partner. Bachata is a social dance. At the beginning of the class, our instructors will find you a partner or we will be exchanging partners during the class. This way you have an opportunity to meet new people.
//                             However, if you do have a partner, feel free to bring them along! 
//                         </p>
//                     </div>
//                 </div>

//                 {/* Question 6 */}
//                 <div className="accordion-item" id="question6">
//                     <a className="accordion-link" href="#question6">
//                         I have never danced before! Should I be worried? 
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             Definitely not! If you are a bit nervous, it is absolutely normal. The atmosphere in our studio is friendly and there is no need to worry if something is not coming out. Our instructors will help you and everyone has an opportunity to learn at their own pace according to their level.
//                             You will not even realise, once you have mastered all the steps and dance combos!
//                         </p>
//                     </div>
//                 </div>

//                 {/* Question 7 */}
//                 <div className="accordion-item" id="question7">
//                     <a className="accordion-link" href="#question7">
//                         How are the classes taken into account every month?
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             At the beginning of each month, the members of our dance school pay a monthly fee, which includes classes according to different levels for four weeks. 
//                             Each dancer is responsible if they cannot take part in the classes during this month. 
//                             In exempt, we also take new members in the middle of the month. Please write to us if you would like this and we will find the best solution. 
//                         </p>
//                     </div>
//                 </div>

//                 {/* Question 8 */}
//                 <div className="accordion-item" id="question8">
//                     <a className="accordion-link" href="#question8">
//                         Do I need to book beforehand to come to a trial class or can I just show up?
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             We ask everybody to sign up via our registration form for the trial class. This way we can ensure that the instructors are aware of the size of the group and can guide you more efficiently during the first class. 
//                         </p>
//                     </div>
//                 </div>

//                 {/* Question 9 */}
//                 <div className="accordion-item" id="question9">
//                     <a className="accordion-link" href="#question9">
//                         What age do I have to be to dance?
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             There is no age limit! Dancing is for everybody. We believe that age is just a number, so do not be afraid to sign up for a trial class. 
//                             I do not know much about Bachata. Why should I join regular courses?
//                             Bachata is a fun and social dance, where you can come with a partner or solo. You will find new friends, enjoy Latin American rhythms and develop yourself physically. Let’s not forget you can develop yourself mentally as during the classes you will be learning various dance combos. 
//                             Bachata is an extremely popular dance style.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Question 10 */}
//                 <div className="accordion-item" id="question10">
//                     <a className="accordion-link" href="#question10">
//                         Could I also take private lessons?
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             Yes, our instructors also hold private classes according to the needs of every dancer. Please contact us, so we could organise this according to your time schedule.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Question 11 */}
//                 <div className="accordion-item" id="question11">
//                     <a className="accordion-link" href="#question11">
//                         We are planning to have a birthday party and thinking of learning Bachata as well. Would it be possible for you to organise this?
//                         <ion-icon class="down" name="caret-down-outline"></ion-icon>
//                         <ion-icon class="remove" name="remove-outline"></ion-icon>
//                     </a>
//                     <div className="answer">
//                         <p>
//                             Yes, absolutely! Our amazing teachers can host a dance class at a birthday party or even at your hen due. 
//                             Practising Latin American dances is also really popular and engaging at corporate events. 
//                             Please contact us, so we could discuss the details and arrange a fantastic party. 
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   );
// }